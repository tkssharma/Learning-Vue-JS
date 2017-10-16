import Vue from 'vue'
import template from 'raw-loader!./App.html'

export default {
  name: 'app',
  data: function () {
    return {
      hello: 'Vue template hello !!!'
    }
  },
  template: template
}
