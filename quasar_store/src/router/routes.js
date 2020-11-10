
// const routes = [
//   {
//     path: '/',
//     component: () => import('layouts/MainLayout.vue'),
//     children: [
//       { path: '', component: () => import('pages/Index.vue') }
//     ]
//   },

//   // Always leave this as last one,
//   // but you can also remove it
//   {
//     path: '*',
//     component: () => import('pages/Error404.vue')
//   }
// ]

// export default routes

// import Vue from 'vue'
// import Router from 'vue-router'
// import store from '../store/index.js'
import Home from '../components/views/Home.vue'
// import About from '../components/views/About.vue'
// import Login from '../components/auth/Login.vue'
// import Register from '../components/auth/Register.vue'
import Resource from '../components/resources/Resources.vue'

// Vue.use(Router)

// const router = new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       component: () => import('layouts/MainLayout.vue'),
//       children: [
//         { path: '', component: () => import('pages/Index.vue') }
//       ]
//     },
//     {
//       path: '/resources',
//       name: 'resources',
//       component: Resource,
//       meta: {
//         requiresAuth: true
//       }
//     },
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: Login
//     },
//     {
//       path: '/register',
//       name: 'register',
//       component: Register
//     },

//     {
//       path: '/about',
//       name: 'about',
//       component: About
//     }
//   ]
// })

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters.isLoggedIn) {
//       console.log('store.getters.isLoggedIn')
//       next()
//       // .then(() => this.$router.push("/"))
//       return
//     }
//     next('/login')
//   } else {
//     // console.log("store.getters.isLoggedIn");
//     next()
//   }
// })

// export default router

// import { RouteConfig } from 'vue-router'
// import { Store } from '../store/index.js'
import Card from '../components/card.vue'

const routes = [
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
        path: '/home/',
        name: 'home',
        component: Home
      },
      {
        path: '/resources',
        name: 'resources',
        component: Resource,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/card',
        name: 'card',
        component: Card, 
      }
      // {
      //   path: '/usuarios/',
      //   name: 'usuarios',
      //   component: () => import('pages/Usuarios.vue')
      // },
      // {
      //   path: '/acerca/',
      //   name: 'acerca',
      //   component: () => import('pages/Acerca.vue'),
      //   // se supone que aqui ya podemos llamarlo
      //   beforeEnter: (to, from, next) => {
      //     // Ahora podemos hacer uso del Store en el archivo routes.js
      //     if (!Store.getters[]) {//'auth/isAuthenticated']) {
      //       next('login')
      //     } else {
      //       next()
      //     }
      //   }

      // }
    ]
  },

  // { // Nuevas rutas
  //   path: '/',
  //   component: () => import('layouts/Users.vue'),
  //   children: [
  //     {
  //       path: '/login/',
  //       name: 'login',
  //       component: () => import('pages/Login.vue')
  //     },
  //     {
  //       path: '/register/',
  //       name: 'register',
  //       component: () => import('pages/Register.vue')
  //     }
  //   ]
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
