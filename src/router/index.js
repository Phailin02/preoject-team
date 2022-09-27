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
  path: '/new1',
  name: 'new1',
  component: () => import('../views/NewsDetail/new1.vue')
},
{
  path: '/new2',
  name: 'new2',
  component: () => import('../views/NewsDetail/new2.vue')
},
{
  path: '/new3',
  name: 'new3',
  component: () => import('../views/NewsDetail/new3.vue')
},
{
  path: '/new4',
  name: 'new4',
  component: () => import('../views/NewsDetail/new4.vue')
},
{
  path: '/new5',
  name: 'new5',
  component: () => import('../views/NewsDetail/new5.vue')
},
{
  path: '/new6',
  name: 'new6',
  component: () => import('../views/NewsDetail/new6.vue')
},
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
