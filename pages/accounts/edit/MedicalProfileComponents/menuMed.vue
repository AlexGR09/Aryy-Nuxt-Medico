<template>
        <v-list class="list-item" active-class="bgactive">
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
                <v-list-item-title  class="titlee">ID MED.</v-list-item-title>
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
        </v-list>
</template>

<script>
export default {

  data () {
    return {
      selectedItem: 1,
    }
  },
}
</script>