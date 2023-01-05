<template>
  <div class="mt-5">
    <p class="montserratMedium" style="font-size: 120%">Visitas de hoy</p>
    <v-list-item class="lista ml-n2">
      <v-list-item-content>
        <a style="color:#4f565f" class="montserratMedium">Enviar recordatorio <br />a todos hoy</a>
      </v-list-item-content>
      <v-list-item-avatar tile size="40">
        <v-btn icon>
            <v-img
          :src="require('@/assets/icons/icon_notification.svg')"
          max-width="23"
        ></v-img></v-btn
        ></v-list-item-avatar>
    </v-list-item>

    <v-card
      v-for="evento in eventos"
      :key="evento"
      class="mx-auto mb-2"
      max-width="270"
      outlined
    >
      <!-- color="#1abc9c" -->
      <v-list-item class="lista" three-line>
        <v-sheet
          class="mr-5 ml-n4"
          color="#1abc9c"
          height="90"
          width="3"
        ></v-sheet>
        <v-list-item-content>
          <p class="montserratMedium">
            {{ evento.patient_full_name }}
          </p>
          <v-list-item-title class="montserratMedium">
            <l>{{ evento.appointment_type }}</l>
          </v-list-item-title>
          <v-list-item-subtitle class="montserratMedium">{{
            evento.appointment_time
          }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="40">
          <v-btn icon>
            <v-img
          :src="require('@/assets/icons/icon_notification.svg')"
          max-width="23"
        ></v-img></v-btn
          ></v-list-item-avatar
        >
      </v-list-item>
    </v-card>

    <p class="montserratMedium mt-6">Filtros</p>
    <v-checkbox
      v-model="consecuente"
      color="#9966ff"
      class="montserratMedium"
      hide-details
      label="Primera consulta"
    ></v-checkbox>
    <v-checkbox
      v-model="primera"
      color="#9966ff"
      class="montserratMedium"
      hide-details
      label="Subsecuente"
    ></v-checkbox>
  </div>
</template>
<script>
export default {
  data() {
    return {
      eventos: [],
      name: '',
      type: '',
      hour: '',
      color: '',
      hora: '',
    }
  },
  mounted() {
    this.today()
  },
  methods: {
    today() {
      this.$axios
        .get('api/v1/calendar/appointments', {
          params: {
            type: 'today',
          },
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          this.eventos = res.data.data
          this.tipo = res.data.data[0].appointment_type
          console.log(res)
        })
    },
  },
}
</script>

<style scoped>
.montserratMedium {
  font-family: MontserratMedium;
}
l {
  color: #1abc9c;
}
p{
    color: #4f565f;
}
</style>