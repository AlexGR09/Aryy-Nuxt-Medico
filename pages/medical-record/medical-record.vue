<template>
  <div>
    <v-row>
      <!-- card info basica | Genesis -->
      <v-col xl="8">
        <H1 class="title mb-3">INFORMACIÓN BÁSICA</H1>
        <basic-info />
      </v-col>
      <v-col xl="4">
        <H1 class="title mt-3">NOTAS INTERNAS</H1>
            <v-textarea
            :style="image"
              outlined
              height="355px"
              no-resize
            ></v-textarea>
      </v-col>
      <v-col xl="8">
        <H1 class="title mb-3">EXPEDIENTE MÉDICO</H1>
        <medical-record />
      </v-col>
      <v-col xl="4">
        <H1 class="title mt-3">CITAS ANTERIORES</H1>
         <v-card><v-card-text></v-card-text></v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import basicInfo from './cards/basic-info.vue'
import medicalRecord from './cards/medical-record.vue'
export default {
  layout: 'medicalRecord',
  components: {
    basicInfo, medicalRecord
  },
  data(){
    return{
     /*  fondo efecto libreta para las notas | Genesis */
      image: {height:"355px", backgroundImage: "url(https://i.ibb.co/rvbqCck/b43a2bf5fbaa26f2e5ca26b9f96d5365.jpg)"  }
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
.fondo {
  color: red !important;
  background-color: red !important;
}
</style>