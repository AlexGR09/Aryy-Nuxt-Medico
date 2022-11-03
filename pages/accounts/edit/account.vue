<template>
  <div>
    <v-card>
      <v-tabs v-model="tabs" class="tabs" color="#7900ff" grow>
        <v-tab class="tab">Perfil personal</v-tab>
        <v-tab class="tab">Perfil médico</v-tab>
        <v-tab class="tab">Agenda</v-tab>
      </v-tabs>
      <v-divider></v-divider>
      <v-tabs-items v-model="tabs">
        <v-tab-item><general-info/></v-tab-item>
      <v-tab-item><medical-profile-info/></v-tab-item>
      <v-tab-item><planner-info/></v-tab-item>
      </v-tabs-items>
     
    </v-card>   
  </div>
</template>

<script>
import medicalProfileInfo from './medicalProfile-info.vue'
import PlannerInfo from './planner-info.vue'
import generalInfo from './planner-info.vue'
export default {
  components: { medicalProfileInfo,  PlannerInfo, generalInfo},
  data: () => ({show1: false, tabs: 0,}),

}
</script>
<style>
.tab{
    font-family: Montserrat;
    font-size: 1rem;
    text-transform: capitalize;
}
.tabs{
    box-shadow: 1px 8px 5px 2px rgba(239,230,255,1);
-webkit-box-shadow: 1px 8px 5px 2px rgba(239,230,255,1);
-moz-box-shadow: 1px 8px 5px 2px rgba(239,230,255,1);
}
</style>