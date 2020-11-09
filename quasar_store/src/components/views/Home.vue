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
export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>
