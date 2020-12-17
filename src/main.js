import Vue from 'vue'

Vue.config.productionTip = false

import Element from 'element-ui'
import './styles/element-variables.scss'

import 'element-ui/lib/theme-chalk/display.css';
import '@/styles/bootstrap-grid.min.css'

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon

Vue.use(Element);

import InfiniteLoading from 'vue-infinite-loading';

Vue.use(InfiniteLoading);


import '@/permission'

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})
