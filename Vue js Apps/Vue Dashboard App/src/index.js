'use strict';

import Vue from 'vue';
import App from './App.vue';

new Vue({
    render: createEle => createEle(App)
}).$mount('#app');
