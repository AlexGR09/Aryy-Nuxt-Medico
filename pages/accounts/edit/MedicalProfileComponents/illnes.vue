<template>
    <div><v-row>
      <v-card flat>
        <menu-med/>
      </v-card>
        <v-col md="10" lg="9" xl="10">
                
  <v-card flat height="800px" class="pa-3 mt-2">
    <v-card-subtitle class="pa-3  mt-n2 mb-n10"><H1 class="mb-5">ENFERMEDADES QUE TRATA</H1></v-card-subtitle>
    <v-card-text class="pa-3 ">
      <v-row>
        <v-col xl="6">
          <v-checkbox class="checkbox" color="#9966ff" hide-details label="Infecciones urinarias en adultos"></v-checkbox>
          <v-checkbox class="checkbox" color="#9966ff" hide-details label="Sindrome de vejiga dolorosa"></v-checkbox>
          <v-checkbox class="checkbox" color="#9966ff" hide-details label="Disfunción eréctil"></v-checkbox>
          <v-checkbox class="checkbox" color="#9966ff" hide-details label="Varicocele"></v-checkbox>
          <v-checkbox class="checkbox" color="#9966ff" hide-details label="Piedras en los riñones"></v-checkbox>
        </v-col>
        <v-col xl="6">
          <v-checkbox class="checkbox" color="#9966ff" hide-details label="Incontinencia urinaria de esfuerzos"></v-checkbox>
          <v-checkbox class="checkbox" color="#9966ff" hide-details label="Cáncer de testículos"></v-checkbox>
          <v-checkbox class="checkbox" color="#9966ff" hide-details label="Eyaculación precoz"></v-checkbox>
          <v-checkbox class="checkbox" color="#9966ff" hide-details label="Hiperplasia prostática"></v-checkbox>
          <v-checkbox class="checkbox" color="#9966ff" hide-details label="Enfermedades de Transmisión sexual (ETS)"></v-checkbox>
        </v-col>
</v-row>
<br/>
<v-btn  v-bind="attrs" v-on="on" class="btn ml-n5" color="#9966ff" text><v-icon class="icon">mdi-plus-circle</v-icon>Añadir otro</v-btn>
<div class="mt-5">
  <v-btn height="50px" class="white--text save" color="#7900ff" large>Guardar cambios</v-btn>
    <v-btn  height="50px" class="restore ml-3" color="#999999" outlined large>Restaurar todo</v-btn>
</div>
    </v-card-text>
   </v-card>
        </v-col>
    </v-row>
  
  </div>
  </template>
  <script>
  import MenuMed from './menuMed.vue'
  export default {
    components: {
    MenuMed
},
    data () {
      return {
        selectedItem: 1,
      }
    },
  }
  </script>
  
  <style>
  .checkbox{
    font-family: Montserrat;
  }
  .bgactive{
  background: #7900ff;
  color: white !important;
  fill: white !important;
  }
  .list-item {
  margin-top: 1em;
  }
  .titlee {
  font-family: 'Montserrat', sans-serif;
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
  </style>