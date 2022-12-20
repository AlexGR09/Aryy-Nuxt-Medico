<template>
  <v-card>
    <!-- sección de alergias | Genesis -->
   <allergies/>
<!--    seccion antecedentes patológicos | Genesis -->
<pathologic-antecedents/>
<!--    seccion antecedentes no patológicos | Genesis -->
<non-pathologic-antecedents/>
<!--    seccion antecedentes heredofamiliares | Genesis -->
<family-history/>
  </v-card>
</template>
<script>
import Allergies from './medical-records/allergies.vue'
import PathologicAntecedents from './medical-records/pathologic-antecedents.vue'
import NonPathologicAntecedents from './medical-records/non-pathologic-antecedents.vue'
import FamilyHistory from './medical-records/family-history.vue'
export default {
  layout: 'medicalRecord',
  components: {Allergies, PathologicAntecedents,NonPathologicAntecedents, FamilyHistory},
  data() {
    return {
      dialog: false,
      alimentarias: 'alimNo',
      farmacos: 'farmNo',
      ambientales: 'ambNo',
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
  color: #999999;
}
span {
  color: #4f565f;
  font-family: MontserratBold;
}
.save{
  font-family: Montserrat;
  text-transform: unset !important;
}
.restore{
  font-family: Montserrat;
  text-transform: unset !important;
}
</style>