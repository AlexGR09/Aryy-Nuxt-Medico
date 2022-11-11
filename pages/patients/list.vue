<template>
  <div class="container">
     <!-- tabla de pacientes | Genesis -->
      <div class="row justify-content-md-center">
        <div class="col">
            <v-col xs="12" sm="12" md="12" lg="12" xl="12" align="center" justify="center">
              <v-toolbar height="150%" rounded flat>
              <v-row justify="space-between">
                <v-col  md="2" lg="2" xl="2">
                  <v-btn width="100%"  color="#7900ff" class="mr-2 mb-3 boton black--text"><span class="textbtn white--text" >Editar expediente</span></v-btn>
                  <v-select full-width append-icon="mdi-menu-down" outlined flat class="select " hide-details dense background-color="#f4edff" color="#7900ff" :items="keys" placeholder="Ordenar por"></v-select>        
                  
                </v-col>
                <v-row justify="start">
                  <v-col  md="5" lg="10" xl="12" class="mt-15">
                    <v-toolbar width="100%" flat color="transparent" class="vtoolbar ml-n10">
                      <v-text-field class="search" color="grey" dense background-color="white" outlined label="Búsqueda" prepend-inner-icon="mdi-magnify"></v-text-field>
                    </v-toolbar></v-col></v-row>
                    <v-row justify="center mt-12 ml-16">
                      <v-col class="ml-16"  xs="1" sm="1" md="5" lg="10" xl="4">
                  <v-btn outlined class="textbtn ml-16" :loading="isSelecting" @click="handleFileImport">
                    <span class="textbtn black--text" >Importar pacientes</span>
                    <v-icon class="ml-3" size="calc(.7rem + .3vw)">mdi-file-plus-outline</v-icon>
                  </v-btn> 
                  <input 
                    ref="uploader" 
                    class="d-none" 
                    accept=".xlsx"
                    type="file" 
                    @change="onFileChanged"
                  > 
                </v-col></v-row>
                  
                <v-col class="mr-10" md="1" lg="2" xl="2">
                  <v-btn block outlined class="textbtn mb-3" :loading="isSelecting" @click="handleFileImport">
                    <span class="textbtn black--text" >Agregar paciente</span>
                    <v-icon class="ml-3" size="calc(.7rem + .3vw)">mdi-file-plus-outline</v-icon>
                  </v-btn> 
                  <input 
                    ref="uploader" 
                    class="d-none" 
                    type="file" 
                    @change="onFileChanged"
                  > 
                  <v-btn block outlined class="textbtn" :loading="isSelecting" @click="handleFileImport">
                    <span class="textbtn black--text" >Exportar pacientes </span>
                    <v-icon  size="calc(.7rem + .3vw)">mdi-file-plus-outline</v-icon>
                  </v-btn> 
                  <input 
                  
                    ref="uploader" 
                    class="d-none"
                    type="file" 
                    @change="onFileChanged"
                  > 
                  </v-col>
              </v-row>
               
              </v-toolbar>
              <v-card flat rounded class="margen">
                  <v-card-title>
                      
                  </v-card-title>
                  <!-- se llena la tabla con los datos del axios y encabezados con script | Genesis -->
                  <v-data-table class="pa-5 mt-n8" 
                      :headers="headers"
                      :items="characters"
                      sort-by="name"
                      :footer-props="{
                          showFirstLastPage: true,
                          'items-per-page-text':'Pacientes por página'
                      }"
                  >
               <!--    template personalizado para mostrar los headers de la tabla | Genesis -->
              <!--   <template v-slot:header="{ props: { headers } }">
                    <thead>
                      <tr>
                        <th v-for="h in headers" :class="h.class"  :key="h">
                          <p class="thead">{{h.text}}</p>
                        </th>
                      </tr>
                    </thead>
                </template> -->
                  <template v-slot:[`item.create`]>
                      <a>Crear cita</a>
                  </template>
                  <template v-slot:[`item.gender`]>
                    <v-row class="ml-n16">
                    <v-col xl="4"> 
                      <v-chip class="chipgreen  green--text" style="background:#e9f7ee"><l class="chip ml-1">ASISTIÓ</l></v-chip>
                      <!-- <v-chip class="chipred red--text" style="background:#fdeeec"><l class="chip">CANCELADA</l></v-chip>
                      <v-chip class="chipgrey grey--text" style="background:#f5f5f5"><l class="chip">N/A</l></v-chip> -->
                    </v-col>
                   <v-col class="ml-n6" xl="4">   <p class="ml-2">21/NOV/22</p></v-col>
                  </v-row>
                  </template>
                  <!-- template personalizado para mostrar las acciones de la tabla | Genesis -->
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
            text: 'Nombre completo',
            align: 'start',
            filterable: false,
            value: 'name',
          },
          { text: 'Teléfono', value: 'species', align: 'start', width: '300px'},
          { text: 'Última cita', value: 'gender', align: 'start',   },
          { text: 'Próxima visita', value: 'create', sortable: false, align: 'center',   },
          { text: '', value: 'actions', sortable: false, align: 'start' },
          { text: '', value: '', sortable: false, align: 'start',},
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
        
        deleteItem (item) {
        this.editedIndex = this.characters.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
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
  
.vtoolbar{
    border: thin solid #cccccc;
    height: 30px;
    width: 2rem;
  }
  .search{
    
    font-family: Montserrat;
  }

.thead{
  font-family: Montserrat;
  color: #999999;
  font-size: .85rem;
}
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
          margin-left: -2px;
      }
      span{
    font-size: .9rem;
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
      .select input::placeholder {
  color: #7900ff !important;
  opacity: 1;
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

  .search{
    font-family: Montserrat;
  }
  .v-input__icon--prepend-inner .v-icon { 
    color: #cccccc;
  }
  .v-input__icon--append .v-icon { 
    color: #7900ff;
    font-size: 52px;
  }
.textbtn{
  font-family: Montserrat;
  font-size: calc(.6rem + .3vw);
}
.chipgreen{
  width: 100px;
  border: 2px solid #1baa55 !important;
}
.chipred{
  border: 2px solid #e74c3c !important;
}
.chipgrey{
  border: 2px solid #999999 !important;
}
l.chip{
  font-size: .7rem;
  text-transform: uppercase;
}
  </style>
  