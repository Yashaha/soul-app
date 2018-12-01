import Vue from 'vue'
import Router from 'vue-router'
import SoulStar from '@/components/star/SoulStar'
import SoulSquare from '@/components/square/SoulSquare'
import SoulChat from '@/components/chat/SoulChat'
import SoulSelf from '@/components/self/SoulSelf'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/soulsquare'
    },
    {
      path: '/soulstar',
      name: 'SoulStar',
      component: SoulStar
    },
    {
      path: '/soulsquare',
      name: 'SoulSquare',
      component: SoulSquare
    },
    {
      path: '/soulchat',
      name: 'SoulChat',
      component: SoulChat
    },
    {
      path: '/soulself',
      name: 'SoulSelf',
      component: SoulSelf
    },
    {
      path: '*',
      redirect: '/soulsquare'
    }
  ]
})
