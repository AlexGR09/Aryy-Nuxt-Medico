<template>
<v-row>
    <v-col
        cols="12"
        md="4"
    >
        <dashboard-citas/>
    </v-col>
    <v-col
        cols="12"
        md="4"
    >
        <dashboard-marketing/>
    </v-col>
    <v-col
        cols="12"
        md="4"
    >
        <dashboard-assistant/>
    </v-col>
</v-row>
    
</template>

<script>
import DashboardAssistant from "~/components/dashboard/DashboardAssistant.vue"

export default
  components: { DashboardAssistant },{
    data(){
        return{

        }

    },

};


</script>

<style>

</style>