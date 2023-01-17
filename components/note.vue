<!-- card para abrir en dialog en notas internas de expediente | Genesis -->
<template>
  <div>
    <v-card width="700">
      <v-card-title>
        {{ patient }}
        <v-chip
          small
          class="justify-center asistencia"
          color="#e9f7ee"
          text-color="#1baa55"
        >
          {{ status }}
        </v-chip>
      </v-card-title>
      <v-card-subtitle>
        {{ date }}
      </v-card-subtitle>
      <v-card-text>
        <p class="title">Síntomas</p>
        <p class="subtitle">Diarrea, Dolor abdominal, Vómitos</p>

        <p class="title">Diagnóstico</p>
        <p class="subtitle">Gastroenteritis y gastritis</p>

        <p class="title">Tratamiento</p>
        <p class="subtitle">Peptobismol</p>
        <p class="subtitle2">2 tabletas cada 4 horas</p>

        <p class="title">Notas internas</p>
        <p class="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper
          luctus luctus. Nam nec mi urna. Cras eget eros dapibus, tempus velit
          id, gravida enim. Fusce et felis et velit pharetra dapibus. Aenean
          efficitur nec ipsum vel porta. Nulla quis malesuada felis. Aliquam
          ligula metus, tempor quis sapien non, volutpat commodo velit.
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      patient: '',
      date: '',
      status: '',
    }
  },
  mounted() {
    this.cita()
  },
  methods: {
    cita() {
      console.log('creando petición GET')
      this.$axios
        .get(
          `api/v1/calendar/appointments/${this.$route.params.medicalRecord}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          console.log(res)
          this.patient = res.data.data.patient.full_name
          this.date = res.data.data.appointment_date
          this.status = res.data.data.status
          this.statusMethod()
        })
    },
    statusMethod() {
      if (this.status === 'scheduled') {
        this.status = 'Agendada'
      } else if (this.status === 'canceled') {
        this.status = 'Cancelada'
      }
    },
  },
}
</script>
<style>
.v-card__title {
  color: #9966ff;
  font-family: MontserratMedium;
  font-size: 3vh;
}
.v-card__subtitle {
  font-family: MontserratMedium;
  text-transform: uppercase;
  font-size: 1.8vh;
}
.v-application .title {
  color: #9966ff;
  font-size: 1.8vh !important;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em !important;
  font-family: Montserrat !important;
}
p.subtitle {
  font-family: MontserratMedium;
  margin-top: -25px;
  color: #999999;
}
p.subtitle2 {
  font-family: Montserrat;
  text-decoration: none;
  margin-top: -20px;
  color: #999999;
}
.asistencia {
  border: thin solid #1baa55 !important;
  margin-left: 15px;
}
</style>