<template>
  <v-container>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5"> Bienvenido, </v-list-item-title>
        <v-card-title v-model="name"></v-card-title>
        <v-list-item-text
          >Tienes <span>4</span>citas el día hoy.</v-list-item-text
        >
      </v-list-item-content>
    </v-list-item>
    <v-card-text v-model="nameMedical"></v-card-text>
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
      name: ''
    }
  },

  methods: {
    getName () {
      this.$axios
        .get('/api/v1/physician', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          console.log(res)
          this.name = res.data.data.professional_name
        })
    },
  },

  mounted() {
    this.getName()
  },
}
</script>
