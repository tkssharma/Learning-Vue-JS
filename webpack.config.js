var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/main.js',
    './src/style/main.scss'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/build.js',
    publicPath: ''
  },
  devServer: {
    inline: true,
    contentBase: "./src",
    proxy: {
      '/api': {
          target: 'http://localhost:3000/api/',
          secure: false,
          changeOrigin: true
      }
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$/,
        loader: 'file-loader',
        options: {
            name: 'static/fonts/[name].[ext]',
            publicPath: '../'
        }
      },
      {
        test: /\.png|\.jpe?g|\.gif$/,
        loader: 'file-loader',
        options: {
            name: 'static/img/[name].[ext]',
            publicPath: '../'
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!resolve-url-loader!sass-loader?sourceMap' })
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
    }
  },
  devtool: '#eval-source-map',
  plugins: [
    new ExtractTextPlugin({ 
      filename:"css/bundle.css"
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: false
    }),
  ]
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}