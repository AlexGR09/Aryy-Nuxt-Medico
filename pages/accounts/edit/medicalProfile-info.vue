<template>
  <div>
    <v-row>
      <v-card flat>
        <menu-med/>
      </v-card>
      <v-col md="10" lg="9" xl="10">          
        <v-card  class="pa-3 mt-2">
          <v-card-subtitle class="pa-3  mt-n2 mb-n10"><H1 class="mb-5">FORMACIÓN ACADÉMICA</H1></v-card-subtitle>
            <v-card-text class="pa-3 mt-5 ">
              <v-row>
                <v-col md="6" cols="12">
                  <span>Especialidad*</span>
                  <v-autocomplete color="#9966ff" class="textfield " placeholder="Selecciona una especialidad" outlined></v-autocomplete>
                 
                
                </v-col> 
                <v-col md="6" cols="12"></v-col>
                <v-col md="6" cols="12">
                  <span >Subespecialidad (opcional)</span>
                  <v-autocomplete color="#9966ff" class="textfield" placeholder="Añadir" outlined></v-autocomplete>
                  <v-btn class="btn ml-n5 mt-3" color="#9966ff" text><v-icon class="icon">mdi-plus-circle</v-icon>Añadir otra</v-btn>
                </v-col>
                <v-col md="6" cols="12">
                  <span >Subespecialidad (opcional)</span>
                  <v-autocomplete color="#9966ff" class="textfield" placeholder="Añadir" outlined></v-autocomplete>
                  <v-btn class="btn ml-n5 mt-3" color="#9966ff" text><v-icon class="icon">mdi-plus-circle</v-icon>Añadir otra</v-btn>
                </v-col>
                <v-col md="6" cols="12">
                    <span >No. de cedula*</span>
                  <v-text-field  color="#9966ff" class="textfield" placeholder="00000000" outlined></v-text-field> </v-col>
                  <v-col xl="6">
                    <span >Institución que otorgó la cédula*</span>
                  <v-text-field color="#9966ff"  class="textfield" placeholder="Escribe el nombre de la institución" outlined></v-text-field>
                  </v-col>
                  <v-col xl="6">
                    <span >Foto de cedula*</span>
                  <v-file-input chips color="#9966ff" class="textfield" placeholder="Añadir archivo" outlined></v-file-input >
                    <v-input class="input mb-n4">Formatos pemitidos: JPG o PNG. Tamaño máximo de archivo 2 MB</v-input>
                    <v-btn class="btn ml-n5 mb-n4" color="#9966ff" text><v-icon class="icon">mdi-plus-circle</v-icon>Añadir otra cédula</v-btn>
                  </v-col>
                <!-- 
                 
                </v-col> -->
                <v-col xl="12">
                    <span >Sobre mi(opcional)</span>
                    <v-textarea maxlength="400" counter="400" auto-grow placeholder="Escribe una biografía breve sobre ti" outlined class="textfield mb-16"></v-textarea> 
                </v-col>
             
                </v-row>
                <v-btn height="50px" class="white--text save mt-16" color="#7900ff" large>Guardar cambios</v-btn>
    <v-btn  height="50px" class="restore ml-3 mt-16" color="#999999" outlined large>Restaurar todo</v-btn>
    <H1 class="mb-5 mt-8">CERTIFICADOS</H1>
    <VueFileAgent :multiple="true" :deletable="true" :helpText="'Selecciona o arrastra tus archivos aquí'" :uploadUrl="uploadUrl" v-model="fileRecords"></VueFileAgent>
<!--     <H1 class="mb-5 mt-8">RECETA MÉDICA*</H1>
    <v-row>
      <v-col xl="6"> <span>Logotipo propio</span> <v-file-input class="textfield" placeholder="Añadir archivo" outlined></v-file-input >   <v-input class="input">Formatos permitidos: PDF, JPG O PNG. Tamaño máximo de archivo 5 MB.</v-input></v-col>    
      <v-col xl="6">  <span>Grupo médico (opcional)</span><v-file-input class="textfield" placeholder="Añadir archivo" outlined></v-file-input >   <v-input class="input">Formatos permitidos: PDF, JPG O PNG. Tamaño máximo de archivo 5 MB.</v-input></v-col>
    </v-row> -->
    <H1 class="mb-5 mt-8">REDES SOCIALES</H1>
    <v-row>
        <v-col xl="4">
          <span >Facebook</span>
            <v-btn outlined class="btn" block color="#999999" height="50"><v-img class=" mr-3" :src="require('@/assets/icons/icon_facebook.svg')" max-width="35"></v-img>
              Vincula tu cuenta de Facebook
            </v-btn>
          </v-col>
            
        
        <v-col xl="4">
          <span >Instagram</span>
            <v-btn outlined class="btn" block color="#999999" height="50"><v-img class=" mr-3" :src="require('@/assets/icons/icon_insta.svg')" max-width="28"></v-img>
              Vincula tu cuenta de Instagram
            </v-btn>
        </v-col>
        <v-col xl="4">
          <span >TikTok</span>
            <v-btn outlined class="btn" block color="#999999" height="50"><v-img class=" mr-3" :src="require('@/assets/icons/icon_tiktok.svg')" max-width="28"></v-img>
                Vincula tu cuenta de TikTok
            </v-btn>
        </v-col>
        <v-col xl="4">
            <span>Sitio Web</span>
            <v-btn outlined class="btn" block color="#999999" height="50"><v-img class=" mr-3" :src="require('@/assets/icons/icon_internet.svg')"  max-width="28"></v-img>
              Ingresa tu sitio web
            </v-btn>
          </v-col>
    </v-row>
    <BR/><BR/>
    <v-btn height="50px" class="white--text save" color="#7900ff" large>Guardar cambios</v-btn>
    <v-btn  height="50px" class="restore ml-3" color="#999999" outlined large>Restaurar todo</v-btn>
            </v-card-text>
            
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
  <script>
import Vue from 'vue';
import VueFileAgent from 'vue-file-agent';
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css';
import MenuMed from './MedicalProfileComponents/menuMed.vue'
Vue.use(VueFileAgent);
Vue.use(VueFileAgentStyles);
  export default {
    components: {
    MenuMed
},
    data () {
      return {
        fileRecords: [],
        uploadUrl: 'https://example.com',
        selectedItem: 1,
      }
    },
  }
  </script>


  <style>
  .v-input__icon--prepend .v-icon { 
    color: #9966ff;
  }
  .input{
    margin-top: 5px;
    color: #9966ff !important;
    font-family: MontserratMedium;
    font-size: 100%;
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
  h1{
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