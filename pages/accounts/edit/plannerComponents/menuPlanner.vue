<template>
        <v-card left flat>
    <v-tabs class="list-item mt-8" active-class="bgactive" hide-slider  color="#7900ff" height="70px" vertical>
      <v-tab class="proband">
        CONSULTORIOS
      </v-tab>
      <v-tab class="proband">
        HORARIOS
      </v-tab>

      <v-tab-item transition="fade-transition">
        <planner-info class="mt-n8"/>
      </v-tab-item>
      <v-tab-item transition="fade-transition">
<schedule-info class="mt-n8"/>
      </v-tab-item>
    </v-tabs> 
  </v-card>
</template>

<script>
import plannerInfo from '../planner-info.vue'
import ScheduleInfo from './schedule-info.vue'

export default {
  components: { plannerInfo,ScheduleInfo },
  data () {
    return {
      selectedItem: 1,
    }
  },
}
</script>
<style>
.proband{
  align-items: start;
  flex-direction: column;
}
</style>

