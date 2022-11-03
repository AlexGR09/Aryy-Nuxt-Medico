<template>
    <div><v-row>
      <v-card flat>
        <menu-med/>
      </v-card>
        <v-col md="10" lg="9" xl="10">
                
  <v-card flat height="800px" class="pa-3 mt-2">
    <v-card-subtitle class="pa-3  mt-n2 mb-n10"><H1 class="mb-5">SERVICIOS</H1></v-card-subtitle>
    <v-card-text class="pa-3 ">
      <v-row>
       <v-col xl="6">
        <v-text-field  class="textfield mb-5" placeholder="Consulta de primera vez" outlined></v-text-field>
       </v-col> 
       <v-col xl="3">
        <v-text-field  class="textfield mb-5" placeholder="Consulta de seguimiento" outlined></v-text-field>
       </v-col> 
       <v-col xl="1"></v-col>
       <v-col xl="1">
        <v-btn-toggle borderless class="botones">
        <v-btn class="iconos " icon>
          <v-img :src="require('@/assets/icons/icon_editpaciente.svg')" max-width="23"></v-img>
        </v-btn>
        <v-btn class="iconos ml-n3"   @click="deleteItem(item)" icon >
            <v-img :src="require('@/assets/icons/icon_borrarpaciente.svg')" max-width="23"></v-img>
        </v-btn>
      </v-btn-toggle>    
       </v-col>
       <v-col xl="6">
        <v-text-field  class="textfield mb-5" placeholder="Consulta de primera vez" outlined></v-text-field>
       </v-col> 
       <v-col xl="3">
        <v-text-field  class="textfield mb-5" placeholder="Consulta de seguimiento" outlined></v-text-field>
       </v-col> 
       <v-col xl="1"></v-col>
       <v-col xl="1">
        <v-btn-toggle borderless class="botones">
        <v-btn class="iconos " icon>
          <v-img :src="require('@/assets/icons/icon_editpaciente.svg')" max-width="23"></v-img>
        </v-btn>
        <v-btn class="iconos ml-n3"   @click="deleteItem(item)" icon >
            <v-img :src="require('@/assets/icons/icon_borrarpaciente.svg')" max-width="23"></v-img>
        </v-btn>
      </v-btn-toggle>    
       </v-col>
       <v-col xl="6">
        <v-text-field  class="textfield mb-5" placeholder="Escribe un servicio médico" outlined></v-text-field>
       </v-col>
       <v-col xl="5">
        <v-text-field  class="textfield mb-5" placeholder="Agregar precio de servicio" outlined></v-text-field>
       </v-col>
      </v-row>
<!--       <v-row>
      <v-col xl="6">
     
      <v-text-field  class="textfield mb-5" placeholder="Consulta de seguimiento" outlined></v-text-field>

    </v-col>
    <v-row>
      <v-col xl="4">
   
    <v-text-field  class="textfield mb-5" placeholder="Consulta de seguimiento" outlined></v-text-field>
   </v-col> 
   <v-col xl="1">
    
      <v-btn-toggle borderless class="botones mt-6">
        <v-btn class="iconos " icon>
          <v-img :src="require('@/assets/icons/icon_editpaciente.svg')" max-width="23"></v-img>
        </v-btn>
        <v-btn class="iconos ml-n3"   @click="deleteItem(item)" icon >
            <v-img :src="require('@/assets/icons/icon_borrarpaciente.svg')" max-width="23"></v-img>
        </v-btn>
      </v-btn-toggle>   
  </v-col>
    </v-row>
  </v-row> 
  <v-btn  v-bind="attrs" v-on="on" class="btn ml-n5 mb-4" color="#9966ff" text><v-icon class="icon">mdi-plus-circle</v-icon>Añadir otro servicio</v-btn>
 -->
<v-row>
  <v-col xl="6">
    <span>Idiomas*</span>
    <v-text-field  class="textfield mb-5" placeholder="Español" outlined></v-text-field>
    <v-btn  v-bind="attrs" v-on="on" class="btn ml-n5" color="#9966ff" text><v-icon class="icon">mdi-plus-circle</v-icon>Añadir otro idioma</v-btn>
    </v-col>
</v-row>
<v-btn height="50px" class="white--text save mt-7" color="#7900ff" large>Guardar cambios</v-btn>
    <v-btn  height="50px" class="restore ml-3 mt-7" color="#999999" outlined large>Restaurar todo</v-btn>
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
    font-family: MontserratMedium;
    font-size: 120%;
    color: #4f565f;
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