<!-- vista dinamica para traer los datos de la cita por ID | Genesis -->
<template>
  <div>
    <day-view />
    <v-dialog
      persistent
      max-width="650px"
      v-model="selectedOpen"
      offset-x
      :close-on-content-click="false"
    >
      <v-card color="white" flat>
        <div class="d-flex justify-end">
          <v-btn
            dark
            icon
            color="grey"
           @click="selectedOpen=false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>

        <v-card-text>
          <br />
          <v-row>
            <v-row class="ml-0">
              <v-col cols="12" xs="12" sm="8" xl="8">
                <h1>{{ cita }}</h1>
                <p class="eventPhone mt-3">EventNum</p>
                <p class="eventPhone mt-n3">EventPhone</p>
              </v-col>
              <v-col cols="11" xs="11" sm="4" xl="4"
                ><v-btn block large color="#999999" outlined>
                  <l class="titleAction">Reagendar cita</l>
                </v-btn>
                <v-btn large block class="mt-2 mb-3 boton" color="red" outlined>
                  <l class="titleAction2" color="red">cancelar cita</l>
                </v-btn>
              </v-col>
            </v-row>
          </v-row>
          <v-divider class="mt-3"></v-divider>
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
          <v-row class="mt-n4">
            <v-col cols="12" xs="12" sm="3" xl="3">
              <v-btn
                block
                large
                v-model="statuss"
                @click="statuss = 'attended'"
                v-on:click="status"
                class="succes"
                outlined
                ><v-icon color="green">mdi-eye</v-icon>
                <l class="eventAction ml-3">ASISTIÓ</l>
              </v-btn>
            </v-col>
            <v-col cols="12" xs="12" sm="3" xl="3">
              <v-btn
                block
                v-on:click="status"
                @click="statuss = 'no-attended'"
                v-model="statuss"
                class="eventAction"
                outlined
                large
              >
                <v-icon color="red">mdi-eye-off</v-icon>
                <l class="eventAction ml-3">NO ASISTIÓ</l>
              </v-btn>
            </v-col>
          </v-row>
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
  name: 'appointmentCard',
  data() {
    return {
      selectedOpen: true,
      id: '',
      evento: [],
      cita: '',
      name: '',
      statuss: 'scheduled',
    }
  },
  mounted() {
    this.citaId()
  },
  methods: {
    /*  metodo para traer citas por id registradas en el servidor | Genesis */
    citaId() {
      this.$axios
        .get(
          `api/v1/calendar/appointments/${this.$route.params.appointmentCard}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.cita = res.data.data.patient.full_name
          this.evento = res.data.data
          this.id = res.data.data.id_appointment
        })
    },
    /*  cambiar status de la cita | Genesis */
    status() {
      this.$axios
        .put('api/v1/appointments/', {
          status: this.statuss,
        })
        .then((res) => {
          localStorage.setItem('token', res.data.access_token)
          this.$router.push('/calendario/dayView')
        })
    },
  },
}
</script>
<style scoped>
h1{
  font-family: Montserrat;
  font-size: 180%;
}
.v-btn::before {
  background-color: grey;
  border-radius: inherit;
  bottom: 0;
  color: inherit;
  content: '';
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}
</style>