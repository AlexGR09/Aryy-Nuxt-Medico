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
        <v-card-subtitle class="pa-3 mt-n2"
          >CONFIGURACIÓN DE HORARIOS </v-card-subtitle
        >
        <v-card-text class="pa-3">
          <v-row>
            <v-col md="7" lg="6" xl="6" cols="12">
              <p>Consultorio*</p>
              <v-autocomplete
                color="#7900ff"
                
                v-model="userId"
                :items="items"
                item-text="name"
                item-value="id"
                return-object
                class="textfield mt-n3"
                placeholder="Seleccione el consultorio"
                outlined
              ></v-autocomplete>  <!-- | {{ userId.id }} | -->
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
        <div>
        <v-btn-toggle borderless class="botones mb-n5 mt-n4">
          <v-checkbox
            v-model="lun"
            class="checkbox mr-5"
            color="#7900ff"
            label="Lun"
          ></v-checkbox>
          <v-checkbox
            v-model="mar"
            class="checkbox mr-5"
            color="#7900ff"
            label="Mar"
          ></v-checkbox>
          <v-checkbox
            v-model="mie"
            class="checkbox mr-5"
            color="#7900ff"
            label="Mie"
          ></v-checkbox>
          <v-checkbox
            v-model="jue"
            class="checkbox mr-5"
            color="#7900ff"
            label="Jue"
          ></v-checkbox>
          <v-checkbox
            v-model="vie"
            class="checkbox mr-5"
            color="#7900ff"
            label="Vie"
          ></v-checkbox>
          <v-checkbox
            v-model="sab"
            class="checkbox mr-5"
            color="#7900ff"
            label="Sab"
          ></v-checkbox>
          <v-checkbox
            v-model="dom"
            class="checkbox mr-5"
            color="#7900ff"
            label="Dom"
          ></v-checkbox>
        </v-btn-toggle>
      <v-col md="6" cols="12"></v-col>

      <!--  inputs para agregar los horarios desde un select | Genesis -->
      <v-col class="mb-n7 mt-n8" md="11" xl="6" cols="12">
        <v-row class="ml-0">
          <p class="mt-8">De</p>
          <v-col cols="11" sm="3" md="4" lg="4" xl="4">
            <v-autocomplete
            @change="sendMessage"
              v-model="initialhour"
              class="textfield"
              color="#9966ff"
              placeholder="08:00 AM"
              outlined
              :items="hours"
            ></v-autocomplete>
          </v-col>

          <p class="mt-8">A</p>
          <v-col cols="11" sm="3" md="4" lg="4" xl="4">
            <v-autocomplete
              v-model="endhour"
              class="textfield"
              color="#9966ff"
              placeholder="08:00 PM"
              outlined
              :items="hours"
            ></v-autocomplete>
          </v-col>
          <v-btn
            @click="hour = !hour"
            class="icono ml-n5 mt-5"
            color="#9966ff"
            text
            ><v-icon>mdi-plus-circle</v-icon></v-btn
          >
        </v-row>
        <v-row v-if="hour" class="ml-0 mt-n2">
          <p class="mt-8">De</p>
          <v-col cols="11" sm="3" xl="4">
            <v-select
              v-model="initialhour2"
              class="textfield"
              color="#9966ff"
              placeholder="08:00 AM"
              outlined
              :items="hours"
            ></v-select>
          </v-col>
          <span class="mt-8">A</span>
          <v-col cols="11" sm="3" xl="4">
            <v-select
              v-model="endhour2"
              class="textfield"
              color="#9966ff"
              placeholder="08:00 AM"
              outlined
              :items="hours"
            ></v-select>
          </v-col>
        </v-row> </v-col
      ><v-col md="1" lg="1" xl="1" class="mt-4"></v-col>
      <v-col>
        <v-row class="mb-n10" v-if="lun">
          <v-col class="mr-n10" xl="2"> <p class="weekday">Lun</p> </v-col>
          <v-col xl="11" class="mr-n10">
            <v-chip label v-if="(!initialhour)">No registrado</v-chip>
            <v-chip
              v-if="initialhour"
              @click:close="lun = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour }} a {{ endhour }}</span></v-chip
            >
            <v-chip
              v-if="(endhour2)"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour2 }} a {{ endhour2 }}</span></v-chip
            >
            <v-chip label v-if="!endhour2">No registrado</v-chip>
          </v-col>
          <!-- <v-col xl="3"  class="ml-n10"><v-chip>09:00 AM A 80:00 PM</v-chip></v-col> -->
          <v-col xl="5"></v-col>
        </v-row>

        <v-row class="mb-n10" v-if="mar">
          <v-col class="mr-n10" xl="2"> <p class="weekday">Mar</p> </v-col>
          <v-col xl="11" class="mr-n10">
            <v-chip label v-if="!inicio[0]">No registrado</v-chip>
            <v-chip
              v-if="inicio[0]"
              @click:close="chipMar = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio }} a {{ final }}</span></v-chip
            >
            <v-chip
              v-if="(final2[0]  && hour)"
              @click:close="chipMar2 = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio2 }} a {{ final2 }}</span></v-chip
            >
            <v-chip label v-if="!final2[0]">No registrado</v-chip></v-col
          >
          <v-col xl="5"></v-col>
        </v-row>

        <v-row class="mb-n10" v-if="mie">
          <v-col class="mr-n10" xl="2"> <p class="weekday">Mie</p> </v-col>
          <v-col xl="11" class="mr-n10">
            <v-chip label v-if="!inicio[0]">No registrado</v-chip>
            <v-chip
              v-if="inicio[0] "
              @click:close="chipMie = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio }} a {{ final }}</span></v-chip
            >
            <v-chip
              v-if="(final2[0]  && hour)"
              @click:close="chipMie2 = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio2 }} a {{ final2 }}</span></v-chip
            >
            <v-chip label v-if="!final2[0]">No registrado</v-chip></v-col
          >
          <v-col xl="5"></v-col>
        </v-row>

        <v-row class="mb-n10" v-if="jue">
          <v-col class="mr-n10" xl="2"> <p class="weekday">Jue</p> </v-col>
          <v-col xl="11" class="mr-n10">
            <v-chip label v-if="!inicio[0]">No registrado</v-chip>
            <v-chip
              v-if="inicio[0]"
              @click:close="chipJue = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio }} a {{ final }}</span></v-chip
            >
            <v-chip
              v-if="(final2[0]  && hour)"
              @click:close="chipJue2 = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio2 }} a {{ final2 }}</span></v-chip
            >
            <v-chip label v-if="!final2[0]">No registrado</v-chip></v-col
          >
          <v-col xl="5"></v-col>
        </v-row>

        <v-row class="mb-n10" v-if="vie">
          <v-col class="mr-n10" xl="2"> <p class="weekday">Vie</p> </v-col>
          <v-col xl="11" class="mr-n10">
            <v-chip label v-if="!inicio[0]">No registrado</v-chip>
            <v-chip
              v-if="inicio[0]"
              @click:close="chipVie = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio }} a {{ final }}</span></v-chip
            >
            <v-chip
              v-if="(final2[0]  && hour)"
              @click:close="chipVie2 = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio2 }} a {{ final2 }}</span></v-chip
            >
            <v-chip label v-if="!final2[0]">No registrado</v-chip></v-col
          >
          <v-col xl="5"></v-col>
        </v-row>

        <v-row class="mb-n10" v-if="sab">
          <v-col class="mr-n10" xl="2"> <p class="weekday">Sab</p> </v-col>
          <v-col xl="11" class="mr-n10">
            <v-chip label v-if="!inicio[0]">No registrado</v-chip>
            <v-chip
              v-if="inicio[0]"
              @click:close="chipSab = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio }} a {{ final }}</span></v-chip
            >
            <v-chip
              v-if="(final2[0]  && hour)"
              @click:close="chipSab2 = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio2 }} a {{ final2 }}</span></v-chip
            >
            <v-chip label v-if="!final2[0]">No registrado</v-chip>
          </v-col>
          <v-col xl="5"></v-col>
        </v-row>

        <v-row v-if="dom">
          <v-col class="mr-n10" xl="2"> <p class="weekday">Dom</p> </v-col>
          <v-col xl="11" class="mr-n10">
            <v-chip label v-if="!inicio[0]">No registrado</v-chip>
            <v-chip
              v-if="inicio[0]"
              @click:close="chipDom = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio }} a {{ final }}</span></v-chip
            >
            <v-chip
              v-if="(final2[0]  && hour)"
              @click:close="chipDom2 = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio2 }} a {{ final2 }}</span></v-chip
            >
            <v-chip label v-if="!final2[0]">No registrado</v-chip></v-col
          >
          <v-col xl="5"></v-col>
        </v-row>
        <v-btn color="#9966ff" class="ml-n13 mt-n7" @click="addDay" text>
          <span>Agregar horario</span></v-btn>
      </v-col>
   
  </div>
            
            </v-col>
          </v-row>
          <v-row >
            <v-col md="6" lg="5" xl="4" cols="12">
              <h1 class="">DURACIÓN DE LA CONSULTA</h1>
              <v-text-field
                color="#7900ff"
                v-model="consultation_length"
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
              <h1 class="mb-4">TIEMPO PARA MOSTRAR AGENDA </h1>
              <v-autocomplete
                :items="timeagenda"
                color="#7900ff"
                v-model="agenda"
                class="textfield "
                placeholder="4 semanas"
                outlined
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
              <v-row >
                <v-col xl="2" cols="12">
              <v-btn
              block
                @click="putFacility"
                height="50px"
                class="white--text save "
                color="#7900ff"
                large
                ><span class="white--text">Guardar cambios</span></v-btn
              ></v-col>
             
              <v-overlay :value="overlay">
                <v-alert
                  class="rounded-xl"
                  icon="mdi-check-circle"
                  color="green"
                  >Datos actualizados correctamente.</v-alert
                >
              </v-overlay>
            </v-row>
            </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>
<script>
  import Account from '../account.vue';
  import accountMenu from '../accountMenu.vue';
import menuPlanner from './menuPlanner.vue';
export default {
  components: {
     Account,menuPlanner,accountMenu
  },
  data() {
    return {
      parentmessage:'',
      userId:'',
      overlay:false,
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

      /*  v-models de los checkbox | Genesis */
      lun: false,
      mar: false,
      mie: false,
      jue: false,
      vie: false,
      sab: false,
      dom: false, 


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
      idfacility:'',
      day:'',
      attention: '',
      rest:'',
    }
  
  },
  
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false
        }, 3000)
    },
  },
  mounted() {
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
        this.idfacility = res.data.data.id
      })
    },

    putFacility() {
      this.addDay()
      this.days()
  this.$axios
    .put(
      `api/v1/schedule/facilities/${this.userId.id}`,
      {
        type_schedule: this.type_schedule,
      
        consultation_length: this.consultation_length,
        schedule:{
          free_days: ["2022-01-01","2022-02-02"],
          week: [
            {
              day: this.lunes,
              attention_time: this.attention,
              rest_hours: this.rest
            },
            {
              day: this.martes,
              attention_time: this.attention,
              rest_hours: this.rest
            },
            {
              day: this.miercoles,
              attention_time: this.attention,
              rest_hours: this.rest
            },
            {
              day: this.jueves,
              attention_time: this.attention,
              rest_hours: this.rest
            },
            {
              day: this.viernes,
              attention_time: this.attention,
              rest_hours: this.rest
            },
            {
              day: this.sabado,
              attention_time: this.attention,
              rest_hours: this.rest
            },
            {
              day: this.domingo,
              attention_time: this.attention,
              rest_hours: this.rest
            },
          ],
          
        }
    
      },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
    )
    .then((res) => {
      this.overlay=true
    })
},

       
  /* unir los horarios en una sola variable por turno  */
  addDay() {
     const rango1 = [this.initialhour, this.endhour2]
     const rango2 = [this.endhour, this.initialhour2]
     const turno1 = rango1.join(' a ')
     const turno2 = rango2.join(' a ')
     this.attention=turno1
     this.rest=turno2
    },
   /*  mandar los dias en ingles */
    days(){
      if(this.lun===true){this.lunes='monday'}
      if(this.mar===true){this.martes='tuesday'}
      if(this.mie===true){this.miercoles='wednesday'}
      if(this.jue===true){this.jueves='thursday'}
      if(this.vie===true){this.viernes='friday'}
      if(this.sab===true){this.sabado='saturday'}
      if(this.dom===true){this.domingo='sunday'}
    },
    sendMessage() {
                this.test = this.endhour
            },

    addInput() {
      this.inputs.push({
        id: `fruit${++this.counter}`,
        label: 'Enter Fruit Name',
        value: '',
      })
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
.v-card__subtitle{
    font-family: MontserratBold !important;
    font-size: 110% !important;
  }
  .v-icon.icono{
    border: 0px !important;
  }
</style>



