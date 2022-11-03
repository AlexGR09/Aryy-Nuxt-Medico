<template>
  <div>
    <v-row>
      <v-card flat>
        <menu-med/>
      </v-card>
      <v-col md="10" lg="9" xl="10">
        <v-card flat height="800px" class="pa-3 mt-2">
          <v-card-subtitle class="pa-3  mt-n2 mb-n10"><H1 class="mb-5">IDENTIDAD MÉDICA</H1></v-card-subtitle>
            <v-card-text class="pa-3 mt-5 ">
              <v-row>
                <v-col xl="6">
                  <span>Logotipo propio*</span>
                  <v-file-input chips color="#9966ff" class="textfield" placeholder="Adjunta tu logotipo" outlined></v-file-input >
                  <v-input class="input mb-n4">Formatos pemitidos: JPG o PNG. Tamaño máximo de archivo 5 MB</v-input>
                </v-col>
            </v-row> 
                  <H1 class="mb-5 mt-5">FOTOGRAFÍAS</H1>
                  <span>Fotografías del especialista</span>
                   <VueFileAgent :multiple="true" :deletable="true" :helpText="'Selecciona o arrastra tus archivos aquí'" :uploadUrl="uploadUrl" v-model="fileRecords"></VueFileAgent>
                   <v-badge
                        :value="hover"
                        color="deep-purple accent-4"
                        content="9999+"
                        left
                        transition="slide-x-transition"
                    >

                        <v-hover v-model="hover">
                        <v-input class="input mb-n4"> <v-icon
                            color="#9966ff"
                            small
                        >
                        mdi-information
                        </v-icon>Más información sobre las fotos</v-input>
                        </v-hover>
                    </v-badge>
                    <div class="mt-5">
                        <span>Fotografías del especialista</span>
                   <VueFileAgent :multiple="true" :deletable="true" :helpText="'Selecciona o arrastra tus archivos aquí'" :uploadUrl="uploadUrl" v-model="fileRecords"></VueFileAgent>
                   <v-badge
                        :value="hover2"
                        color="deep-purple accent-4"
                        content="9999+"
                        left
                        transition="slide-x-transition"
                    >
                    
                        <v-hover v-model="hover2">
                        <v-input class="input mb-n4"> <v-icon
                            color="#9966ff"
                            small
                        >
                        mdi-information
                        </v-icon>Más información sobre las fotos</v-input>
                        </v-hover>
                    </v-badge>
                    </div>
                   <!-- <span>Fotografías del establecimiento</span>
                   <VueFileAgent :multiple="true" :deletable="true" :helpText="'Selecciona o arrastra tus archivos aquí'" :uploadUrl="uploadUrl" v-model="fileRecords"></VueFileAgent>
                -->
              

<div>
    <v-btn height="50px" class="white--text save mt-7" color="#7900ff" large>Guardar cambios</v-btn>
    <v-btn  height="50px" class="restore ml-3 mt-7" color="#999999" outlined large>Restaurar todo</v-btn>
</div>

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
import MenuMed from './menuMed.vue'
Vue.use(VueFileAgent);
Vue.use(VueFileAgentStyles);
export default {
  components: {
    MenuMed
},
  data () {
    return {
        hover: false,
        hover2: false,
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