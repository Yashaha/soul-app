import Vue from 'vue'
import Router from 'vue-router'
import SoulWelcome from '@/components/common/SoulWelcome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SoulWelcome',
      component: SoulWelcome
    }
  ]
})
