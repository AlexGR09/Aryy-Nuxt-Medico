<template>
  <div class="container">
    <v-breadcrumbs class="breadcrumbs" :items="items">
      <template v-slot:item="{ item }">
        
        <v-breadcrumbs-item
          :href="item.href"
          :disabled="item.disabled"
        >
        <v-icon size="22" color="#7900ff">{{ item.icon }}</v-icon>   
       <span class="breadcrumbs">{{ item.text }}</span> 
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <!-- tabla de pacientes | Genesis -->
    <div class="row justify-content-md-center">
      <div class="col">
        <v-col
          xs="12"
          sm="12"
          md="12"
          lg="12"
          mg="12"
          align="center"
          justify="center"
        >
          <v-card flat rounded class="margen">
            <v-card-title>
              <v-row class="ma-4 d-flex justify-space-between">
                <v-btn width="20%" class="white--text" color="#7900ff"
                  ><span>Editar expediente</span></v-btn
                >
                <v-btn width="20%" outlined class="btnStart"
                  ><span class="black--text">Iniciar consulta</span
                  ><v-icon class="ml-2">mdi-account-plus</v-icon></v-btn
                >
              </v-row>
            </v-card-title>
            <v-card-title class="mt-n10 mb-n10">
              <v-row class="ma-4 d-flex justify-start">
                <v-col xl="5">
                  <v-select
                    append-icon="mdi-menu-down"
                    outlined
                    class="select ml-n5 mt-n3"
                    hide-details
                    dense
                    background-color="#f4edff"
                    color="#7900ff"
                    :items="keys"
                    placeholder="Ordenar por"
                  ></v-select>
                </v-col>

                <v-toolbar
                  width="30%"
                  flat
                  color="transparent"
                  class="vtoolbar"
                >
                  <v-text-field
                    reverse
                    class="search"
                    color="grey"
                    dense
                    background-color="white"
                    outlined
                    label="Búsqueda   "
                    prepend-inner-icon="mdi-magnify"
                  ></v-text-field>
                </v-toolbar>
              </v-row>
              <v-row class="ma-4 d-flex justify-end">
                <v-btn width="40%" class="white--text mr-3" color="#7900ff"
                  ><span>Importar pacientes</span></v-btn
                >
                <v-btn width="43%" outlined class="btnStart"
                  ><span class="black--text">Exportar pacientes</span
                  ><v-icon class="ml-2">mdi-account-plus</v-icon></v-btn
                >
              </v-row>
            </v-card-title>
            <!-- se llena la tabla con los datos del axios y encabezados con script | Genesis -->
            <v-data-table
        :headers="headers"
        :items="characters"
        item-key="name"
        :search="search"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer>
        <template v-slot:[`item.create`]>
                <a class="a" href="/medical-record/medical-record">Crear cita</a>
              </template>
              <template v-slot:[`item.actions`]="{ item }">
                <!-- agrupar botones en una sola fila  | Genesis -->
                <v-btn-toggle borderless class="botones">
                  <v-btn class="iconos" icon>
                    <v-img
                      :src="require('@/assets/icons/icon_verpaciente.svg')"
                      max-width="23"
                    ></v-img>
                  </v-btn>
                  <v-btn class="iconos" @click="deleteItem(item)" icon>
                    <v-img
                      :src="require('@/assets/icons/icon_borrarpaciente.svg')"
                      max-width="23"
                    ></v-img>
                  </v-btn>
                </v-btn-toggle>
              </template>
      </v-data-table>
            <v-row class="ma-4 d-flex justify-end" wrap>
            <v-col class="ma-4 d-flex justify-end" cols="12" md="6">
              <v-pagination
              color="#7900ff"
        v-model="page"
        :length="pageCount"
        :total-visible="5"
      ></v-pagination>
            </v-col>
          
         
        </v-row>
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
  layout: 'default',
  components: {},
  data() {
    return {
      itemsPerPage: 10,
      page: 1,
      isSelecting: false,
      characters: [],
      headers: [
        /* encabezados para la tabla y estilos | Genesis */
        {
          text: 'Nombre completo',
          align: 'start',
          filterable: false,
          value: 'name',
        },
        { text: 'Teléfono', value: 'species', align: 'start' },
        { text: 'Última visita', value: 'gender', align: 'start' },
        {
          text: 'Próxima visita',
          value: 'create',
          sortable: false,
          align: 'start',
        },
        { text: '', value: 'actions', sortable: false, align: 'start' },
        { text: '', value: '', sortable: false, align: 'start' },
      ],
      /* Opciones para el select de sort by | Genesis */
      keys: [
        'Nombre y apellidos',
        'Teléfono',
        'Última visita',
        'Siguiente visita',
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
    deleteItem(item) {
      this.editedIndex = this.characters.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
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
span.breadcrumbs{
  font-family: Montserrat;
  color: #7900ff;
}
</style>
  