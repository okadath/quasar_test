# crear proyectos con Quasar

```sh
yarn add @quasar/cli
yarn quasar create <nombre de la carpeta>

yarn quasar new [p|page] <nombre_pagina>
yarn quasar new [l|layout] <nombre_layout>
yarn quasar new [c|component] <nombre_componente>
yarn quasar new [b|boot] <nombre_archivo_boot>
yarn quasar new [s|store] <nombre_modulo_de_store>
```

diseñar layouts
https://quasar.dev/layout-builder

crear el proyecto con:

```sh
yarn quasar create <nombre de la carpeta>
```

y elegir las opciones a ocupar:

ESLint  
Vuex
Axios
Vue-i18n

tenemos varias carpetas creadas, necesitamos editar el quasar.conf.js para poder trabajar correctamente:

```js
build: {
//esto permite no usar el # default en las urls
scopeHoisting: true,
vueRouterMode: 'history',
...
},
...
framework: {
iconSet: 'material-icons', // Quasar icon set
lang: 'en-us', // Quasar language pack
config: {},

...
//aqui agregamos los componentes, directivas y plugins a usar para
//que la app no consuma todos los componentes del fw y sea mas ligera
components: ['QBtn', 'QIcon'],
directives: ['Ripple', 'TouchPan', 'TouchSwipe'],
plugins: ['Notify', 'BottomSheet']
},
...
//agregamos lo siginete para indicar donde esta el ejecutable
//de android studio para poder compilar el APK
bin: {
linuxAndroidStudio: '/home/okadath/android-studio/bin/studio.sh'
},
```

podemos crear las paginas que querramos las cuales usaran un layaout, usando

```sh
yarn quasar new l <nombre_layout>
```

estas paginas pueden usar los componentes de quasar importandolos o nativamente los de Vue
esta es la pag default al crear el proyecto,estas son iguales que en Vue

Esta es la pagina por default de Index.vue, importa un componente llamado ExampleComponent:

```vue
<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models'
import ExampleComponent from 'components/CompositionComponent.vue'
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'PageIndex',
  components: { ExampleComponent },
  setup () {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ])
    const meta = ref<Meta>({
      totalCount: 1200
    })
    return { todos, meta }
  }
})
</script>
```

en el componente podemos agregar items y mas logica, como en componentes normales de Vue aunque tambien usando los de Quasar:

```vue
<template>
  <div>
    <p>{{ title }}</p>
    <ul>
      <li v-for="todo in todos" :key="todo.id" @click="increment">
        {{ todo.id }} - {{ todo.content }}
      </li>
    </ul>
    <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
    <p>Active: {{ active ? "yes" : "no" }}</p>
    <p>Clicks on todos: {{ clickCount }}</p>
    <q-btn
      @click="$q.notify('Mensaje de notificación')"
      color="primary"
      label="Mostra mensaje"
    />
    <q-icon name="alarm" />
    <q-btn
      @click="mostrarNotificacion"
      color="primary"
      label="Mostrar otra notificación"
    />
    <q-btn color="white" text-color="black" label="Esto es un botón" />
    <q-btn :color="miVariableColor" label="asd" />

    <div v-ripple>Click Me</div>
    <div v-touch-pan="handler">...</div>
    <div v-touch-swipe="handler">...</div>
    <div v-ripple>Click me. I got ripples.</div>

    <q-page class="flex flex-center">
      <q-input @input="hacerAlgo" label="Escribe algo" />
    </q-page>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  computed,
  ref,
  toRef,
  Ref
} from '@vue/composition-api'
import { Todo, Meta } from './models'

function useClickCount () {
  const clickCount = ref(0)
  function increment () {
    clickCount.value += 1
    return clickCount.value
  }

  return { clickCount, increment }
}

function useDisplayTodo (todos: Ref<Todo[]>) {
  const todoCount = computed(() => todos.value.length)
  return { todoCount }
}

export default defineComponent({
  name: 'CompositionComponent',
  data () {
    return {
      miVariableColor: 'red'
    }
  },

  methods: {
    mostrarNotificacion () {
      this.$q.notify('Otra notificacion')
    },
    hacerAlgo () {
      console.log('haciendo algo')
    }
  },

  props: {
    title: {
      type: String,
      required: true
    },
    todos: {
      type: (Array as unknown) as PropType<Todo[]>,
      default: () => []
    },
    meta: {
      type: (Object as unknown) as PropType<Meta>,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  setup (props) {
    return { ...useClickCount(), ...useDisplayTodo(toRef(props, 'todos')) }
  }
})
</script>

```

en una pagina podemos heredar muchos componentes al parecer y un layout usa una pagina, los layouts se
pueden crear en esta pagina https://quasar.dev/layout-builder y se importan en un nuevo layout creado con

```sh
yarn quasar new [l|layout] <nombre_layout>
```

ahi el codigo del layout generado le hacemos Copy-paste y ya trabaja:

```vue
<template>
  <q-layout view="hhh lpR fff">

    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="../assets/026-radio.svg">
          </q-avatar>
          Gestión de taréas
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <!-- drawer content -->
      <q-list padding class="rounded-borders">
        <q-item :to="{ name: 'index' }" clickable v-ripple>
          <q-item-section>
            Inicio
          </q-item-section>
        </q-item>

        <q-item :to="{ name:'usuarios' }" clickable v-ripple>
          <q-item-section >
            Usuarios
          </q-item-section>
        </q-item>

        <q-item :to="{ name: 'acerca' }" clickable v-ripple>
          <q-item-section>
            Acerca de
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      right: false
    }
  }
}
</script>

```

para que estos se apliquen debemos adjuntarlo a la ruta

en el componente Routes.js agregamos los links de las paginas y le indicamos que layout usar
(deben ir forzosamente con un componente o no se muestra)

```js
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
```


## run

ejecutar

```sh
yarn quasar dev
```

definir imagenes guardadas en assets:

```html
 <img src="../assets/026-radio.svg">
```

### build cn el ide

creo que hay que agregar esto para convertir un web en app

```sh
yarn quasar mode add capacitor
```

```sh
yarn  quasar build -m capacitor -T android --ide
```

fixear errores cn lint:

```sh
yarn run lint --fix
```

para desactivar eslint mientras trabajas buscar en el `quasar.conf.js` las siguientes lineas y comentarlas:

```js
 extendWebpack (cfg) {
        // lo de abajo esta comentado para desactivar eslint
        // cfg.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /node_modules/
        // })
      }
```
