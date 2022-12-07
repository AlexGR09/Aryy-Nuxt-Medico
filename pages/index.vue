<template>
  <v-container>
    <v-text-field v-model="name"></v-text-field>
    <v-card-title></v-card-title>

   
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
          this.data = res.data.data.professional_name
          alert(res.data.data.professional_name)
        })
    },
  },

  mounted() {
    this.getName()
  },
}
</script>
