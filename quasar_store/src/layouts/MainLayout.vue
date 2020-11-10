<template>
  <q-layout view="hhh lpR fff">

    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
<!--
        <q-toolbar-title>
          <q-avatar>
            <img src="../assets/026-radio.svg">
          </q-avatar>
          Gestión de taréas
        </q-toolbar-title> -->

      </q-toolbar>

      <!-- <q-tabs align="left">
        <q-route-tab :to="{ name: 'index' }" label="Page One" />
        <q-route-tab to="/home" label="Page Two" />
        <q-route-tab to="/resources" label="Page Three" />
      </q-tabs> -->
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <!-- drawer content -->
      <q-list padding class="rounded-borders">
        <q-item :to="{ name: 'index' }" clickable v-ripple>
          <q-item-section>
            Inicio
          </q-item-section>
        </q-item>

        <q-item :to="{ name:'home' }" clickable v-ripple>
          <q-item-section >
            Usuarios
          </q-item-section>
        </q-item>

        <q-item :to="{ name: 'resources' }" clickable v-ripple>
          <q-item-section>
            Acerca de
          </q-item-section>
        </q-item>

        <q-item :to="{ name: 'card' }" clickable v-ripple>
          <q-item-section>
            test_card
          </q-item-section>
        </q-item>
      </q-list>
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
