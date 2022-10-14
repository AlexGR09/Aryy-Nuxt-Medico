<template>
  <div class="container">
    <!-- componentes para el app bar | Genesis -->
    <v-app-bar app color="white" :clipped-left="clipped" height="100">
      <h3>{{ $options.name}}</h3>
      <v-spacer></v-spacer>
      <!-- barra de busqueda | Genesis -->
      <v-toolbar
        flat
        class="vtoolbar mr-5"
        dense
      >
        <v-text-field
          reverse
          class="search"
          color="#f2f2f2"
          dense
          outlined
          placeholder="Buscar paciente "
          hide-details
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-toolbar>
      <!-- boton para cargar archivo | Genesis -->
      <v-btn 
        outlined
        class="boton mr-4"
        :loading="isSelecting" 
        @click="handleFileImport"
      >
        <span>Importar pacientes</span>
        <v-icon>mdi-file-plus-outline</v-icon>
      </v-btn> 
      <input 
        ref="uploader" 
        class="d-none" 
        type="file" 
        @change="onFileChanged"
      > 
       <!-- boton para agregar pacientes | Genesis -->
        <v-btn 
          color="#7900ff"
          class="ml-2 mr-2 boton white--text"
        >
          <span>Agregar paciente</span>
          <v-icon>mdi-account-plus-outline</v-icon>
          <h1></h1>
        </v-btn>
         <!-- iconos para notificacion, ajustes y cuenta | Genesis -->
        <v-btn class="ml-4" icon small>
            <v-img :src="require('@/assets/icons/icon_settings.svg')" max-width="23"></v-img>
        </v-btn>
        <v-btn class="ml-4" icon small>
            <v-img :src="require('@/assets/icons/icon_notificationpatient.svg')" max-width="23"></v-img>
        </v-btn>
        <v-btn class="ml-5 mr-7" fab  color="#7900ff">
            <v-icon large color="#fff">
                mdi-account
            </v-icon>
        </v-btn>
    </v-app-bar>
     <!-- tabla de pacientes | Genesis -->
      <div class="row justify-content-md-center">
        <div class="col">
          <br>
            <v-col xs="12" sm="12" md="12" lg="12" mg="12" align="center" justify="center">
              <v-card rounded class="margen">
                  <v-card-title>
                      <v-row justify="end" class="select mb-n16"><v-col xs="2" sm="2" md="2" lg="2" mg="2" class="select mb-5" >
                          <v-select outlined flat class="select mb-n16"  hide-details dense background-color="#f4edff" :items="keys" placeholder="Ordenar por"></v-select>
                      </v-col></v-row>
                  </v-card-title>
                  <!-- se llena la tabla con los datos del axios y encabezados con script | Genesis -->
                  <v-data-table class="pa-5 mt-n5"
                      :headers="headers"
                      :items="characters"
                      sort-by="name"
                      :footer-props="{
                          showFirstLastPage: true,
                          'items-per-page-text':'Pacientes por página'
                      }"
                  >
                  <template v-slot:[`item.create`]>
                      <a>Crear cita</a>
                  </template>
                  <template v-slot:[`item.actions`]="{ item }">
                    <!-- agrupar botones en una sola fila  | Genesis -->
                    <v-btn-toggle borderless class="botones">
                      <v-btn class="iconos" icon>
                         <v-img :src="require('@/assets/icons/icon_verpaciente.svg')" max-width="23"></v-img>
                      </v-btn>
                      <v-btn class="iconos" icon>
                       <v-img :src="require('@/assets/icons/icon_editpaciente.svg')" max-width="23"></v-img>
                      </v-btn>
                      <v-btn class="iconos"   @click="deleteItem(item)" icon >
                         <v-img :src="require('@/assets/icons/icon_borrarpaciente.svg')" max-width="23"></v-img>
                      </v-btn>
                    </v-btn-toggle>
                  </template>
                </v-data-table>
              </v-card>
            </v-col>
        </div>
      </div>
      <br />
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
      name: 'Pacientes',
      layout: 'patientView',
      components: 
      {
      },
      data() {
  
          return {
              characters: [],
              headers: [
                /* encabezados para la tabla y estilos | Genesis */
          {
            text: 'NOMBRE Y APELLIDOS',
            align: 'start',
            filterable: false,
            value: 'name',
          },
          { text: 'TELÉFONO', value: 'species', align: 'start' },
          { text: 'ÚLTIMA VISITA', value: 'gender', align: 'start' },
          { text: 'SIGUIENTE VISITA', value: 'create', sortable: false, align: 'start'  },
          { text: '', value: 'actions', sortable: false, align: 'start' },
          { text: '', value: '', sortable: false, align: 'start'},
        ],
          /* Opciones para el select de sort by | Genesis */
        keys: [
          'Nombre y apellidos',
          'Teléfono',
          'Última visita',
          'Siguiente visita',
        ],
         }
      },
      mounted() {
          console.log('verificando');
          this.getTodos();
  
      },
      methods: {
        handleFileImport() {
                this.isSelecting = true;

                // After obtaining the focus when closing the FilePicker, return the button state to normal
                window.addEventListener('focus', () => {
                    this.isSelecting = false
                }, { once: true });
                
                // Trigger click on the FileInput
                this.$refs.uploader.click();
            },
            onFileChanged(e) {
                this.selectedFile = e.target.files[0];

                // Do whatever you need with the file, liek reading it with FileReader
            },
        chooseFiles() {
        document.getElementById("fileUpload").click()
    },
          getTodos() {
              console.log('peticion GET');
              axios.get('https://rickandmortyapi.com/api/character')
                  .then(res => {
                       console.log(res)
                      this.characters = res.data.results
                  })
                  .catch(e => {
                      /* console.log(e); */
                      console.log(e);
                  })
          },
      }
  }
  </script>
  <style>
  
/*   estilos para llenado de tabla | Genesis */
      th{
          font-family: Montserrat;
      }
      h3{
        padding-left: 3rem;
        font-size: 1.4rem;
      }
      tbody{
          font-family: 'MontserratMedium';
      }
      a{
          color: #9966ff !important;
          font-family: MontserratBold;
          font-size: 15px;
      }
      span{
    font-size: 1rem;
    font-family: MontserratMedium;
    align-items: start;
    text-transform: lowercase;
  }
  span::first-letter {
 text-transform: uppercase;
}
      .select{
          font-family: MontserratMedium;
          font-size: 15px;
      }
      /*   estilos para botones | Genesis */
      .boton{
          color: #9966ff;
      }
      .botones{
        background: transparent !important;
      }
      .iconos{
        margin-left: -10px;
      }
  /* estilos para barra de busqueda | Genesis */
  .vtoolbar{
    border: thin solid #cccccc;
    height: 30px;
    width: 6rem;
  }
  .search{
    font-family: Montserrat;
  }
  .v-input__icon--prepend-inner .v-icon { 
    color: #cccccc;
  }

  </style>
  