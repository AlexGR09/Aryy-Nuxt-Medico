<!-- Maquetación expediente clinico | Genesis & Responsivo | Luis Reyes -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
<!--         <v-toolbar flat color="transparent">
          <v-toolbar-title>Expediente Clínico</v-toolbar-title>
        </v-toolbar> -->
        <v-sheet
          class="rounded-xl"
          elevation="2"
        >
          <basic-info/>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import basicInfo from './cards/basic-info.vue'
export default {
  components: { basicInfo },
  data(){
    return{
    }
  },
}
</script>

    