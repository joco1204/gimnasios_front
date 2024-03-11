import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/components/Index.vue'
import CrearUsuario from '@/components/CrearUsuario.vue'
import AccesoUsuario from '@/components/AccesoUsuario.vue'
import TomarFoto from '@/components/TomarFoto.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/crear-usuario',
    name: 'crear-usuario',
    component: CrearUsuario
  },
  {
    path: '/acceso-usuario',
    name: 'acceso-usuario',
    component: AccesoUsuario
  },
  {
    path: '/tomar-foto',
    name: 'tomar-foto',
    component: TomarFoto
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
