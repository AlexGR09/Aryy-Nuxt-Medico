<template>
  <div>
    <v-row>
      <v-card flat>
        <menu-med/>
      </v-card>
      <v-col md="10" lg="10" xl="10">          
        <v-card 
        flat 
        class="pa-3 mt-2">
          <v-card-subtitle 
          class="pa-3  mt-n2 mb-n10">
          <h1 >FORMACIÓN ACADÉMICA</h1>
            
          </v-card-subtitle>
        <v-form ref="form" v-model="valid">
         
            <v-card-text class="pa-5 mt-8 ">
              <v-row>
                
                <!-- CAMPO TITULO | LUIS REYES -->
                <v-col  md="2" cols="12">
                  <span>Titulo*</span>
                  <v-autocomplete
                    v-model="title" 
                    class="textfield " 
                    placeholder="Selecciona"
                    outlined
                    :items="items"
                  ></v-autocomplete>
                </v-col>
                
                <!-- CAMPO NOMBRE DEL MEDICO | LUIS REYES -->
                <v-col  md="10" cols="12">
                  <span>Nombre del médico*</span>
                  <v-text-field
                    v-model="name"
                    outlined
                    placeholder="Escribe cómo quieres que aparezca tu nombre"
                  ></v-text-field>
                </v-col>
                
                <!-- SELECIONAR ESPECIALIDAD | LUIS REYES -->
                
                <v-col md="6" cols="12">
                  <span>Especialidad*</span>
                  <v-autocomplete
                    v-model="specialty"
                    outlined
                    placeholder="Seleccione una especialidad"
                  ></v-autocomplete>
                </v-col>

                <!-- CAMPO DE CÉDULA | LUIS REYES -->
                <v-col md="6" cols="12">
                  <span>No. de cédula</span>
                  <v-text-field
                    v-model="identification_card"
                    outlined
                    placeholder="000000000000"
                  ></v-text-field>
                </v-col>

                <!-- CAMPO INSTITUION QUE EMITE LA CEDULA | LUIS REYES -->
                <v-col md="6" cols="12">
                  <span>Institución que otorga la cédula</span>
                  <v-text-field
                    v-model="institution"
                    outlined
                    placeholder="Escribe el nombre de la institución"
                  ></v-text-field>
                </v-col>

                <!-- CAMPO DE FOTO DE CÉDULA | LUIS REYES -->
                <v-col md="6" cols="12">
                  <span>Foto de cédula*</span>
                  <v-file-input
                    v-model="photo"
                    outlined
                    chips
                    placeholder="subir fotografia"
                    color="#9966ff"
                  ></v-file-input>
                  <p class="input mt-3 mb-n4">Formato permitidos: JPG o PNG. Tamaño máximo de archivo 2 MB</p>
                </v-col>
                
                <!-- CAMPO DE SOBRE MI | LUIS REYES -->
                <v-col xl="12">
                  <span >Sobre mi(opcional)</span>
                  <v-textarea 
                    color="#9966ff" 
                    v-model="aboutme" 
                    maxlength="400" 
                    counter="400" 
                    auto-grow 
                    placeholder="Escribe una biografía breve sobre ti" 
                    outlined 
                    class="textfield mb-16"
                  ></v-textarea> 
                </v-col>
              </v-row>


    <H1 class="mb-5 mt-8">CERTIFICADOS</H1>
    <VueFileAgent  :multiple="true" :deletable="true" :helpText="'Selecciona o arrastra tus archivos aquí'" :uploadUrl="uploadUrl" v-model="fileRecords"></VueFileAgent>

    <!-- REDES SOCIALES | LUIS REYES -->
    <h1 >REDES SOCIALES</h1>


    
    
    <v-row>
      <v-col md="4" cols="12">
          <span >Facebook</span>
          <v-text-field
            dense
            placeholder="fb.com/medico"
            outlined
           
          >
          <template #prepend-inner>
    
            <img  src="@/assets/icons/icon_facebook.svg" />
            <v-icon :src="require('@/assets/icons/icon_facebook.svg')"></v-icon>
          </template>
        </v-text-field>
            <v-btn outlined class="btn " block color="#999999" height="50"><v-img class=" mr-3" :src="require('@/assets/icons/icon_facebook.svg')" max-width="35"></v-img>
              Vincula tu cuenta de Facebook
            </v-btn>
          </v-col>
            
        
        <v-col md="4" cols="12">
          <span >Instagram</span>
            <v-btn outlined class="btn" block color="#999999" height="50"><v-img class=" mr-3" :src="require('@/assets/icons/icon_insta.svg')" max-width="28"></v-img>
              Vincula tu cuenta de Instagram
            </v-btn>
        </v-col>
        <v-col md="4" cols="12">
          <span>TikTok</span>
            <v-btn outlined class="btn" block color="#999999" height="50"><v-img class=" mr-3" :src="require('@/assets/icons/icon_tiktok.svg')" max-width="28"></v-img>
                Vincula tu cuenta de TikTok
            </v-btn>
        </v-col>
        <v-col xs="12" sm="12" md="12" lg="6" xl="4">
               <span>Sitio Web</span>

            <v-btn outlined class="btn" block color="#999999" height="50"><v-img class=" mr-3" :src="require('@/assets/icons/icon_internet.svg')"  max-width="25"></v-img>
              <l>Ingresa tu sitio web</l>
            </v-btn>
          </v-col>
    </v-row>






    <BR/><BR/>
   <v-btn  @click="overlay = !overlay" height="50px" class="white--text save mt-7" color="#7900ff" large>Guardar cambios</v-btn>
      <v-btn  height="50px" class="restore ml-3 mt-7" color="#999999" outlined large>Restaurar todo</v-btn>
      <v-overlay :value="overlay">
        <v-alert class="rounded-xl" icon="mdi-check-circle" color="green">Datos actualizados correctamente.</v-alert>
      </v-overlay> 
    
  </v-card-text>
</v-form> 
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

        status:"",
        title:"",
        name: "",
        specialty:"",
        institution:"",
        photo:"",
        identification_card:"",
        overlay: false,
        fileRecords: [],
        uploadUrl: 'https://example.com',
        selectedItem: 1,
        items:
        [
          {title:'Dr.'}

        ]
      }
    },
    watch: {
    overlay (val) {
      val && setTimeout(() => {
        this.overlay = false
      }, 3000)
    },
  },


  methods: {
      reset () {
        this.$refs.form.reset()
      },

      getMedicalProfile() {
      this.$axios
      .get('/api/v1/physician', 
      {
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
      })
      .then(res => {
        console.log(res)
        this.status= res.data.data.is_verified
        this.name = res.data.data.professional_name
        this.institution = res.data.data.physician_specialties[0].institution
        this.identification_card = res.data.data.physician_specialties[0].license
      })
      .catch((error) => {
         alert(error.response.data.errors.email)
          this.errormail = ''
          this.errormail = error.response.data.errors.email[0]
          this.password_error=""
          this.password_error = error.response.data.errors.password[0] 
         
          console.log(error.res.data.message)
        })
     
    } 
  },
  mounted() {
    this.getMedicalProfile()
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
    color: #999999;
    font-family: Montserrat;
    font-size: 120%;
  }
  p{
    font-family: MontserratMedium;
    color: gray;
    font-size: 110%;
  }
  p.cedu{
    font-family: Montserrat;
    font-size: 120%;
    color: #999999;
  }
  .v-input__icon--append .v-icon { 
    font-size: 50px;
    color: #999999;
  }
  </style>