   <!-- card para mostrar datos de consultorio | Genesis -->
<template>
  <div>
    <span v-if="!consultorios[0]">Todavía no tienes consultorios registrados.</span>
    <v-sheet class="mb-5" v-for="(consultorio, i) in consultorios" :key="i" outlined color="grey" rounded >
    <v-card  outlined color="white">
      <v-row> 
        <v-col xs="1" sm="1" md="1" lg="1" xl="1"><v-img class="ml-5 mt-2" :src="require('@/assets/icons/icon_inicio.svg')" width="35px"></v-img></v-col>
        <v-col xs="11" sm="11" md="3" lg="3" xl="3"><p class="mt-4">{{consultorio.name}}</p></v-col>
        <v-col xs="12" sm="12" md="4" lg="4" xl="4"><p class="mt-4">{{consultorio.address}}</p></v-col>
        <v-col xs="1" sm="1" md="1" lg="1" xl="2"></v-col>
        <v-col>
          <v-btn-toggle borderless class="botones mt-1">
        <v-btn v-model="check" class="iconos " icon>
          <v-img :src="require('@/assets/icons/icon_editpaciente.svg')" max-width="25"></v-img>
        </v-btn>
        <v-btn class="iconos ml-n3"   @click="deleteItem(i)" icon >
            <v-img :src="require('@/assets/icons/icon_borrarpaciente.svg')" max-width="25"></v-img>
        </v-btn>
        <v-btn class="iconos ml-n3" icon >
            <v-img :src="require('@/assets/icons/icon_verpaciente.svg')" max-width="25"></v-img>
        </v-btn>
      </v-btn-toggle>    
        </v-col>
     </v-row>
    </v-card>
   
    </v-sheet>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectedItem: 1,
      consultorios: [
        {
          name: 'Consultorio principal',
          address: '2972 Westheimer RD. Santa Ana, Illinois 85486',
        },
        {
          name: 'Consultorio segundo',
          address: '192 Westheimer RD. Santa Ana, Illinois 85486',
        },
        {
          name: 'Consultorio tercero',
          address: '9856 Westheimer RD. Santa Ana, Illinois 85486',
        }
        
      ],
    }
  },
  methods: {
    deleteItem: function(i) {
  this.consultorios.splice(i, 1);
}
    }
}
</script>
<style scoped>
span{
  font-family: MontserratMedium;
  color: #999999;
}
</style>