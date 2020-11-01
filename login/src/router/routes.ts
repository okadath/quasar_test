import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/Index.vue') },
      {
        path: '',
        name: 'index',
        component: () => import('pages/Index.vue')
      },
      {
        path: '/usuarios/',
        name: 'usuarios',
        component: () => import('pages/Usuarios.vue')
      },
      {
        path: '/acerca/',
        name: 'acerca',
        component: () => import('pages/Acerca.vue')
      }
    ]
  },

  { // Nuevas rutas
    path: '/',
    component: () => import('layouts/Users.vue'),
    children: [
      {
        path: '/login/',
        name: 'login',
        component: () => import('pages/Login.vue')
      },
      {
        path: '/register/',
        name: 'register',
        component: () => import('pages/Register.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
