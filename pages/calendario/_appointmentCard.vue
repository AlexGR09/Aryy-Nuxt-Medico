<!-- vista dinamica para traer los datos de la cita por ID | Genesis -->
<template>
  <div>
    <day-view />
    <v-dialog
      persistent
      width="40%"
      v-model="selectedOpen"
      offset-x
      :close-on-content-click="false"
    >
      <v-card color="white" min-width="350px" flat>
        <v-card-text>
          <br />
          <v-row>
            <v-col>
              <h1> {{ this.$route.params.appointmentCard }}</h1>
              <p class="eventPhone mt-5">EventNum</p>
              <p class="eventPhone mt-n3">EventPhone</p>
            </v-col>
            <v-col xl="4"
              ><v-btn block large color="#999999" outlined>
                <l class="titleAction">Reagendar cita</l>
              </v-btn>
              <v-btn large block class="mt-2 mb-3" color="red" outlined>
                <l class="titleAction2" color="red">cancelar cita</l>
              </v-btn>
            </v-col>
            <v-btn dark icon color="grey" @click="$router.back()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-row>
          <v-divider></v-divider>
          <div class="mt-5">
            <p class="infor">
              <v-icon color="#9966ff">mdi-calendar</v-icon>sfsfs
            </p>
            <p class="infor">
              <v-icon color="#9966ff">mdi-account</v-icon>Paciente nuevo
            </p>
            <p class="infor">
              <v-icon color="#9966ff">mdi-map-marker-circle</v-icon>Consultorio
              Principal
            </p>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            v-on:click="status"
            v-model="status"
            class="eventAction"
            outlined
            color="green"
            ><v-icon color="green">mdi-eye</v-icon>
            <l class="eventAction ml-3">ASISTIÓ</l>
          </v-btn>
          <v-btn
            v-on:click="status"
            v-model="status"
            class="eventAction"
            outlined
            color="red"
          >
            <v-icon color="red">mdi-eye-off</v-icon>
            <l class="eventAction ml-3">NO ASISTIÓ</l>
          </v-btn>
        </v-card-actions>
        <br />
      </v-card>
    </v-dialog>
  </div>
</template>
  <script>
import dayView from './dayView.vue'
export default {
  components: { dayView },
  data() {
    return {
      selectedOpen: true,
      id: this.$route.params.appointmentCard,
    }
  },
  mounted() {
    this.showId()
  },
  methods: {
    showId() {
      const id = this.$route.params.appointmentCard
      console.log(id)
    },
    /*  cambiar status de la cita | Genesis */
    status() {
      this.$axios
        .put('api/v1/appointments/', {
          status: this.status,
        })
        .then((response) => {
          console.log(response.data.data)
          localStorage.setItem('token', response.data.access_token)
          this.$router.push('/calendario/dayView')
        })
    },
  },
}
</script>