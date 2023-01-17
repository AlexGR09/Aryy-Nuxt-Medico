<!-- seccion de medicamento anterior dentro de medical record | Genesis -->
<template>
    <v-card-text class="mt-n7">
      <p class="titulo">Medicamento anterior</p>
    
      <v-divider class="mt-n1"></v-divider>
      <p>Sin datos registrados</p>
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
          medicamentos: [
                  {
                      name: 'Enalapril',
                      mg: "10 mg",
                      presentation: 'Tabletas',
                      indication: "1 tableta cada 24 horas",
                      date:'25/DIC/22 a 25/ENE/2023',
                  },
                  {
                      name: 'Losartán',
                      mg: "50 mg",
                      presentation: 'Comprimido',
                      indication: "1 comprimido cada 24 horas",
                      date:'25/DIC/22 a 25/ENE/2023',
                  },
                 
              ],
        dialog: false,
        alimentarias: '',
        farmacos: '',
        ambientales: '',
      }
    },
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