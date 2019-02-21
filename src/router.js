import Vue from 'vue'
import firebase from 'firebase'
import Router from 'vue-router'
import About from './views/About'
import Posts from './views/Posts'
import New from './views/NewPost'
import Login from './views/Login'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '*', redirect: '/login' },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: "login",
      component: Login,
      meta: {
        currentUser: undefined
      }
    },
    {
      path: "/posts",
      name: "posts",
      component: Posts,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/new",
      name: "new",
      component: New,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/about",
      name: 'about',
      component: About,
      meta: {
        requiresAuth: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if(requiresAuth && !currentUser) next('login')
  // else if(!requiresAuth && currentUser) next('about')
  else next()
})
