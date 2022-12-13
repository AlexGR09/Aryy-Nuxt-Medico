   <!-- card para mostrar datos de consultorio | Genesis -->
<template>
  <div>
     <span v-if="!facilities[0]"
      >Todavía no tienes consultorios registrados.</span
    > 
    <v-sheet
    v-for="facility in facilities" :key="facility" 
      class="mb-5"
      outlined
      color="grey"
      rounded
    >
      <v-card  outlined color="white">
        <v-row>
          <v-col xs="1" sm="1" md="1" lg="1" xl="1"
            ><v-img
              class="ml-5 mt-2"
              :src="require('@/assets/icons/icon_inicio.svg')"
              width="35px"
            ></v-img
          ></v-col>
          <v-col xs="11" sm="11" md="3" lg="3" xl="3"
            ><p id="facility_name" class="mt-4">{{facility.name}}</p></v-col
          >
          <v-col xs="12" sm="12" md="4" lg="4" xl="4"
            ><p id="address" class="mt-4"> {{address}}, {{number_ext}} {{number_int}}, {{state}}</p></v-col
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
              
              <v-btn :to="'/accounts/edit/plannerviews/'+facility.id"  v-bind="attrs" v-on="on" v-model="check" class="iconos" icon>
                <v-img
                  :src="require('@/assets/icons/icon_verpaciente.svg')"
                  max-width="25"
                ></v-img>
              </v-btn>
            </template>
            <!-- <watch-facility class="mt-16 ml-13"/> -->
                </v-dialog>

                <v-dialog
        v-model="dialog2"
        persistent
        max-width="550"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn   v-bind="attrs"  v-on="on" class="iconos ml-n3 mr-n3"   icon>
                <v-img
                  :src="require('@/assets/icons/icon_borrarpaciente.svg')"
                  max-width="25"
                ></v-img>
              </v-btn> 
        </template>
        <v-card >
          <v-card-title class="text-h5 justify-center">
            <p class="reset">¿Está seguro de eliminar el establecimiento?</p>
          </v-card-title>
          <v-card-actions>
            <v-btn
              color="#9966ff"
              text
              @click="dialog2 = false"
            >
              No
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              color="#9966ff"
              text 
              @click="deleteCard(facility.id)"
              v-on:click="dialog2 = false"
            >
              si
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

              <v-dialog  fullscreen  overlay-color="white"
                transition="dialog-top-transition" v-model="dialog">
                <v-app-bar flat height="150px" color="white" dense fixed hide-on-scroll>
                  <v-row>
                    <v-col md="5" lg="5" xl="5"></v-col>
                    <v-col md="4" lg="4" xl="4"> <v-img  :src="require('@/assets/logotipos/ISOLOGO_ARYY.svg')" max-width="150"></v-img><p class="mt-n7 prueba">Consultorios</p></v-col>
                    <v-col ms="3" lg="3" xl="3"></v-col>
                  </v-row>
                  </v-app-bar>
              <template  v-slot:activator="{ on, attrs }">
              
              <v-btn :to="'/accounts/edit/plannerviews/edit/'+facility.id"  v-bind="attrs" v-on="on" v-model="check" class="iconos" icon>
                <v-img
                  :src="require('@/assets/icons/icon_editpaciente.svg')"
                  max-width="25"
                ></v-img>
              </v-btn>
            </template>
            <!-- <watch-facility class="mt-16 ml-13"/> -->
                </v-dialog>
          
            </v-btn-toggle>
          </v-col>
        </v-row>
      </v-card>
    </v-sheet>
  </div>
</template>
<script>
export default {
  components: {
},
  data() {
    return {
      dialog: false,
      horas: [],
      facilities: [],
      props:{
        facilities: Object
      },
      check: '',
      dialog2: '',
      name: '',
      address: '',
      number_ext: '',
      number_int: '',
      state: '',
      selectedItem: 1,
      consultorios: [
        
      ],
    }
  },
  mounted() {
    console.log('verificando')
    this.infoFacility()
    const facilityId = this.$route.params.id;
    console.log(facilityId)
  },
  methods: {

  /*   metodo get para mostrar datos en card | Genesis */
    infoFacility() {
      console.log('creando petición GET')
      this.$axios
        .get('api/v1/facilities', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          console.log(res)
          console.log('exito en GET')
          this.facilities = res.data.data
          this.consultorios= res.data.data.length
          this.name = res.data.data[0].name
          this.address = res.data.data[0].location.address
          this.number_ext = res.data.data[0].location.number_ext
          this.number_int = res.data.data[0].location.number_int
          this.state = res.data.data[0].location.state
        })
        .catch(
          /* console.log(e); */
          console.log('error en GET')
        )
    },
    deleteCard(id){
      console.log('creando petición DELETE')
      this.$axios
      .delete("api/v1/facilities/"+id, {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          console.log("Datos eliminados")
          console.log(res)
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