<!-- seccion de medicamento anterior dentro de medical record | Genesis -->
<template>
    <v-card-text class="mt-n7">
      <p class="titulo">Medicamento anterior</p>
    
      <v-divider class="mt-n1"></v-divider>
      <p v-if="this.name===''">Sin datos registrssados</p>

      <v-list-item v-for="medication in medications" :key="medication"
      v-else
      style="font-family: Montserrat"
      class="ml-n7 mt-n5 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="mt-2">{{medication}} • 
        10mg • Tabletas
        </v-list-item-title>
        <v-list-item-subtitle>
          1 comprimido cada 24 horas • 17/NOV/22 a 31/DIC/22
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

      <p class="ml-3 d-flex justify-end">
        <img
          class="mr-3"
          width="20"
          :src="require('@/assets/icons/icon_timestamp.svg')"
        />Editado el 25 de diciembre de 2022
      </p>
    </v-card-text>
  </template>
  <script>
  export default {
    layout: 'medicalRecord',
    components: {},
    data() {
      return {
        dialog: false,
        alimentarias: '',
        farmacos: '',
        ambientales: '',
        idif: '',
        medications: '',
        name: '',
      }
    },

    mounted() {
    this.medicine()
  },
  methods: {
    medicine() {
      this.$axios
        .get(
          `api/v1/physician/medical-history/previous-medication/${this.$route.params.medicalRecord}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.idif = res.data.data.id
          this.medications = res.data.data.previous_medication
          this.name = res.data.data.previous_medication[0]
        })
    },
  }
  }
  </script>
  <style scoped>
  p.titulo {
    font-family: MontserratMedium;
    color: #7900ff;
    font-size: 130%;
  }
  p {
    font-family: MontserratMedium;
    color: #4f565f;
  }
  p.sub {
    font-family: MontserratMedium;
    color: #999999;
  }
  span {
    color: #4f565f;
    font-family: MontserratBold;
  }
  .save {
    font-family: Montserrat;
    text-transform: unset !important;
  }
  .restore {
    font-family: Montserrat;
    text-transform: unset !important;
  }
  .checkbox {
    font-family: Montserrat;
  }
  </style>