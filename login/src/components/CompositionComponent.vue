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
<!-- estos eran lo que me mandaba error -->
    <!-- <div v-touch-pan="handler">...</div>
    <div v-touch-swipe="handler">...</div> -->
    <div v-ripple>Click me. I got ripples.</div>

    <q-page class="flex flex-center">
      <q-input @input="hacerAlgo" v-model="mess" label="Escribe algo" />
       <!-- <q-input v-on:change="hacerAlgo" label="Escribe algo" /> -->

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
// import { log } from 'util'
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
      miVariableColor: 'red',
      mess: ''

    }
  },
  // data:{
  //  miVariableColor: '',
  //       mess:""
  // },
  // miVariableColor="red",

  methods: {
    mostrarNotificacion () {
      this.$q.notify('Otra notificacion')
    },
    hacerAlgo () {
      // console.log('haciendo algo')
      console.log(this.mess)
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
