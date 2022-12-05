<template>
  <div>
    <v-row> 
      <v-col md="12" lg="11" xl="10">
        <v-card flat height="800px" class="pa-3 mt-2">
          <v-card-subtitle class="pa-3  mt-n2 mb-n16"><H1 class="mb-15">CONSULTORIOS</H1></v-card-subtitle>
          <v-card-text class="pa-3 ">
            <!-- card para mostrar datos de consultorio | Genesis -->
            <facility-card/>
            <v-col md="6" cols="12"></v-col>
          
          <v-row>
              <v-col cols="auto">
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
                    <v-btn  v-bind="attrs" v-on="on" class="btn ml-n5 mt-n3" color="#9966ff" text><v-icon class="icon">mdi-plus-circle</v-icon>Agrega un consultorio</v-btn>
                  </template>
                  <new-facility class="mt-16"/>
                </v-dialog>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
  </v-row>
</div>
</template>
<script>

import FacilityCard from './plannerViews/facilityCard.vue'
import NewFacility from './plannerViews/newFacility.vue'
export default {
  components: {
    NewFacility, FacilityCard,
},
  data () {
    return {
      facility: [],
      selectedItem: 1,
      dialog: false,
    }
  },
  
  methods: {
    infoFacility() {
      console.log('creando petición GET')
      this.$axios
        .get('/facilities', {
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
        
      },
}
</script>

<style lang="scss">

.bgactive{
background: #7900ff;
color: white !important;
fill: white !important;
}
.list-item {
margin-top: 1em;
}

.titlee {
font-family: 'MontserratMedium', sans-serif;
font-size: 13px;
text-transform: unset !important;
color: black;
}
.titlee:hover {

color: #ffffff;
}
.v-list-item:hover {
background: #7900ff;
}

.item-active {
background-color: #7900ff;
color: white !important;
}
a{
    text-decoration: none !important;
  }
.save{
  font-family: Montserrat;
  text-transform: unset !important;
}
.restore{
  font-family: Montserrat;
  text-transform: unset !important;
}
.btn{
  font-family: Montserrat;
  text-transform: unset !important;
  color: #9966ff;
}
.textfield{
    height: 50px;
    width: 100%;
    font-size: .9rem;
    font-family: Montserrat;
  }
H1{
  font-family: MontserratBold;
  font-size: 120%;
}  
span{
  font-family: Montserrat;
  font-size: 120%;
}
p{
  font-family: MontserratMedium;
  color: gray;
  font-size: 110%;
}
p.prueba{
  font-family: MontserratSemiBold;

  font-size: 1.5rem;
}
</style>