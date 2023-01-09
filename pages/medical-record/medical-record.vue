<!-- vista de expediente en consulta | Genesis -->
<template class="template">
  <div class="template">
    <v-row class="mb-n5">
      <!-- card info basica | Genesis -->
      <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
        <H1 class="title mb-3">INFORMACIÓN BÁSICA</H1>
        <basic-info />
      </v-col>
      <v-row>
        <v-col class="ml-3 mr-3" xs="11" sm="11" md="11" lg="8" xl="11">
        <H1 class="title mb-3 mt-3">NOTAS INTERNAS</H1>
        <v-text-area></v-text-area>
        <v-textarea
          class="note"
          color="#E0E0E0"
          background-color="white"
          outlined
          width="9vh"
          height="37vh"
          no-resize
        ></v-textarea> 
      </v-col> 
      </v-row>
   </v-row>
      
<v-row>
      <v-col xs="12" sm="12" md="8" lg="8" xl="8">
        <H1 class="title mb-3">EXPEDIENTE MÉDICO</H1>
        <medical-record />
      </v-col>
      <v-col xs="12" sm="12" md="4" lg="4" xl="4">
        <H1 class="title mb-3">CITAS ANTERIORES</H1>
      <appointments/>
      </v-col>
      <v-col xs="12" sm="12"
       md="8" lg="8" xl="8">
        <H1 class="title mb-3">CONSULTA MÉDICA</H1>
        <consultation />
      </v-col>
    </v-row>
  </div>
</template>
<script>

import basicInfo from './cards/basic-info.vue'
import Consultation from './cards/consultation.vue'
import medicalRecord from './cards/medical-record.vue'
import Appointments from '~/components/appointments.vue'
export default {
  layout: 'medicalRecord',
  components: {
    basicInfo,
    medicalRecord,
    Consultation,
    Appointments,
  },
  data() { return {
      /*  fondo efecto libreta para las notas | Genesis */
     /*  image: {
        height: '80%',
        backgroundImage: 'url(https://i.ibb.co/c2rkczy/Doc1-page-0001-6.jpg)',
      }, */
    }
  },
}
</script>
<style scoped>
.title {
  font-family: MontserratBold !important;
  color: #4f565f;
  font-size: 100% !important;
}
.theme--light.v-application {
  background: var(--v-background-base, white) !important;
}
.note {
  font-family: Montserrat;
}
.template {
  background-color: #f6f6f6;
  padding-left: 50px;
  padding-right: 50px;
  margin-left: -50px;
  margin-right: -50px;
}
</style>