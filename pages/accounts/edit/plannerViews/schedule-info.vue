<template>
  <div>
    <v-breadcrumbs class="breadcrumbs ml-n7" :items="breadcrumbs">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
              <v-icon size="22" color="#7900ff">{{ item.icon }}</v-icon>
              <span class="breadcrumbs">{{ item.text }}</span>
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
    <account v-if="$vuetify.breakpoint.lgAndUp"/>
    <v-row>
       <v-row>
          <menu-planner v-if="$vuetify.breakpoint.lgAndUp"/>
        </v-row>
      <v-col cols="12" md="10" lg="10" xl="11">
        <account-menu v-if="$vuetify.breakpoint.smAndDown"/>
      <v-card color="card" flat class="pa-3 mt-2">
        <v-card-subtitle class="pa-3 mb-n5 mt-n2"
          ><H1 class="mb-5">CONFIGURACIÓN DE HORARIOS</H1></v-card-subtitle
        >
        <v-card-text class="pa-3">
          <v-row>
            <v-col md="7" lg="6" xl="6" cols="12">
              <span>Consultorio*</span>
              <v-autocomplete
                color="#7900ff"
                v-model="dbSelect"
                    :items="items"
                    item-text="name"
                    item-value="specialty_id"
                class="textfield"
                placeholder="Seleccione el consultorio"
                outlined
              ></v-autocomplete>
            </v-col>
            <v-col md="5" lg="6" xl="6" cols="12"></v-col>
            <v-col md="7" lg="6" xl="6" cols="12">
              <h1 class="mt-4 mb-4">TIPO DE HORARIO</h1>
              <v-autocomplete
                color="#7900ff"
                v-model="type_schedule"
                :items="type"
                class="textfield"
                placeholder="Permanente"
                outlined
              ></v-autocomplete>
            </v-col>
            <v-col class="mb-n7" md="11" cols="12">
        <h1 class="mt-4 mb-4">HORARIOS DE CONSULTA</h1>
            <bussines-hour/>
            </v-col>
          </v-row>
          <v-row >
            <v-col md="6" lg="5" xl="4" cols="12">
              <h1 class="">DURACIÓN DE LA CONSULTA</h1>
              <v-text-field
                color="#7900ff"
                v-model="attention_time"
                class="textfield"
                placeholder="XX"
                outlined
              ></v-text-field> </v-col
            ><v-col md="2" lg="2" xl="2">
              <p class="text mt-9 ml-n4">minutos</p> </v-col
            ><v-col md="6" cols="12"></v-col>
          </v-row>
          <v-row>
            <v-col md="6" lg="5" xl="4" cols="12">
              <h1 class="mb-4">TIEMPO PARA MOSTRAR AGENDA</h1>
              <v-autocomplete
                :items="timeagenda"
                color="#7900ff"
                v-model="consultation_length"
                class="textfield mb-10"
                placeholder="4 semanas"
                outlined
              ></v-autocomplete>
            </v-col>
          </v-row>

          <v-btn height="50px" class="white--text save" color="#7900ff" large
            >Guardar cambios</v-btn
          >
          <v-btn
            height="50px"
            class="restore ml-3"
            color="#999999"
            outlined
            large
            >Restaurar todo</v-btn
          >
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>
<script>
  import Account from '../account.vue';
  import accountMenu from '../accountMenu.vue';
import bussinesHour from './bussinesHour.vue'
import menuPlanner from './menuPlanner.vue'
export default {
  components: {
    bussinesHour, Account,menuPlanner,accountMenu
  },
  data() {
    return {
      
      type: ['Permanente','Temporal'],
      dias: [],
      inicio: [],
      final: [],
      inicio2: [],
      final2: [],
      consultation_length: '',
      facility_name: '',
      type_schedule: '',
      initialhour: '',
      endhour: '',
      initialhour2: '',
      endhour2: '',
      attention_time: '',
      /* valores de los chips de horario | Genesis */
      chipLun: true,
      chipMar: true,
      chipMie: true,
      chipJue: true,
      chipVie: true,
      chipSab: true,
      chipLun2: true,
      chipMar2: true,
      chipMie2: true,
      chipJue2: true,
      chipVie2: true,
      chipSab2: true,

      /*  v-models de los checkbox | Genesis */
      lun: false,
      mar: false,
      mie: false,
      jue: false,
      vie: false,
      sab: false,
      dom: false, 

      days: [
        { value: 0, name: 'Lun' },
        { value: 1, name: 'Mar' },
        { value: 2, name: 'Mie' },
        { value: 3, name: 'Jue' },
        { value: 4, name: 'Vie' },
        { value: 5, name: 'Sab' },
        { value: 6, name: 'Dom' },
      ],

      hours: [
        '01:00 AM', '01:30 AM', '02:00 AM', '02:30 AM',  '03:00 AM',  '03:30 AM',  '04:00 AM', '04:30 AM', '05:00 AM', '05:30 AM', '06:00 AM', '06:30 AM', '07:00 AM', '07:30 AM', '08:00 AM',
        '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:00 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
        '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM', '10:30 PM', '11:00 PM',
        '11:30 PM', '12:00 AM',
      ],
      inputs: [
        {
          name: '',
        },
      ],
      hour: false,
      visible: false,
      time: null,
      menu2: false,
      modal2: false,
      time2: null,
      menu: false,
      modal: false,
      selectedItem: 1,
      facilities: [],
      dbSelect : '',
        items : [],
      timeagenda: ['4 Semanas'],

      breadcrumbs: [
        {
          icon: 'mdi-home-outline',
          disabled: false,
          href: '/',
        },
        {
          text: 'Agenda',
          disabled: false,
          href: '/accounts/edit/planner-info',
        },
        {
          text: 'Horarios',
          disabled: true,
          href: '/accounts/edit/plannerViews/schedule-info',
        },
      ],
    }
  },
  mounted() {
          console.log('verificando');
          this.getspecialty();
      },
  methods: {
    getspecialty() {
      this.$axios
      .get('/api/v1/facilities',{
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
      })
      .then(res => {
        console.log(res)
        this.items= res.data.data
        console.log(res.data.data.name)
      })
    },
    addDay() {
      const initialHour = [this.initialhour]
      const hourInitial = initialHour.join()
      this.inicio = hourInitial
      const endHour = [this.endhour]
      const hourFinal = endHour.join()
      this.final = hourFinal

      const initialHour2 = [this.initialhour2]
      const hourInitial2 = initialHour2.join()
      this.inicio2 = hourInitial2
      const endHour2 = [this.endhour2]
      const hourFinal2 = endHour2.join()
      this.final2 = hourFinal2
    },
    addInput() {
      this.inputs.push({
        id: `fruit${++this.counter}`,
        label: 'Enter Fruit Name',
        value: '',
      })
    },
    getFacilityy() {
        this.$axios
          .get('api/v1/facilities', {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
          })
          .then((res) => {
            this.items=res.data.data[0].name
            console.log(res)
            console.log('exito en GET')
            this.facilities = res.data.data
            this.consultorios = res.data.data.length
            this.horas = res.data.data[0].schedule.lenght
            this.name = res.data.data[0].name
            this.address = res.data.data[0].location.address
            this.number_ext = res.data.data[0].location.number_ext
            this.number_int = res.data.data[0].location.number_int
            this.state = res.data.data[0].location.state
            this.suburb = res.data.data[0].location.suburb
            this.reference = res.data.data[0].location.reference
            this.phone = res.data.data[0].phone
            this.zipcode = res.data.data[0].zipcode
  
          })
      },
    getFacility() {
      this.$axios
        .post('/api/v1/physician/facility', {
          facility_name: this.facility_name,  
          schedule: [
            {
              day: this.lun,
              attention_time: this.attention_time,
            },
            {
              day: this.mar,
              attention_time: this.modal2,
            },
          ],
          type_schedule: this.type_schedule,
          consultation_length: this.consultation_length,
        })
        .then((response) => {
          console.log(response.data.data)
          localStorage.setItem('token', response.data.access_token)
        })
    },
    putFacility() {
      this.$axios
        .put('/api/v1/physician', {})
        .then((response) => {
          console.log(response.data.data)
          localStorage.setItem('token', response.data.access_token)
        })
        .catch(console.log('error'))
    },
    save(time) {
      this.$refs.dialog[0].save(time)
    },
    add(index) {
      this.inputs.push({ name: '' })
    },
    remove(index) {
      this.inputs.splice(index, 1)
    },
  },
}
</script>

<style>
.btnhour{
  font-family: Montserrat;
  color: #9966ff;
  text-transform: capitalize;
}
.chip {
  font-size: 10%;
}
p.weekday {
  font-family: MontserratBold;
  color: black;
}
span.hour {
  font-family: Montserrat;
  color: #7900ff;
  font-size: 100%;
}
.checkbox {
  font-family: Montserrat;
}
.text {
  font-family: MontserratMedium;
  color: black;
}
.bgactive {
  background: #7900ff;
  color: white !important;
  fill: white !important;
}
.list-item {
  margin-top: 1em;
}
.titlee {
  font-family: 'MontserratMedium', sans-serif;
  font-size: 15px;
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
a {
  text-decoration: none !important;
}
.save {
  font-family: Montserrat;
  text-transform: unset !important;
}
.restore {
  font-family: Montserrat;
  text-transform: unset !important;
}
.btn {
  font-family: Montserrat;
  text-transform: unset !important;
  color: #9966ff;
}
.textfield {
  height: 50px;
  width: 100%;
  font-size: 0.9rem;
  font-family: Montserrat;
}
H1 {
  font-family: MontserratMedium;
  font-size: 120%;
  color: #4f565f;
}
span {
  font-family: Montserrat;
  font-size: 120%;
}
</style>