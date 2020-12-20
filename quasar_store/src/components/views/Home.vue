<template>
  <div class="home">
    home asd
    <div v-if="$q.platform.is.desktop">
      I'm only rendered on desktop!
    </div>

    <div v-if="$q.platform.is.mobile">
      I'm only rendered on mobile!
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// export default {
//   name: 'home',
//   components: {
//     // HelloWorld
//   }
// }

console.log("aaa");

const { LocalNotifications } = Plugins;
const canSend = LocalNotifications.requestPermission();
if (canSend) {
  LocalNotifications.schedule({
    notifications: [
      {
        title: "On sale",
        body: "Widgets are 10% off. Act fast!",
        id: 1,
        schedule: { at: new Date(Date.now() + 1000 * 5) },
        actionTypeId: "",
        extra: null
      }
    ]
  });
}

import Vue from "vue";
import { Plugins } from "@capacitor/core";
export default Vue.extend({
  name: "Home",

  mounted() {
    console.log("asd");
  },
  data: function() {
    return { loc: null };
  }
});
// console.log('scheduled notifications', notifs);
</script>
