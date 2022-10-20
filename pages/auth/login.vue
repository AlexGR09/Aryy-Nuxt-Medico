<template>
    <v-row no-gutters>
      <v-col cols="12" sm="6" md="8">
          <video
        
            playsinline
            loop
            autoplay
            :src="require('@/assets/videos/introprueba.mp4')"
          ></video>
       
      </v-col>
      <v-col cols="6" md="4">
        <v-card class="pa-2" outlined tile> .col-6 .col-md-4 </v-card>
      </v-col>
    </v-row>

</template>
<script>
/* import formLogin from './formLogin.vue' */
export default {
  name: 'LoginR',
  components: {},
  layout: 'auth',
  data: () => ({
    cld: null,
    player: null,
  }),
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');
/* estilos para cubrir completamente la pantalla del video | Genesis */
/* .video{
  width: 95%;
  margin-bottom: -350px;
} */
/* .fondo{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;
} */




@media screen and (max-width: 1200px) {
  .video-login{
    display: none;
  }
}
</style>