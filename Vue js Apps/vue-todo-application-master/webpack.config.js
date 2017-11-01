module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                exclude: __dirname + 'node_modules/',
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
};
