<template>
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
        <form-Login :specialist="specialist" :number="number" :codigo="codigo"/>
    </v-col>
  </v-row>

</template>
<script>
import formLogin from '~/components/login/form-Login.vue'

export default{
  components: { formLogin },
    layout: "auth",
    data(){
        return{
            specialist: [
                {
                    name: 'v-text-field',
                    placeholder:'Correo electronico',
                    outlined:'false',
                    required: ' required',
                    type:'email',
                },
                {
                    etiqueta: 'v-text-field',
                    placeholder:'Establece tu contraseña',
                    outlined:'false',
                    required: ' required',
                    type:'password'
                },
                {
                    etiqueta: 'v-text-field',
                    placeholder:'Confirmar contraseña',
                    outlined:'false',
                    required: ' required',
                    type:'password'
                },
            ],
            number: [
                {
                    etiqueta: 'v-text-field',
                    placeholder:'codigo',
                    outlined:'false',
                    required: ' required',
                   
                },
            ],
            code: [
                {
                    etiqueta: 'v-text-field',
                    placeholder:'ceular',
                    outlined:'false',
                    required: ' required',
                   
                },
            ],
            
        }
    }
}
</script>