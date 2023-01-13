<template>
    <v-container>
    <div>
        <v-row>
          <v-col cols="12" md="2">
            <v-select
              @input="changedLabel"
              v-model="sort"
              append-icon="mdi-menu-down"
              outlined
              class="select"
              hide-details
              dense
              background-color="#f4edff"
              item-color="deep-purple"
              color="#7900ff"
              :items="keys.title"
              placeholder="Ordenar por"
            >
            </v-select>
          </v-col>
        <!-- ICONO FILTRE RESPOSIVE -->
        <v-col class="filter-menu" cols="2" md="4" >
            <v-menu
                bottom
                left
            >
                <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    icon
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon>mdi-filter</v-icon>
                </v-btn>
                </template>
                <v-list>
                <v-list-item
                    v-for="(item, i) in keys"
                    :key="i"
                >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
                </v-list>
            </v-menu>
        </v-col>
        <!-- ICONO FILTRE RESPOSIVE -->
        <v-col cols="9" md="4" >
            <v-text-field
            v-model="search"
              class="search"
              dense
              outlined
              label="Búsqueda"
              prepend-inner-icon="mdi-magnify"
            >
            </v-text-field>
        </v-col>

          <v-spacer></v-spacer>
          
        <!-- buttons to import and export patients | Luis Reyes -->
          
          <v-col class="option-btn">
            <v-btn
                outlined
                color="#004D40"
            >
                Importar pacientes
                <v-icon
                    right
                >
                mdi-file-excel
                </v-icon>
            </v-btn>
          </v-col>        
          <v-col  class="option-btn">
            <v-btn
                outlined
                color="#004D40"
            >
                Exportar pacientes
                <v-icon
                    right
                >
                mdi-file-excel
                </v-icon>
            </v-btn>
         </v-col>
        <!-- buttons to import and export patients | Luis Reyes -->
        </v-row>

    <!--  
        <v-data-table>
        </v-data-table> -->
        <v-data-table
              :search="search"
              :headers="headers"
              :items="characters"
              mobile-breakpoint="0"
              item-key="name"
              hide-default-header
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              :page.sync="page"
              :items-per-page="itemsPerPage"
              hide-default-footer
            >
            <template #header="{ props: { headers } }">
                <thead class="v-data-table-header">
                  <tr>
                    <th
                      v-for="header in headers"
                      :key="header.value"
                      class="text-uppercase"
                      scope="col"
                    >
                      <span class="headers">{{ header.text }}</span>
                    </th>
                  </tr>
                </thead>
              </template> 
              <!--  seccion de nombre de paciente | Genesis -->
              <template v-slot:[`item.name`]="{ item }">
                <!-- agrupar botones en una sola fila  | Genesis -->
                <a class="name" href="/medical-record/patient">{{
                  item.name
                }}</a>
              </template>

              <!-- Seccion de última cita | Genesis -->
              <template v-slot:[`item.gender`]="{ item }">
                <v-row >
                  <v-col cols="12" xs="12" sm="12" md="5" lg="4" xl="3">
                    <!--    chip de cita asistida | Genesis -->
                    <v-chip
                      v-if="attendance"
                      class="justify-center asistencia"
                      color="#e9f7ee"
                      text-color="#1baa55"
                      ><span style="text-transform: uppercase; font-size: 85%"
                        >ASISTIÓ</span
                      ></v-chip
                    >
                    <!--    chip de cita cancelada | Genesis -->
                    <v-chip
                      v-if="absence"
                      class="justify-center cancel"
                      color="#fdeeec"
                      text-color="#e74c3c"
                      ><span style="text-transform: uppercase; font-size: 85%"
                        >CANCELADA</span
                      ></v-chip
                    >
                    <!--    chip de cita no asistida | Genesis -->
                    <v-chip
                      v-if="na"
                      class="justify-center na"
                      color="#f5f5f5"
                      text-color="#999999"
                      ><span style="text-transform: uppercase; font-size: 85%"
                        >N/A</span
                      ></v-chip
                    >
                  </v-col>
                  <v-col cols="12" xs="2" sm="2" md="5" lg="3" xl="3">
                    <p>{{ item.gender }}</p>
                  </v-col>
                </v-row>
              </template>
              <template v-slot:[`item.actions`]>
                <!-- agrupar botones en una sola fila  | Genesis -->
                <div style="width: 25px">
                  <v-btn-toggle borderless>
                    <v-btn class="iconos" icon>
                      <v-img
                        :src="require('@/assets/icons/icon_watch.svg')"
                        max-width="23"
                      ></v-img>
                    </v-btn>
                    <v-btn class="iconos" @click="deleteItemConfirm" icon>
                      <v-img
                        :src="require('@/assets/icons/icon_delete.svg')"
                        max-width="23"
                      ></v-img>
                    </v-btn>
                  </v-btn-toggle>
                </div>
              </template>
            </v-data-table>
    </div>
</v-container>
</template>
  
<script>
import axios from 'axios'
export default {

  layout: 'default',
  components: {},
  data() {
    return {
      sortBy: "name",
      sortDesc: false,
      sort: '',
      isSelecting: false,
      search: '',
      attendance: true,
      absence: false,
      na: false,
      itemsPerPage: 10,
      page: 1,
      selectedFile: null,
      characters: [],
      headers: [
        /* encabezados para la tabla y estilos | Genesis */
        {
          text: 'Nombre completo',
          align: 'start',
          value: 'name',
        },
        { text: 'Teléfono', value: 'species', align: 'start'},
        { text: 'Última cita', value: 'gender', align: 'start'},
        { text: '', value: 'actions', align: 'end', },
      ],

 
      /* Opciones para el select de sort by | Genesis */
      keys: [

         { title: 'Nombre completo' },
        { title: 'Teléfono' },
        { title: 'Última cita' }

      ],
      items: [
        {
          icon: 'mdi-home-outline',
          disabled: false,
          href: '/',
        },
        {
          text: 'Lista de pacientes',
          disabled: false,
          href: '/patients/list',
        },
      ],
    }
  },
  computed: {
    totalRecords() {
      return this.characters.length
    },
    pageCount() {
      return this.totalRecords / this.itemsPerPage
    },
  },
  mounted() {
    console.log('verificando')
    this.getTodos()
  },
  methods: {
    changedLabel(event) {
      this.sort = event;
      if(this.sort==="Nombre completo"){
        this.sortDesc = !this.sortDesc;
      }else{
        console.log("adiooooos")
      }
    },
    deleteItemConfirm() {
      this.characters.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    handleFileImport() {
      this.isSelecting = true
      // After obtaining the focus when closing the FilePicker, return the button state to normal
      window.addEventListener(
        'focus',
        () => {
          this.isSelecting = false
        },
        { once: true }
      )
      // Trigger click on the FileInput
      this.$refs.uploader.click()
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0]
      // Do whatever you need with the file, liek reading it with FileReader
    },
    chooseFiles() {
      document.getElementById('fileUpload').click()
    },
    getTodos() {
      console.log('peticion GET')
      axios
        .get('https://rickandmortyapi.com/api/character')
        .then((res) => {
          console.log(res)
          this.characters = res.data.results
        })
        .catch((e) => {
          /* console.log(e); */
          console.log(e)
        })
    },
  },
}
</script>
<style>

/* styles for patient table */

@media screen and (max-width: 810px) {
    .select, .option-btn{
        display:none;
    }
}

.filter-menu{

    margin-left: 2vh;
}
@media only screen and (min-width: 880px) {
.filter-menu {
	display: none !important;
 }
}

@media only screen and (max-width: 880px) {
	.filter-menu {
		display: block !important;
	}
}

.vtoolbar {
  border: thin solid #cccccc;
  height: 30px;
  width: 2rem;
}
.search {
  font-family: Montserrat;
}
.thead {
  font-family: Montserrat;
  color: #999999;
  font-size: 0.85rem;
}
/*   estilos para llenado de tabla | Genesis */
th {
  font-family: Montserrat;
}
h3 {
  padding-left: 3rem;
  font-size: 1.4rem;
}
tbody {
  font-family: 'MontserratMedium';
}
a {
  color: #9966ff !important;
  font-family: MontserratBold;
  font-size: 15px;
  text-decoration: none;
  margin-left: -2px;
}
a.name {
  color: black !important;
  font-family: Montserrat;
  font-size: 15px;
  text-decoration: none;
  margin-left: -2px;
}
a.header {
  color: black !important;
  font-family: Montserrat;
  font-size: 15px;
  text-decoration: none;
  text-transform: uppercase;
  margin-left: -2px;
}
span {
  font-size: 0.9rem;
  font-family: MontserratMedium;
  align-items: start;
  text-transform: lowercase;
}
span::first-letter {
  text-transform: uppercase;
}
.select {
  font-family: MontserratMedium;
  font-size: 15px;
}
.select input::placeholder {
  color: #7900ff !important;
  opacity: 1;
}
/*   estilos para botones | Genesis */
.boton {
  color: #9966ff;
}
.botones {
  background: transparent !important;
}
.btnStart {
  text-transform: uppercase !important;
}
.iconos {
  margin-left: -10px;
}
/* estilos para barra de busqueda | Genesis */
.vtoolbar {
  border: thin solid #cccccc;
  height: 30px;
  width: 6rem;
}
.search {
  font-family: Montserrat;
}
.v-input__icon--prepend-inner .v-icon {
  color: #cccccc;
}
.v-input__icon--append .v-icon {
  color: #7900ff;
  font-size: 52px;
}
span.breadcrumbs {
  font-family: Montserrat;
  color: #7900ff;
}
.asistencia {
  border: thin solid #1baa55 !important;
  width: 100%;
}
.cancel {
  border: thin solid #e74c3c !important;
  width: 100%;
}
.na {
  border: thin solid #999999 !important;
  width: 100%;
}
span.headers {
  text-transform: capitalize !important;
  font-family: Montserrat;
  color: #999999;
}
</style>