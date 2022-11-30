   <!-- card para mostrar datos de consultorio | Genesis -->
<template>
  <div>
    <span v-if="!consultorios[0]"
      >Todavía no tienes consultorios registrados.</span
    >
    <v-sheet
      class="mb-5"
      v-for="(consultorio, i) in consultorios"
      :key="i"
      outlined
      color="grey"
      rounded
    >
      <v-card outlined color="white">
        <v-row>
          <v-col xs="1" sm="1" md="1" lg="1" xl="1"
            ><v-img
              class="ml-5 mt-2"
              :src="require('@/assets/icons/icon_inicio.svg')"
              width="35px"
            ></v-img
          ></v-col>
          <v-col xs="11" sm="11" md="3" lg="3" xl="3"
            ><p id="facility_name" class="mt-4"><!-- {{ users.facility_name }} --></p></v-col
          >
          <v-col xs="12" sm="12" md="4" lg="4" xl="4"
            ><p id="address" class="mt-4"><!-- {{ users.address }} --></p></v-col
          >
          <v-col xs="1" sm="1" md="1" lg="1" xl="2"></v-col>
          <v-col>
            <v-btn-toggle borderless class="botones mt-1">
              <v-dialog  fullscreen  overlay-color="white"
                transition="dialog-top-transition" v-model="dialog">
                <v-app-bar flat height="150px" color="white" dense fixed hide-on-scroll>
                <!--  <v-btn dark icon color="black" @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn> --> 
                  <v-row>
                    <v-col md="5" lg="5" xl="5"></v-col>
                    <v-col md="4" lg="4" xl="4"> <v-img  :src="require('@/assets/logotipos/ISOLOGO_ARYY.svg')" max-width="150"></v-img><p class="mt-n7 prueba">Consultorios</p></v-col>
                    <v-col ms="3" lg="3" xl="3"></v-col>
                  </v-row>
                  </v-app-bar>
              <template  v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" v-model="check" class="iconos" icon>
                <v-img
                  :src="require('@/assets/icons/icon_editpaciente.svg')"
                  max-width="25"
                ></v-img>
              </v-btn>
            </template>
            <edit-facility class="mt-16 ml-13"/>
                </v-dialog>
              <v-btn class="iconos ml-n3" @click="deleteItem(i)" icon>
                <v-img
                  :src="require('@/assets/icons/icon_borrarpaciente.svg')"
                  max-width="25"
                ></v-img>
              </v-btn>
              <v-btn class="iconos ml-n3" icon>
                <v-img
                  :src="require('@/assets/icons/icon_verpaciente.svg')"
                  max-width="25"
                ></v-img>
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
      </v-card>
    </v-sheet>
  </div>
</template>
<script>
import editFacility from './editFacility.vue'
export default {
  components: {
    editFacility,
},
  data() {
    return {
      users: [],
      selectedItem: 1,
      consultorios: [
        
      ],
    }
  },
  mounted() {
    console.log('verificando')
    this.infoFacility()
  },
  methods: {
    deleteItem: function (i) {
      this.consultorios.splice(i, 1)
    },
  /*   metodo get para mostrar datos en card | Genesis */
    infoFacility() {
      console.log('creando petición GET')
      this.$axios
        .get('/api/v1/physician/facility', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          console.log(res)
          console.log('exito en GET')
          this.users = res.data.data.user
          this.facility_name = res.data.data.professional_name
          this.address = res.data.data.location[0].location_id
        })
        .catch(
          /* console.log(e); */
          console.log('error en GET')
        )
    },
    delete(){
      console.log('creando petición DELETE')
      this.$axios
      .delete('/api/v1/physician/facility', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          console.log("Datos eliminados")
        })
    },

  },
}
</script>
<style scoped>
span {
  font-family: MontserratMedium;
  color: #999999;
}
</style>