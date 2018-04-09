import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NewBuilding from './views/NewBuilding.vue'
import Lsdt from './views/Lsdt.vue'
import Lxwm from './views/Lxwm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/NewBuilding/:fenlei',
      name: 'newbuilding',
      component: NewBuilding
    },
    {
      path: '/Lsdt',
      name: 'lsdt',
      component: Lsdt
    },
    {
      path: '/Lxwm',
      name: 'lxwm',
      component: Lxwm
    }
  ]
})
