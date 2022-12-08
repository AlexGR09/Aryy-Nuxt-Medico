<template>
  <v-container>
    <v-card-text>
      <p class="text-h4 text--primary">
        Bienvenido,
      </p>
      <p  class="text-h4 text--primary">Dr(a). {{facilities}}</p>
      <div class="text--primary">
        Aún no ha terminado de configurar su perfil de, <nuxt-link to="/accounts/edit/account/">click aqui</nuxt-link>
      </div>
    </v-card-text>
    <v-card-subtitle class="text-h5 text--primary">CITAS</v-card-subtitle>
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
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      name: [],
      facilities: null,
    }
  },

  methods: {
    getName () {
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

</style>