<template>
  <v-card-text class="mt-n7">
    <p class="titulo">Otros antecedentes</p>
    <v-divider class="mt-n2 mb-5"/>
    <v-row>
      <v-col xl="4">
     <psychiatric-history/>
      </v-col>
      <v-col xl="8"></v-col>
      
    </v-row>
  </v-card-text>
</template>
  <script>
import PsychiatricHistory from './others/psychiatric-history.vue'
export default {
  layout: 'medicalRecord',
  components: {PsychiatricHistory},
  data() {
    return {
     
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
.vradio{
  font-size: 5px;
}
</style>