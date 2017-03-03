import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import list from 'components/music_list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/aa',
      name: 'Hello',
      component: Hello
    },{
      path: '/list',
      name: 'list',
      component: list
    }
  ]
})
