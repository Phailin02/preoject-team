import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/donate',
    name: 'donate',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/DoNate.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "about" */ '../views/News.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },

  {
    path: '/aboutus',
    name: 'aboutus',
    component: () => import('../views/Aboutus.vue')
  },

//detail news page
{
  path: '/detail1',
  name: 'detail1',
  component: () => import('../views/NewsDetail/detail1.vue')
},
{
  path: '/detail2',
  name: 'detail2',
  component: () => import('../views/NewsDetail/detail2.vue')
},
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
