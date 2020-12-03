// import something here

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
// export default async (/* { app, router, Vue ... } */) => {
//   // something to do
// }

// import Vuelidate from 'vuelidate'

// export default ({ Vue }) => {
//   Vue.use(Vuelidate)
// }
import Vue from 'vue'
import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'
import 'src/boot/asd.scss'
import '@mdi/font/css/materialdesignicons.css'
// import '@fortawesome/fontawesome-free/css/all.css'
// import '@fortawesome/fontawesome-free/js/all.js'
// import 'font-awesome/css/font-awesome.min.css'
// Vue.component('vue-fontawesome', FontAwesomeIcon);
Vue.use(Buefy, {
  // defaultIconPack: 'fas',
})
