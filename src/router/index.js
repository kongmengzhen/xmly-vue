import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from 'pages/Classify/Index.vue'
import Youshengshu from 'pages/Classify/Youshengshu.vue'
import Xiangsheng from 'pages/Classify/Xiangsheng.vue'
import Ertong from 'pages/Classify/Ertong.vue'
import Yinyue from 'pages/Classify/Yinyue.vue'
import Detail from 'pages/Detail.vue'
import Categroy from 'pages/Categroy.vue'
import Tuijian from 'pages/Tuijian.vue'
import Search from 'pages/Search.vue'
import SearchList from 'pages/SearchList.vue'
import AudioPlay from 'pages/AudioPlay.vue'

import YoushengshuList from 'components/youshengshu/YoushengshuList.vue'
import DushiList from 'components/youshengshu/DushiList.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: to => {
      return "/home/tuijian"
    }
  },
 
  {
    path: '/home',
    name: 'index',
    component: Index,
    children: [
     /*  {
        path: 'tuijian',
        redirect: to=>{
          return "/"
        }
    
      }, */
      {
        path: 'tuijian',
        name: 'youshengshu',
        component: Tuijian
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
      
    ]
  },
  {
    path: '/youshengshu/:id',
    name: 'detail',
    component: Detail,    
    props:true  
  },
  {
    path: '/youshengshu/:id/:audio',
    name: 'audioplay',
    component: AudioPlay,
    
  },
  {
    path: '/categroy/', 
    name: '/categroy',
    component: Categroy,
    props: true
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
    props: true    
  },
  {
    path: '/search/:id',   
    component: SearchList,
    props: true    
  },
 /*  {
    path: '/search/:id/:id',
    component: SearchList,
    props: true
  } */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
