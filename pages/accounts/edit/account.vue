<template>
  <div class="shad">
    <v-toolbar  flat   >
      <v-tabs class="toolb " v-model="tabs" color="#7900ff" grow>
        <v-tab class="tab">Perfil personal</v-tab>
        <v-tab class="tab">Perfil médico</v-tab>
        <v-tab class="tab">Agenda</v-tab>
      </v-tabs>
    </v-toolbar>
    <v-card class="mt-2" flat>
      <v-tabs-items v-model="tabs">
        <v-tab-item><menu-personal/></v-tab-item>
      <v-tab-item><menu-med/></v-tab-item>
      <v-tab-item><menu-planner/></v-tab-item>
      </v-tabs-items>
    </v-card>   
  </div>
</template>

<script>
import menuPlanner from './plannerComponents/menuPlanner.vue'

import MenuMed from './MedicalProfileComponents/menuMed.vue'
import MenuPersonal from './PersonalProfile/menuPersonal.vue'
export default {
  components: { menuPlanner,  MenuMed, MenuPersonal},
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
.toolb{
  box-shadow: 2px 6px 5px 0px rgb(153,102,255,0.3);
-webkit-box-shadow: 2px 6px 5px 0px rgb(153,102,255,0.3);
-moz-box-shadow: 2px 6px 5px 0px rgb(153,102,255,0.3);
}
</style>