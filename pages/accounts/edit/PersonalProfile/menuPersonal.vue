<template>
  <v-tabs
    class="list-item mt-8"
    active-class="bgactive"
    hide-slider
    color="#7900ff"
    height="130px"
    vertical
  >
    <v-tab class="proband"> PERFIL </v-tab>
    <v-tab class="proband"> DATOS FISCALES </v-tab>
    <v-tab class="proband"> SUSCRIPCIÓN </v-tab>
    <v-tab-item transition="fade-transition">
      <!--  <general-info class="mt-n8"/> -->
      <general-info />
    </v-tab-item>
    <v-tab-item transition="fade-transition">
      <tax-data class="mt-n8" />
    </v-tab-item>
    <v-tab-item transition="fade-transition">
      <SubscriptionForm />
      <services class="mt-n8" />
    </v-tab-item>
  </v-tabs>
</template>
  
  <script>
import GeneralInfo from '../general-info.vue'
import SubscriptionForm from './subscription-form.vue'
import TaxData from './tax-data.vue'

export default {
  data() {
    return {
      selectedItem: 1,
    }
  },
  components: { SubscriptionForm, TaxData, GeneralInfo },
}
</script>
  <style>
.titlee {
  font-family: MontserratMedium;
}
.proband {
  font-family: Montserrat;
  align-items: start;
  flex-direction: column;
}
</style>