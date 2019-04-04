import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './css/iconfont.css'

Vue.use(VueRouter)

import router from './js/router.js'


import axios from 'axios'

import { Cell, Checklist,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import '../node_modules/_mint-ui@2.2.13@mint-ui/lib/style.css'

Vue.prototype.$http = axios
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
