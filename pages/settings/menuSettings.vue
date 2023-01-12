<template>
    <v-tabs
      class="list-item mt-8"
      active-class="bgactive"
      hide-slider
      color="#7900ff"
      height="110px"
      vertical
    >
      <v-tab style="width: 145px" class="proband"> CUENTA </v-tab>
      <v-tab style="width: 145px" class="proband"> NOTIFICACIONES </v-tab>
      <v-tab style="width: 145px" class="proband"> ELIMINAR </v-tab>
      <v-tab-item transition="fade-transition">
        <account/>
      </v-tab-item>
      <v-tab-item transition="fade-transition">
        <notifications/>
       <!--  <notifications class="mt-n8" /> -->
      </v-tab-item>
      <v-tab-item transition="fade-transition">
        <delete-vue/>
       <!--  <delete class="mt-n8" /> -->
      </v-tab-item>
    </v-tabs>
  </template>
    
    <script>
import account from "./account.vue"
import Notifications from "./notifications.vue";
import deleteVue from "./delete.vue";

  export default 
  {
    components: { account, Notifications, deleteVue },
    data() {
      return {
        selectedItem: 1,
      }
    },
   /*  components: { SubscriptionForm, TaxData, GeneralInfo }, */
  }
  </script>
    <style>
  .titlee {
    font-family: MontserratMedium;
  }
  .proband {
    font-family: Montserrat;
    font-size: 12px;
    align-items: start;
    flex-direction: column;
  }
  </style>