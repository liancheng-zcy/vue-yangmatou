import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from 'pages/index/layout.vue'
import home from 'pages/index/home/home.vue'
import detail from 'pages/detail/detail'
import community from 'pages/community/community'
import myorder from 'pages/myorder/myorder'
import account from 'pages/account/account'
import topic from 'pages/topic/topic'
import communityDetail from 'pages/community/communityDetail'

Vue.use(VueRouter)
const routes = [
  {
    path:'/',
    redirect:'/index/home' //redirect没有路径的继承性，所以路径必须写全
  },
  {
    path: '/index',
    name: 'index',
    component: layout,
    children: [
      {
        path: 'home',
        name:'home',
        component: home
      },
    ]
  },
  {
    path:'/note/community',
    name:'community',
    component: community,
  },
  {
    path:'/note/community/communityDetail/:id',
    name:'communityDetail',
    component:communityDetail,
    meta: { requiresAuth: true }
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: detail,
  },
  {
    path: '/myorder',
    name: 'myorder',
    component: myorder,
  },
  {
    path: '/account',
    name: 'account',
    component: account,
  },
  {
    path: '/topic',
    name: 'topic',
    component: topic,
  }
 ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
