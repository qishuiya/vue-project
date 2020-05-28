/**
 * 路由二次封装,
 * 规则是每个vue都要对应的文件夹下面
 * 对以Index结尾的文件会自动去除index
 * 对没有name和path的地方自动生成name和path,
 * 生成的name 如果有/会用_代替 如layout/layout 会生成layout_layout
 * 
 *  */
let routes = [
  {
    path: '/',
    name: 'HomePage',
    // component: () => import('@/views/layout.vue'), 对公共的名字进行提取
    component: 'HomePage',
    // 对子组件重定向
    // redirect: {
    //   name: 'index'
    // },
    // children: [{
    //   // path: '/index',
    //   // name: 'index',
    //   // component: 'index/index',
    // }]
  },
  {
    path: '/404',
    name: '404',
    component: '404'
  },
  // {
  //   component: 'shop/goods/list'
  // },
  // 对没有的地址跳入以下页面
  // {
  //   path: '*',
  //   redirect: {
  //     name: 'index'
  //   }
  // },

]
// 获取路由方法
let getRoutes = function () {
  //生成路由
  createRoute(routes)
  return routes
}
// 把方法单独写出来;是因为有可以会有很多个子路由;这样的话这里就可以用递归
function createRoute (arr) {
  for (let i = 0; i < arr.length; i++) {
    // 如果第一层中路由没有componet这个属性就直接返回,如path:*
    if (!arr[i].component) return;
    // 去除Index
    let val = splicIndex(arr[i].component)
    // 生成name值,用正则把/替换成_下划线(如果路由中自定义的name就使用自定义;没有的话就自动生成)
    arr[i].name = arr[i].name || val.replace(/\//g, '_')
    // 生成path
    arr[i].path = arr[i].path || `/${val}`
    // 有的话自动生成component,把传入上面手写的路由放进来
    let componetFun = import(`@/pages/${arr[i].component}.vue`)
    arr[i].component = () => componetFun;
    // 判断有没有子路由,如果有的话就再运行createRoute这个方法也就是递归
    if (arr[i].children && arr[i].children.length > 0) {
      createRoute(arr[i].children)
    }
  }

}
// 去除index截尾的vue文件
function splicIndex (str) {
  // 如str=login/index 我们需要拿到最后一个index
  let index = str.lastIndexOf('/'); //获取最后一个下标位置
  //获取/最后后面的值
  let val = str.substring(index + 1, str.length)
  // 是否Index结尾
  if (val === 'index') {
    // 把最后/之前的值(login) 返回回去
    return str.substring(index, -1)
  }
  // 如果没有index就把整个str返回去
  return str;
}
export default getRoutes()