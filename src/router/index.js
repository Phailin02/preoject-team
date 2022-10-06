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
  path: '/news1',
  name: 'news1',
  component: () => import('../views/NewsDetail/news1.vue')
},
{
  path: '/news2',
  name: 'news2',
  component: () => import('../views/NewsDetail/news2.vue')
},
{
  path: '/news3',
  name: 'news3',
  component: () => import('../views/NewsDetail/news3.vue')
},
{
  path: '/news4',
  name: 'news4',
  component: () => import('../views/NewsDetail/news4.vue')
},
{
  path: '/news5',
  name: 'news5',
  component: () => import('../views/NewsDetail/news5.vue')
},
{
  path: '/news6',
  name: 'news6',
  component: () => import('../views/NewsDetail/news6.vue')
},
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
