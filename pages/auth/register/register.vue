<template>
    <v-row class="fondo">
      <!-- división de la pantalla en video y componente para el tab de registro | Genesis -->
      <v-col xs="12" sm="12" md="6" lg="7" mg="7" >
      <div class="d-flex flex-column justify-space-between align-end">
        <video
          id="video-player" playsinline loop autoplay
          :src="require('@/assets/videos/introprueba.mp4')"
          class="mb-n16"
        :aspect-ratio="16/9"
        width="1300px"
        height="1400px"
        ></video>
    <!--   <v-img
      class="mb-n16"
        :aspect-ratio="16/9"
        width="1600px"
        height="1200px"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      ></v-img> -->
    </div>
    </v-col>
    <v-col class="fondo ml-n16" xs="12" sm="12" md="5" lg="5" mg="5">
        <specialist-component />
      </v-col>
    </v-row>
  </template>
  <script>
  import specialistComponent from './registerComponents/specialistComponent.vue'
    export default {
      name: "LoginRA",
      components: {
        specialistComponent,
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
    margin-bottom: -50px;
    width: 110%;
    margin-left: -150px;
  }
  .fondo{
    height: 1410px;
    color: white;
    background: white;
  }
  </style>