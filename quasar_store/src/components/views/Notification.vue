<template>
  <div>
    <h1>Geolocation</h1>
    <p>Your location is:</p>
    <p>
      Latitude: <span v-if="loc">{{ loc.coords.latitude }}</span>
    </p>
    <p>
      Longitude: <span v-if="loc">{{ loc.coords.longitude }}</span>
    </p>
    <b-button block elevation="2" @click="getCurrentPosition">Get Current Location</b-button>
    <b-button block elevation="2" @click="scheduleNotification">Local Notifications</b-button>
  </div>
</template>

<script>
import Vue from "vue";
import { Plugins } from "@capacitor/core";
export default Vue.extend({
  name: "Home",
  data: function() {
    return { loc: null };
  },
  methods: {
    getCurrentPosition: function() {
  const { Geolocation } = Plugins;
  Geolocation.getCurrentPosition().then(
    loc => (this.loc = loc),
    e => console.log("there was an error", e)
  );
},
    scheduleNotification: async function() {
  const { LocalNotifications } = Plugins;
  const canSend = await LocalNotifications.requestPermission();
  if (canSend) {
    await LocalNotifications.schedule({
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
},

  }
});
</script>