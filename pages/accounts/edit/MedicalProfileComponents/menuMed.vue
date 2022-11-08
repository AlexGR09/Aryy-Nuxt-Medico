<template>
       <!--  <v-list dense class="list-item" active-class="bgactive">
          <v-list-item-group
            v-model="selectedItem"
            color="#7900ff"
          >
            <v-list-item to="/accounts/edit/medicalProfile-info">
              <v-list-item-content active-class="bgactive">
                <v-list-item-title  class="titlee" >FORMACIÓN</v-list-item-title>
              </v-list-item-content >
            </v-list-item>
            <v-list-item to="/accounts/edit/MedicalProfileComponents/idMed">
              <v-list-item-content active-class="bgactive">
                <v-list-item-title  class="titlee">ID MÉD.</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/accounts/edit/MedicalProfileComponents/services">
              <v-list-item-content active-class="bgactive">
                <v-list-item-title  class="titlee">SERVICIOS</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/accounts/edit/MedicalProfileComponents/illnes">
              <v-list-item-content active-class="bgactive">
                <v-list-item-title  class="titlee">ENFERMEDADES</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list> -->
        <v-tabs class="list-item mt-8" active-class="bgactive" hide-slider  color="#7900ff" height="130px" vertical>
      <v-tab class="proband">
        FORMACIÓN
      </v-tab>
      <v-tab class="proband">
        ID MÉD.
      </v-tab>
      <v-tab class="proband">
        SERVICIOS      </v-tab>
      <v-tab class="proband">
        ENFERMEDADES
      </v-tab>
      <v-tab-item transition="fade-transition">
        <medical-profile-info class="mt-n8"/>
      </v-tab-item>
      <v-tab-item transition="fade-transition">
<id-med class="mt-n8"/>
      </v-tab-item>
      <v-tab-item transition="fade-transition">
<services class="mt-n8"/>
      </v-tab-item>
      <v-tab-item transition="fade-transition">
<illnes class="mt-n8"/>
      </v-tab-item>
    </v-tabs> 
</template>

<script>
import medicalProfileInfo from '../medicalProfile-info.vue'
import IdMed from './idMed.vue'
import Illnes from './illnes.vue'
import Services from './services.vue'
export default {
  components: { medicalProfileInfo, IdMed, Services, Illnes },

  data () {
    return {
      selectedItem: 1,
    }
  },
}
</script>
<style>
.titlee{
  font-family: MontserratMedium;
}
.proband{
  align-items: start;
  flex-direction: column;
}
</style>