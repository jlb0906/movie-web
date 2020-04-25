import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import MovieAdd from '@/pages/MovieAdd'
import Player from '@/pages/Player'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/movie/add',
      name: 'MovieAdd',
      component: MovieAdd
    },
    {
      path: '/movie/player/:id',
      name: 'MoviePlayer',
      component: Player
    }
  ]
})
