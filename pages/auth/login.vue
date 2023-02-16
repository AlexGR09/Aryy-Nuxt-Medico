<template>
  <v-app>
     <v-row justify="space-around" fluid>
        <v-col 
          cols="6"
          class="ocultar-col"
        >
        <v-responsive aspect-ratio="16/9">
          <video class="half-screen-video" playsinline loop autoplay>
            <source :src="require('@/assets/videos/introprueba.mp4')" type="video/mp4">
          </video>
        </v-responsive>
  <!--  <video
          id="video-player" playsinline loop autoplay
          :src="require('@/assets/videos/introprueba.mp4')"
        
          class="half-screen-image"
        ></video> -->
        </v-col>
        <!-- componente formulario login -->
        <v-col cols="6" md="4" sm="8">
          <v-container>
            <h2>Especialista, medicinas y análisis clínicos en un solo lugar</h2>
            <p>Haz una cita, cotiza tus medicamentos y análisis clínicos o lleva control de tu tratamiento con ayuda de aryy.</p>
            <v-toolbar flat>
              <template #extension>
                <v-tabs  v-model="tab" centered >
                  <v-tab v-for="(item, title) in items" :key="title" class="text-capitalize" >
                    {{item.title}}
                  </v-tab>
                </v-tabs>
              </template>
            </v-toolbar>
            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-card  flat>
                   <form-auth/>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card  flat>
                  <form-register/>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-container>
        </v-col>
      </v-row>
      </v-app>
  </template>
  
  <script>
import formAuth from '~/components/auth/form-auth.vue'
import FormRegister from '~/components/auth/form-register.vue'

  export default{
  components: { formAuth, FormRegister },

    layout: 'auth',
    data(){
      return{
        tab: null,
        items: [
          {
            title: 'Iniciar sesión'
          },
          {
            title: 'Registrarme'
          }
        ]
      }
    },
  }
  </script>
  
  <style>
  @media screen and (max-width: 1200px) {
    .ocultar-col{
      display: none;
    }
  }
  .half-screen-video {
  width: 5vw;
  height: 100vh;
}
  </style>