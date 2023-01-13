<template>
  <div>
    <v-card
      class="mx-auto"
    >

    <v-data-table>
      
    </v-data-table>

    </v-card>
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
        'Nombre completo',
        'Teléfono',
        'Última cita',
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