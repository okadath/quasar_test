<template>
  <q-page padding>
    <link href="https://vjs.zencdn.net/7.10.2/video-js.css" rel="stylesheet" />
      <div class="q-pa-md full-width row no-wrap justify-around items-center content-around">

    <!-- <q-card class="my-card">
       <img src="https://cdn.quasar.dev/img/mountains.jpg">
      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card> -->



      <q-card class="my-card">
          <q-media-player 
    :sources="sources"
    @playing="isPlaying = true"
    @paused="isPlaying = false" 
    content-style="height: 200px;"
    ref="qmp"
    type="video"
        mobile-mode
            hide-volume-slider
            dense
    
  >
    <!-- <template v-slot:controls>
      <div class="column text-white q-pa-md q-mt-xs">
        <div class="row">
          <q-btn size="xl" class="q-ml-sm" :icon="isPlaying ? 'stop': 'play_arrow'" @click="$refs.qmp.togglePlay()" outline></q-btn>
          <q-space></q-space>
          <q-btn @click="$refs.qmp.toggleFullscreen()" flat icon="fullscreen"></q-btn>
        </div>
      </div>
    </template> -->
  </q-media-player>
        <!-- <q-media-player
          type="video"
          background-color="black"
          :muted="muted"
          radius="1rem"
          :autoplay="true"
          :show-big-play-button="true"
          :sources="video.sources"
          :poster="video.poster"
          :tracks="video.tracks"
          track-language="English"
          disabled-seek
          @ended="onEnded"
        >
          <template v-if="overlay" v-slot:overlay>
            <div>
              <img
                src="quasar-logo.png"
                style="width: 30vw; max-width: 50px; opacity: 0.25;"
              >
            </div>
          </template>
        </q-media-player> -->

      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>



     <!-- <q-card class="my-card"> -->
         <!-- <video
    id="my-video"
    class="video-js"
    controls
    preload="auto"
    width="640"
    height="264"
    poster="MY_VIDEO_POSTER.jpg"
    data-setup="{}"
  >
    <source src="http://127.0.0.1:8000/static/chess.mp4" type="video/mp4" /> 
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank"
        >supports HTML5 video</a
      >
    </p>
  </video> -->
       <!-- <div class="container">
            <my-video :sources="video.sources" :options="video.options"></my-video>
        </div>
      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card> -->



     <!-- <q-card class="my-card">
        <img src="http://10.0.0.7:8000/static/j.jpeg"> -->
       <!-- <img src="http://127.0.0.1:8000/static/chess.mp4"> -->
      <!-- <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card> -->



      </div>
  </q-page>
      
</template>

<script>
import myVideo from 'vue-video'

// var player = videojs('#player-id');
// // can also be `tap` or `touchend` or some other event instead of `click`
// player.on('click', function() {
//   if (player.paused()) {
//     player.play();
//   } else {
//     player.pause();
//   }
// });

export default {
   name: 'Card',
    data () {
        return {
          isPlaying: false,
                lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d ',

            // video: {
                sources: [{
                    src: 'http://10.0.0.7:8000/v',
                    type: 'video/mp4'
                }],
                options: {
                    autoplay: true,
                    volume: 0.6,
                    poster: 'http://covteam.u.qiniudn.com/poster.png'
                }
            // }
        }
    },
    components: {
        myVideo
    }
}





// export default {
  
//   name: 'Card',
//   data () {
//     return {
//       lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

// eturn {
//             video: {
//                 sources: [{
//                     src: 'http://covteam.u.qiniudn.com/oceans.mp4',
//                     type: 'video/mp4'
//                 }],
//                 options: {
//                     autoplay: true,
//                     volume: 0.6,
//                     poster: 'http://covteam.u.qiniudn.com/poster.png'
//                 }
//             }
//         }
//     },
//     components: {
//         myVideo
//     }

      // video: {
      //   label: 'Tears of Steel',
      //   poster: 'media/TearsOfSteel/TearsOfSteel.jpeg',
      //   sources: [
      //     {
      //       src: 'http://10.0.0.7:8000/static/chess.mp4',
      //       // src: 'http://ftp.nluug.nl/pub/graphics/blender/demo/movies/ToS/tears_of_steel_720p.mov',
      //       type: 'video/mp4'
      //     }
      //   ]
      // }

//     }
//   }
// }
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 550px
</style>


