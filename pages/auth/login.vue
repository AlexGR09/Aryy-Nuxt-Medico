<template>
<<<<<<< HEAD
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
=======
  <v-row class="fondo">
    <!-- división de la pantalla en video y componente de login | Genesis -->
    <v-col xs="12" sm="12" md="6" lg="7" mg="7" >
      <div class="d-flex flex-column justify-space-between align-end">
        <video
          id="video-player" playsinline loop autoplay
          :src="require('@/assets/videos/introprueba.mp4')"
          class="mb-n16"
        :aspect-ratio="16/9"
        width="1300px"
        height="1200px"
        ></video>
    </div>
    </v-col>
    <v-col class="fondo ml-n6" xs="12" sm="12" md="5" lg="5" mg="5">
      <form-login />
    </v-col>
  </v-row>
</template>
<script>
import formLogin from './formLogin.vue'
  export default {
    name: "LoginR",
    components: {
      formLogin,
    },
    layout: "auth",
    data: () => ({
      cld: null,
      width: 200,
      player: null,
    }), 
  }
>>>>>>> df91ce5af7de8e655030e8ededf4cac675d1f545
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');
/* estilos para cubrir completamente la pantalla del video | Genesis */
<<<<<<< HEAD
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
=======
@media screen and (max-width: 960px ) {
  #video-player{
    display: none;
  }
}
.fondo{
  height: 1210px;
  color: white;
  background: white;
>>>>>>> df91ce5af7de8e655030e8ededf4cac675d1f545
}
</style>