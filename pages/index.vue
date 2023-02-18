<!-- Maquetación => Template => Dashboard | Luis Reyes & Responsivo | Luis Reyes -->
<template>
  <v-app>
  <v-container>
    <v-toolbar flat color="transparent">
      <v-toolbar-title>Dr. {{ facilities }}</v-toolbar-title>
    </v-toolbar>
    <div class="">
        Aún no ha terminado de configurar su perfil de,
      <nuxt-link to="/accounts/edit/account/">click aqui</nuxt-link>
    </div>
   <v-row>
      <v-col cols="12" md="4" sm="8">
        <dashboard-citas />
      </v-col>
      <v-col cols="12" md="4" sm="8">
        <dashboard-marketing />
      </v-col>
      <v-col cols="12" md="4" sm="8">
        <dashboard-assistant />
      </v-col>
   
      <v-col cols="12" md="6">
        <next-consultation />
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="rounded-xl" color="white">
          <v-row justify="center">
            <v-date-picker
              v-model="picker"
              locale="mx-es"
              width="350"
              no-title
              prev-icon="$prev"
              class="justify-center calendar"
            ></v-date-picker>
          </v-row>
        </v-card>
      </v-col>
    </v-row> 
    <v-row>
       <v-btn color="primary" class="text-lowercase"  @click="generatePDF">
        Generar pdf
      </v-btn> 

      <icon-home/>
      <v-col cols="12" md="4" sm="4" xs="3">
        <v-autocomplete
          v-model="dbSelect"
          :items="items"
          item-text="name"
          item-value="specialty_id"
          outlined
          dense
          label="Especialidad"
          no-data-text="No hay resultados"
          :filter="customFilter"
        ></v-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</v-app>
</template>
<script>
import  JsPDF  from "jspdf";
import AutoTable from 'jspdf-autotable'


export default {
  name: 'Default',
    middleware: 'authenticated',

  data() {
    return {
      name: [],
      facilities: null,
      specialty: null,
      license: null,
      institution: null,
      patient_name: null,
      drug_name: null,
      brand: null,
      presentation: null,
      amount: null,
      frequency: null,
      duration:null,

      todos: [
        { title:'hola 1', description: 'quien eres'},

      ],
      dbSelect: null,
      items:[],
      searchText: '',
      
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
    }
  },

  computed: {
    filteredItems() {
      const searchText = this.searchText.toLowerCase().normalize('NFD').replace(/[\u0300-\u036F]/g, '');
      return this.items.filter(item => {
        const itemName = item.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036F]/g, '');
        return itemName.includes(searchText);
      });
    } 
  },

  mounted() {
   this.getName() 
    this.GET_RECETA()
    this.data_speciality()
  },

  methods: {
  getName() {
      this.$axios
        .get('/api/v1/physician/profile', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          this.facilities = res.data.data.professional_name
          this.specialty = res.data.data.specialty[0].name
          this.license = res.data.data.physician_specialty[0].license
          this.institution = res.data.data.physician_specialty[0].institution
          alert(res.data.data.specialty[0].name)
        })
    },

    
 GET_RECETA(){
      this.$axios
      .get('/api/v1/physician/medical-appointments/2',{
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .then((res) => {
        this.patient_name = res.data.data.patient_name
        this.drug_name = res.data.data.prescription.treatment.drug_name
        this.brand = res.data.data.prescription.treatment.brand
        this.presentation = res.data.data.prescription.treatment.presentation
        this.amount = res.data.data.prescription.treatment.amount
        this.frequency = res.data.data.prescription.treatment.frequency
        this.duration = res.data.data.prescription.treatment.duration_days
      })
    },
    customFilter(item, queryText) {
      const itemText = item.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036F]/g, '');
      const searchText = queryText.toLowerCase().normalize('NFD').replace(/[\u0300-\u036F]/g, '');
      return itemText.includes(searchText);
    },
    /* OBTENER ESPECIALIDADES */
    data_speciality(){
      this.$axios
        .get('/api/v1/catalogue/specialties' , {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((response) => {
          this.items = response.data.data
        })
    },


        /* OBTENER ESPECIALIDADES */
        getspecialty() {
      this.$axios
        .get('/api/v1/catalogue/specialties', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          this.items = res.data.data
          alert(res.data.data.data)
        })
    },

    generatePDF() {
  
      const doc = new JsPDF()

// It can parse html:
// <table id="my-table"><!-- ... --></table>
AutoTable(doc, { html: '#my-table' })

// Or use javascript directly:
AutoTable(doc, {
  head: [['Name', 'Email', 'Country']],
  body: [
    ['David', 'david@example.com', 'Sweden'],
    ['Castille', 'castille@example.com', 'Spain'],
    // ...
  ],
})

doc.save('table.pdf')
    },
  },
}
</script>


<style>
.text_welcome {
  color: blue;
  font-family: 'Montserrat', sans-serif;
}
</style>