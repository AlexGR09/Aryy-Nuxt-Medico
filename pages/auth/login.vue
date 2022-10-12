<template>
  <v-row class="fondo">
    <!-- división de la pantalla en video y componente de login | Genesis -->
    <v-col xs="7" sm="12" md="6" lg="7" mg="7" >
      <video
        id="video-player" playsinline loop autoplay
        :src="require('@/assets/videos/introprueba.mp4')"
        class="video"
      ></video>
    </v-col>
    <v-col xs="5" sm="12" md="5" lg="5" mg="5">
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
      player: null,
    }), 
  }
</script>
<style>
/* estilos para cubrir completamente la pantalla del video | Genesis */
.video{
  width: 100%;
  margin-left: -55px;
  margin-bottom: -50px;
}
</style>