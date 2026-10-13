import { createRouter, createWebHashHistory } from 'vue-router'

import CondicionalView from '../views/CondicionalView.vue'
import MostrarView from '../views/MostrarView.vue'
import ListaView from '../views/ListaView.vue'
import ClavesView from '../views/ClavesView.vue'

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    { path: '/', redirect: '/condicional' },
    { path: '/condicional', component: CondicionalView },
    { path: '/mostrar', component: MostrarView },
    { path: '/lista', component: ListaView },
    { path: '/claves', component: ClavesView },
  ],
})

export default router