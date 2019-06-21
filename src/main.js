import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/*
* 引入自己封装的接口文档
* */
import {url} from '@/api/url'
Vue.prototype.$url = url;

/*
* 引入UI库
* */
import ElementUI from 'element-ui'
import './plugins/element.js'
Vue.use(ElementUI);

/*
* 引入erhart
* */
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

/*
* 引入less库
* */
import '@/assets/less/public.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
