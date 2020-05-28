import Vue from 'vue'
import Router from 'vue-router'
//引入封装好的路由路径
import routes from './config'
// 实例化
Vue.use(Router)
export default new Router({
  routes,
})