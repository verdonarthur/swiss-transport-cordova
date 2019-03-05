import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Search.vue')
    },
    {
      path: '/bookmarks',
      name: 'bookmarks',
      component: () => import( './views/Bookmarks.vue')
    },
    {
      path:'/station/:id',
      name:'station',
      component:() => import('./views/Station.vue'),
      props:true
    }
  ]
})
