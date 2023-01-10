<template>
  <v-container>
    <v-card-text>
      <p class="text-h3 text_welcome" color="#4812d7">Bienvenido,</p>
      <p class="text-h4 text_welcome">Dr. {{ facilities }}</p>
      <div class="">
        Aún no ha terminado de configurar su perfil de,
        <nuxt-link to="/accounts/edit/account/">click aqui</nuxt-link>
      </div>
    </v-card-text>
    <v-card-subtitle class="pa-3 mt-n2 mb-n10">

      <H1 class="mb-5">CONSULTAS</H1></v-card-subtitle
    >
    <br />
    <v-row>
      <v-col cols="12" md="4" >
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
        <v-card max-height="700">
          <v-calendar></v-calendar>
        </v-card>
        
      </v-col>

    </v-row>
  </v-container>
</template>
<script>
import nextConsultation from '~/components/dashboard/next-consultation.vue'
export default {
  components: { nextConsultation },
  data() {
    return {
      name: [],
      facilities: null,
    }
  },

  methods: {
    getName() {
      this.$axios
        .get('/api/v1/physician/profile', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          console.log(res)
          this.facilities = res.data.data.professional_name
          alert(res.data.data.professional_name)
        })
    },
  },

  mounted() {
    this.getName()
  },
}
</script>


<style>
.text_welcome {
  color: blue;
  font-family: 'Montserrat', sans-serif;
}


</style>
