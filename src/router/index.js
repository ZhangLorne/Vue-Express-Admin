import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import UserList from '@/page/UserList'
import Home from '@/page/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Index,
      children:[{
        path: '/home',
        component: Home,
        meta: [],
      }, {
          path:'/UserList',
          component:UserList,
          meta: ['数据管理', '用户列表'],
        }]
    },
  ]
})

