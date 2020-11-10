<template>
  <q-page padding>
      <div class="q-pa-md full-width row no-wrap justify-around items-center content-around">
    <q-card class="my-card">
      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
            lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 550px
</style>

