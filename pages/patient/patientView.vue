<template>
    <div class="container">
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
      name: 'ProfileView',
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
      tbody{
          font-family: 'MontserratMedium';
      }
      a{
          color: #9966ff !important;
          font-family: MontserratBold;
          font-size: 15px;
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
      
  </style>
  