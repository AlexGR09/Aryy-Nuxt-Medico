<!-- Maquetación => Template => Dashboard | Luis Reyes & Responsivo | Luis Reyes -->
<template>
  <v-container>
<!--     <v-card-text>
      <p class="text-h3 text_welcome" color="#4812d7">Bienvenido,</p>
      <p class="text-h4 text_welcome">Dr. {{ facilities }}</p>

    </v-card-text>
    <v-card-subtitle class="pa-3 mt-n2 mb-n10">
      <H1 class="mb-5">CONSULTAS</H1></v-card-subtitle
    >
    <br /> -->

        <v-toolbar flat color="transparent">
          <v-toolbar-title>Dr. {{ facilities }}</v-toolbar-title>
        </v-toolbar> 
        <div class="">
        Aún no ha terminado de configurar su perfil de,
        <nuxt-link to="/accounts/edit/account/">click aqui</nuxt-link>
      </div>
    <v-row>
      <v-col cols="12" md="4">
        <dashboard-citas />
      </v-col>
      <v-col cols="12" md="4">
        <dashboard-marketing />
      </v-col>
      <v-col cols="12" md="4">
        <dashboard-assistant />
      </v-col>
      <!-- Citas proximas | Luis Reyes -->
      <v-col cols="12" md="6">
        <next-consultation/>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="rounded-xl" color="white">
          <v-row justify="center">
            <v-date-picker  v-model="picker"  locale="mx-es" width="350" no-title prev-icon='$prev' class="justify-center calendar"></v-date-picker>
          </v-row>
        </v-card>
          
      </v-col>


    </v-row>
  </v-container>
</template>
<script>
import nextConsultation from '~/components/dashboard/next-consultation.vue'
export default {

  name: "Default",
  components: { nextConsultation },
  data() {
    return {
      name: [],
      facilities: null,
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    }
  },

  mounted() {
    this.getName()
  },

  methods: {
    getName() {
      this.$axios
        .get('/api/v1/physician/profile', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          this.facilities = res.data.data.professional_name
          alert(res.data.data.professional_name)
        })
    },
  },
}
</script>


<style>
.text_welcome {
  color: blue;
  font-family: 'Montserrat', sans-serif;
}
</style>