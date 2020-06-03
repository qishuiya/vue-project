import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/app.css' // 全局样式

Vue.use(ElementUI);

// 处理路由 重新加载渲染
Vue.config.productionTip = false
const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
