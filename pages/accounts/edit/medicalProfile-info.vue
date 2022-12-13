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
            
          <!-- btn editar -->
          <v-toolbar
              flat
              type="success"
            >
            <v-icon></v-icon>
            <v-toolbar-title v-model="status" class="font-weight-light">
              Su perfil médico está en proceso de verificación, esto puede tomar un par de días.
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              dark
              fab
              small
              @click="isEditing = !isEditing"
            >
              <v-icon v-if="isEditing">
                mdi-close
              </v-icon>
              <v-icon v-else>
                mdi-pencil
              </v-icon>
            </v-btn>
          </v-toolbar>

              <!-- btn editar -->

          </v-card-subtitle>
        <v-form ref="form" v-model="valid">
         
            <v-card-text class="pa-5 mt-8 ">
              <v-row>
                
                <!-- CAMPO TITULO | LUIS REYES -->
                <v-col  md="2" cols="12">
                  <span>Titulo*</span>
                  <v-select
                    outlined
                    placeholder="Selecciona"
                    :items="titulo"
                    :disabled="!isEditing"
                  ></v-select>
                </v-col>
                
                <!-- CAMPO NOMBRE DEL MEDICO | LUIS REYES -->
                <v-col  md="10" cols="12">
                  <span>Nombre del médico*</span>
                  <v-text-field
                    v-model="name"
                    outlined
                    placeholder="Escribe cómo quieres que aparezca tu nombre"
                    :disabled="!isEditing"
                  ></v-text-field>
                </v-col>
                
                <!-- SELECIONAR ESPECIALIDAD | LUIS REYES -->
                
                <v-col md="6" cols="12">
                  <span>Especialidad*</span>
                  <v-autocomplete
                    v-model="dbSelect"
                    :items="items"
                    item-text="name"
                    item-value="specialty_id"
                    outlined
                    placeholder="Seleccione una especialidad"
                    :disabled="!isEditing"
                  ></v-autocomplete>
                </v-col>

                <!-- CAMPO DE CÉDULA | LUIS REYES -->
                <v-col md="6" cols="12">
                  <span>No. de cédula</span>
                  <v-text-field
                    v-model="identification_card"
                    outlined
                    placeholder="000000000000"
                    :disabled="!isEditing"
                  ></v-text-field>
                </v-col>

                <!-- CAMPO INSTITUION QUE EMITE LA CEDULA | LUIS REYES -->
                <v-col md="6" cols="12">
                  <span>Institución que otorga la cédula</span>
                  <v-text-field
                    v-model="institution"
                    outlined
                    placeholder="Escribe el nombre de la institución"
                    :disabled="!isEditing"
                  ></v-text-field>
                </v-col>

                <!-- CAMPO DE FOTO DE CÉDULA | LUIS REYES -->
                <v-col md="6" cols="12">
                  <span>Foto de cédula*</span>
                  <v-file-input
                    v-model="idPhoto"
                    outlined
                    chips
                    :disabled="!isEditing"
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
                    :disabled="!isEditing"
                  ></v-textarea> 
                </v-col>
              </v-row>

                <!-- FOTOGRAFUCAS DE CERTIFICADOS | LUIS REYES -->
                  <h1 class="mb-5 mt-8">CERTIFICADOS</h1>


                  <VueFileAgent
                    ref="vueFileAgent"
                    :theme="'grid'"
                    :multiple="true"
                    :deletable="true"
                    :meta="true"
                    :accept="'image/*'"
                    :maxSize="'2MB'"
                    :maxFiles="5"
                    :helpText="'sube tus certificados'"
                    :errorText="{
                      type: 'Tipo de archivo invalido. Solo se permiten imágenes',
                      size: 'Los archivos no deben exceder los 2 MB de tamaño',
                    }"
                    @select="filesSelected($event)"
                    @beforedelete="onBeforeDelete($event)"
                    @delete="fileDeleted($event)"
                    v-model="fileRecords"
                  ></VueFileAgent>
                 
                 
                  <v-button :disabled="!fileRecordsForUpload.length" @click="certified_photos()" v-on:click="certified_photos">
                    subir {{ fileRecordsForUpload.length }} files
                  </v-button>
   
                <!-- REDES SOCIALES | LUIS REYES -->
                <br>
                <h1 >REDES SOCIALES</h1>
                <br>
                <v-row>
                  <!-- Facebook -->
                  <v-col md="4" cols="12">
                      <span >Facebook</span>
                      <v-text-field
                        v-model="facebook"
                        dense
                        placeholder="fb.com/medico"
                        outlined
                        :disabled="!isEditing"
                      >
                      <template #prepend-inner3>
                        <img src="@/assets/icons/icon_facebook.svg" />
                      </template>
                    </v-text-field>
                  </v-col>
                  
                  <!-- INSTAGRAM -->
                  <v-col md="4" cols="12">
                    <span>Instagram</span>
                    <v-text-field
                      v-model="instagram"
                      dense
                      outlined
                      placeholder="instagram.com/medico"
                      :disabled="!isEditing"
                    >
                    <template #prepend-inner>
                        <img style=" width: 5 vh;" src="@/assets/icons/icon_insta.svg" />
                    </template>
                  </v-text-field>
                  </v-col>


                  <!-- TikTok -->
                  <v-col md="4" cols="12">
                    <span>Tiktok</span>
                    <v-text-field
                      v-model="tiktok"
                      outlined
                      dense
                      placeholder="tiktok.com/medico"
                    >
                    <template>
                      <img style=" width: 5 vh;" src="@/assets/icons/icon_tiktok.svg" />
                    </template>
                    </v-text-field>
                  </v-col>

                  <!-- SITIO WEB -->
                  <v-col md="4" cols="12">
                    <span>Sitio web</span>
                    <v-text-field
                    v-model="website"
                    outlined
                    dense
                    placeholder="Ingresa tu sitio web"
                    >
                  </v-text-field>
                  </v-col>
                </v-row>

                <!-- BOTONES -->

                <BR/><BR/>
                  <v-btn  
                    @click="overlay = !overlay" 
                   
                    height="50px" 
                    class="white--text save mt-7" 
                    color="#7900ff" 
                    large
                    >
                    Guardar cambios
                  </v-btn>
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
        /* TITULO | PREFIJO */
        titulo: ['Prof.', 'Profa.', 'Dr.', 'Dra.','Lic.', 'Mtro.','Mtra.'],
        
        status:"",
        title:"",
        name: "",
        specialty:"",
        institution:"",
        photo:"",
        identification_card:"",
        aboutme: "",
        facebook:"",
        instagram:"",
        tiktok:"",
        website:"", 
        overlay: false,
       
  
        selectedItem: 1,
        isEditing: null,
         /* ESPECIALIDADES */ 
        dbSelect : '',
        items : [],

        fileRecords: [],
        uploadUrl: 'https://app.aryymd.com/api/v1/physician/educationalbackground/uploadcertificate',
        uploadHeaders: { 'X-Test-Header': 'vue-file-agent' },
        fileRecordsForUpload: [], // maintain an upload queue
   
 

        

      }
    },
    watch: {
    overlay (val) {
      val && setTimeout(() => {
        this.overlay = false
      }, 2000)
    },
  },
  
  
  methods: {
      reset () {
        this.$refs.form.reset()
      },

      getMedicalProfile() {
      this.$axios
      .get('/api/v1/physician/profile', 
      {
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
      })
      .then(res => {
        console.log(res)
        this.name = res.data.data.professional_name
        this.institution = res.data.data.physician_specialties[0].institution
        this.identification_card = res.data.data.physician_specialties[0].license
        this.status = res.data.message
        this. dbSelect = res.data.data.specialty_id
        alert(res.data.data.is_verified);
      })
      
        /*           alert(error.response.data.errors.email)
          this.name = ''
          this.is_verified = error.response.data.data0]  
          console.log(error.res.data.message)
          var data = error.res.data.data;
          if(data.data == 'is_verified'){
            this.name = !this.isEditing
            this.institution= !this.isEditing
            this.identification_card= !this.isEditing
            this.status = !this.isEditing
            else{

              axios.post('{{ route("medcial,saber) }}',formData,  {
                              headers: { "Content-Type": "multipart/form-data" }
                      })
            } 
            */
     

   

     
    },

/*    ACTUALZIR PERFIL

    putMedicalProfile() {
      this.$axios
       .put('/api/v1/physician',{
        professional_name: this.name,
        social_network:[
          {
            facebook: this.facebook,
            tiktok: this.tiktok,
            youtube: this.instagram
          },
        ],
        biography: this.aboutme,
        physician_specialties: [
          {
            speciality_id,
            license,
            institution,
            license_photo,
          }
        ]
       },{
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
       })
    }, */

    save () {
        this.isEditing = !this.isEditing
        this.hasSaved = true
      },

          /* OBTENER ESPECIALIDADES */
    getspecialty() {
      this.$axios
      .get('/api/v1/catalogue/specialties',{
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
      })
      .then(res => {
        console.log(res)
        this.items= res.data.data
        console.log(res.data.data)
      })
    },






    /* FOTO DE CEDULA | LUIS REYES */
    postMedical(){
      const formData = new FormData();
      formData.append('license_photo', this.idPhoto);
      formData.append('license',this.identification_card);

      this.$axios
       .post('/api/v1/physician/educationalbackground/uploadlicense', formData,
       {
        headers: {
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
           "Content-Type": "multipart/form-data"
        }
        
       })
       
    },
      
    /* FOTOGRAFIAS DE CERTIFICADOS */
    certified_photos(){
      const formData = new FormData();
    /*   formData.append('certificate_photo', this.fileRecords[0].files) */

      // Leer archivos seleccionados
      /* const files = this.$refs.uploadfiles.files; */
    /*   const totalfiles = this.$refs.uploadfiles.files.length; */

     /*  console.log(this.$refs.uploadfiles.files.length) */
     console.log("llegue")
      /* for (const index = 0; index < totalfiles; index++) {
      formData.append("certificate_photo[]", file[index]);
      } */

      /* this.$axios
       .post('/api/v1/physician/educationalbackground/uploadcertificate', formData,
       {
        headers:{
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
           "Content-Type": "multipart/form-data"
        }
       }) */

       console.log(formData)

    }, 
    
    uploadFiles: function () {
        // Usando el cargador predeterminado. Puede usar otro cargador en su lugar.
        this.$refs.vueFileAgent.upload(this.uploadUrl, this.uploadHeaders, this.fileRecordsForUpload);
        this.fileRecordsForUpload = [];
      },
      deleteUploadedFile: function (fileRecord) {
        // Usando el cargador predeterminado. Puede usar otro cargador en su lugar.
        this.$refs.vueFileAgent.deleteUpload(this.uploadUrl, this.uploadHeaders, fileRecord);
      },
      filesSelected: function (fileRecordsNewlySelected) {
        const validFileRecords = fileRecordsNewlySelected.filter((fileRecord) => !fileRecord.error);
        this.fileRecordsForUpload = this.fileRecordsForUpload.concat(validFileRecords);
      },
      onBeforeDelete: function (fileRecord) {
        const i = this.fileRecordsForUpload.indexOf(fileRecord);
        if (i !== -1) {
        // 
          this.fileRecordsForUpload.splice(i, 1);
          const k = this.fileRecords.indexOf(fileRecord);
          if (k !== -1) this.fileRecords.splice(k, 1);
        } 
      },
      fileDeleted: function (fileRecord) {
        const i = this.fileRecordsForUpload.indexOf(fileRecord);
        if (i !== -1) {
          this.fileRecordsForUpload.splice(i, 1);
        } else {
          this.deleteUploadedFile(fileRecord);
        }
      },
    },
    mounted() {
        this.getMedicalProfile()
        this.getspecialty()
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