   <!-- card para mostrar datos de consultorio | Genesis -->
<template>
    <v-sheet outlined color="grey" rounded >
    <v-card outlined color="white">
      <v-row>
        <v-col md="1" lg="1" xl="1"><v-img class="ml-5 mt-2" :src="require('@/assets/icons/icon_inicio.svg')" width="35px"></v-img></v-col>
        <v-col md="3" lg="3" xl="3"><p class="mt-4">Consultorio principal</p></v-col>
        <v-col md="4" lg="4" xl="4"><p class="mt-4">2972 Westheimer RD. Santa Ana, Illinois 85486</p></v-col>
        <v-col md="1" lg="1" xl="2"></v-col>
        <v-col>
          <v-btn-toggle borderless class="botones">
        <v-btn v-model="check" class="iconos " icon>
          <v-img :src="require('@/assets/icons/icon_editpaciente.svg')" max-width="25"></v-img>
        </v-btn>
        <v-btn class="iconos ml-n3"   @click="deleteItem(item)" icon >
            <v-img :src="require('@/assets/icons/icon_borrarpaciente.svg')" max-width="25"></v-img>
        </v-btn>
        <v-btn class="iconos ml-n3"   @click="deleteItem(item)" icon >
            <v-img :src="require('@/assets/icons/icon_verpaciente.svg')" max-width="25"></v-img>
        </v-btn>
      </v-btn-toggle>    
        </v-col>
      </v-row>
    </v-card>
    </v-sheet>
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