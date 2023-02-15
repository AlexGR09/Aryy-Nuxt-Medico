<template>
  <v-app>
     <v-row justify="space-around">
       <!-- componente video -->
        <v-col class="ocultar-col" cols="12" md="8" sm="4">
          <video
          id="video-player" playsinline loop autoplay
          :src="require('@/assets/videos/introprueba.mp4')"
          width="1215px"
          height="1350px"
        ></video>
        </v-col>
        <!-- componente formulario login -->
        <v-col cols="12" md="4" sm="8">
          <v-container>
            <h2>Especialista, medicinas y análisis clínicos en un solo lugar</h2>
            <p>Haz una cita, cotiza tus medicamentos y análisis clínicos o lleva control de tu tratamiento con ayuda de aryy.</p>
            <v-toolbar flat>
              <template v-slot:extension>
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

  export default{
  components: { formAuth },

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
  </style>