<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >a
          <div v-if="$q.platform.is.desktop">
        I'm only rendered on desktop!
      </div>

      <div v-if="$q.platform.is.mobile">
        I'm only rendered on mobile!
      </div>
  </q-page>
</template>

<script>
// import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: 'PageIndex'
  // components: { EssentialLink }
}
</script>
