<template>
        <v-card flat>
  <v-list dense class="list-item" active-class="bgactive">
      <v-list-item-group v-model="selectedItem" color="#7900ff">
        <v-list-item to="/accounts/edit/planner-info">
          <v-list-item-content active-class="bgactive">
            <v-list-item-title  class="titlee" >CONSULTORIOS</v-list-item-title>
          </v-list-item-content >
        </v-list-item>
        <v-list-item to="/accounts/edit/plannerComponents/schedule-info">
          <v-list-item-content active-class="bgactive">
            <v-list-item-title  class="titlee">HORARIOS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
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

