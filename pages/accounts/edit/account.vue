<template>
  <div>
    <v-container>
      <v-toolbar>
        <template>
          <v-tabs v-model="tabs" grow show-arrows>
            <v-tab class="text-capitalize">perfil personal</v-tab>
            <v-tab class="text-capitalize">perfil médico</v-tab>
            <v-tab class="text-capitalize">agenda</v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
      <v-card class="mt-2" flat>
        <v-tabs-items v-model="tabs">
          <v-tab-item><menu-personal /></v-tab-item>
          <v-tab-item><menu-med /></v-tab-item>
          <v-tab-item><menu-planner /></v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import menuPlanner from './plannerComponents/menuPlanner.vue'
import MenuMed from './MedicalProfileComponents/menuMed.vue'
import MenuPersonal from './PersonalProfile/menuPersonal.vue'

export default {
  components: { menuPlanner, MenuMed, MenuPersonal },

  data() {
    return {
      show1: false,
      tabs: 0,

    }
  },




}
</script>

