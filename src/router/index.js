import Vue from 'vue'
import VueRouter from 'vue-router'
import Zona from '../views/Zona.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Zona',
    component: Zona
  },
  {
    path: '/zona',
    name: 'Zona',

    component: () => import( '../views/Zona.vue')
  },
  {
    path: '/ofertas',
    name: 'Ofertas',

    component: () => import( '../views/Ofertas.vue')
  },
  {
    path: '/ratones',
    name: 'Ratones',

    component: () => import( '../views/Ratones.vue')
  },
  {
    path: '/monitores',
    name: 'Monitores',

    component: () => import( '../views/Monitores.vue')
  },
  {
    path: '/teclados',
    name: 'Teclados',

    component: () => import( '../views/Teclados.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
