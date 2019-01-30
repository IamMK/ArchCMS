import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About'
import Posts from './views/Posts'
import New from './views/NewPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: "/posts",
      name: "posts",
      component: Posts
    },
    {
      path: "/new",
      name: "new",
      component: New
    }
  ]
})
