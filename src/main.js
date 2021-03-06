// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//导入ElmentUI需要
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
//项目使用ElementUI
Vue.use(ElementUI);
/* eslint-disable no-new */
/* eslint-disable */
/*// eslint-disable-next-line*/
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
