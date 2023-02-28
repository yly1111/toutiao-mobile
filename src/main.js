import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './styles/index.less' // 引入全局样式

import { Button } from 'vant'

Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
