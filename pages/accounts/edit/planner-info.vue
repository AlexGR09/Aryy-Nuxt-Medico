<template>
  <div><v-row>
          <v-card flat>
  <v-list dense class="list-item" active-class="bgactive">
      <v-list-item-group
        v-model="selectedItem"
        color="#7900ff"
      >
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
      <v-col md="10" lg="9" xl="10">
     
<v-card flat height="800px" class="pa-3 mt-2">
  
  <v-card-subtitle class="pa-3  mt-n2 mb-n10"><H1 class="mb-15">CONSULTORIOS</H1></v-card-subtitle>
  <v-card-text class="pa-3 ">
 <!--   <v-col md="6" cols="12">
    <br/>
  <p>Todavía no tienes consultorios registrados</p>
    </v-col>  -->
    <v-card outlined>
      <v-row>
        <v-col xl="1"><v-img class="ml-5 mt-2" :src="require('@/assets/icons/icon_inicio.svg')" width="35px"></v-img></v-col>
        <v-col xl="3"><p class="mt-4">Consultorio principal</p></v-col>
        <v-col xl="4"><p class="mt-4">2972 Westheimer RD. Santa Ana, Illinois 85486</p></v-col>
        <v-col xl="2"></v-col>
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
    <v-col md="6" cols="12"></v-col>
  
  <v-row>
      <v-col cols="auto">
        <v-dialog  fullscreen  overlay-color="white"
         transition="dialog-top-transition" v-model="dialog">
        <v-app-bar flat height="150px" color="white" dense fixed hide-on-scroll>
        <!--  <v-btn
            dark icon color="black"
            @click="dialog = false" 
          >
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
import NewFacility from './plannerComponents/newFacility.vue'
export default {
  components: {
    NewFacility
},
  data () {
    return {
      selectedItem: 1,
      dialog: false,
    }
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
  color: $grey;
  font-size: 1.5rem;
}
</style>