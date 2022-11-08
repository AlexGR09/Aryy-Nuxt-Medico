<template>
  <div class="shad">
    <v-card flat>
      <v-tabs v-model="tabs" color="#7900ff" grow>
        <v-tab class="tab">Perfil personal</v-tab>
        <v-tab class="tab">Perfil médico</v-tab>
        <v-tab class="tab">Agenda</v-tab>
      </v-tabs>
     <v-divider></v-divider> 
      <v-tabs-items v-model="tabs">
        <v-tab-item><general-info/></v-tab-item>
      <v-tab-item><menu-med/></v-tab-item>
      <v-tab-item><menu-planner/></v-tab-item>
      </v-tabs-items>
     
    </v-card>   
  </div>
</template>

<script>
import menuPlanner from './plannerComponents/menuPlanner.vue'
import generalInfo from './general-info.vue'
import MenuMed from './MedicalProfileComponents/menuMed.vue'
export default {
  components: { menuPlanner, generalInfo, MenuMed},
  data: () => ({show1: false, tabs: 0,}),
  
}
</script>
<style>
.tab{
    font-family: Montserrat;
    font-size: 1rem;
    text-transform: capitalize;
}

.shad{
  box-shadow: 10px 10px 5px 0px rgba(153,102,255,0.18);
-webkit-box-shadow: 10px 10px 5px 0px rgba(153,102,255,0.18);
-moz-box-shadow: 10px 10px 5px 0px rgba(153,102,255,0.18);
}
</style>