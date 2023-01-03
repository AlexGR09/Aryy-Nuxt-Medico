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
              <h1>{{ cita }}</h1>
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
            <v-btn dark icon color="grey" @click="$router.push('/calendario/dayview')">
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
            large
            v-on:click="status"
            v-model="statuss"
            class="eventAction"
            outlined
            ><v-icon color="green">mdi-eye</v-icon>
            <l class="eventAction ml-3">ASISTIÓ</l>
          </v-btn>
          <v-btn
            v-on:click="status"
            v-model="statuss"
            class="eventAction"
            outlined
            large
          >
            <v-icon color="red">mdi-eye-off</v-icon>
            <l class="eventAction ml-3">NO ASISTIÓ</l>
          </v-btn>
          <p>{{status}}</p>
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
  name: "appointmentCard",
  data() {
    return {
      selectedOpen: true,
      id: '',
     evento: [],
     cita: '',
     name: '',
     statuss: '',
    }
  },
  mounted() {
   /*  this.citas()  */
    this.citaId()
  },
  methods: {
     /*  metodo para traer todas las citas registradas en el servidor | Genesis */
     /* citas() {
      this.$axios
        .get('api/v1/calendar/appointments', {
          params: {
            type: 'all',
          },
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          this.evento = res.data.data
          console.log(res)
        })
    }, */ 
     /*  metodo para traer citas por id registradas en el servidor | Genesis */
      citaId() {
      this.$axios
        .get(`api/v1/calendar/appointments/${this.$route.params.appointmentCard}`, {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          this.cita=res.data.data.patient.full_name
          this.evento = res.data.data
         /*  this.name=res.data.data[0].patient_full_name */
          this.id=res.data.data.id_appointment
          console.log("aaaaa")
        
        })
    }, 
    /*  cambiar status de la cita | Genesis */
    status() {
      this.$axios
        .put('api/v1/appointments/', {
          status: this.status,
        })
        .then((res) => {
           console.log(res) 
          localStorage.setItem('token', res.data.access_token)
          this.$router.push('/calendario/dayView')
        })
    },
  },
}
</script>