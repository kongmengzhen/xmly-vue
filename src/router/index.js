import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from 'pages/Index.vue'
import Youshengshu from 'pages/Youshengshu.vue'
import Xiangsheng from 'pages/Xiangsheng.vue'
import Ertong from 'pages/Ertong.vue'
import Yinyue from 'pages/Yinyue.vue'

import YoushengshuList from 'components/youshengshu/YoushengshuList.vue'
import DushiList from 'components/youshengshu/DushiList.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/home',
    name: 'index',
    component: Index,
    children: [
      {
        path: '/tuijian',
        name: '/tuijian',
        component: Index
      },
      {
        path: 'youshengshu',
        name: 'youshengshu',
        component: Youshengshu
      },
      {
        path: 'xiangsheng',
        name: 'xiangsheng',
        component: Xiangsheng
      },
      {
        path: 'yinyue',
        name: 'yinyue',
        component: Yinyue
      },
      {
        path: 'ertong',
        name: 'ertong',
        component:Ertong
      },
      {
        path: 'renwen',
        name: 'renwen',
        component: Youshengshu
      },
      {
        path: 'qinggan',
        name: 'qinggan',
        component: Youshengshu
      },
      {
        path: 'lishi',
        name: 'lishi',
        component: Youshengshu
      },
      {
        path: 'keji',
        name: 'keji',
        component: Youshengshu
      }
    ]
  },
  {
    path: '/youshengshu',
    name: '/youshengshu',
    component: YoushengshuList,
    children: [
      {
        path: 'yanqing',
        component: YoushengshuList,
      },
      {
        path: 'dushi',
        component: DushiList,
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
