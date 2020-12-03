
<template>
  <div class="about">
    <h1>This is an about page</h1>
 <div class="q-pa-md full-width row no-wrap justify-around items-center content-around">
      <q-card class="my-card">
    <vue-player content-style="height: 100px;" src="http://10.0.0.7:8000/" 
    poster="https://via.placeholder.com/150" 
    title="this is a title"
     v-model="playing"></vue-player>
      </q-card>
 </div>
  </div>
</template>
<script>
import vuePlayer  from  '@algoz098/vue-player'
	export  default {
		components: {
			vuePlayer
		}
	}
</script>
