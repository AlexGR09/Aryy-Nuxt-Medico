<template>
  <v-row>
    <v-col md="12" lg="11" xl="10">
      <v-card flat class="pa-3 mt-2">
        <v-card-subtitle class="pa-3 mb-n5 mt-n2"
          ><H1 class="mb-5">CONFIGURACIÓN DE HORARIOS</H1></v-card-subtitle
        >
        <v-card-text class="pa-3">
          <v-row>
            <v-col md="7" lg="6" xl="6" cols="12">
              <span>Consultorio*</span>
              <v-autocomplete
              color="#7900ff"
                v-model="facility_name"
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
                class="textfield"
                placeholder="Permanente"
                outlined
              ></v-autocomplete>
            </v-col>
            <v-col md="5" cols="12"></v-col>
            <v-col md="6" cols="12">
              <h1 class="mt-4 mb-4">HORARIOS DE CONSULTA</h1>
              <v-btn-toggle borderless class="botones mb-n5 mt-n4">
                <v-checkbox
                  v-model="lun"
                  class="checkbox"
                  color="#7900ff"
                  label="Lun"
                ></v-checkbox
                ><v-checkbox
                  v-model="mar"
                  class="ml-8 checkbox"
                  color="#7900ff"
                  label="Mar"
                ></v-checkbox
                ><v-checkbox
                  color="#7900ff"
                  v-model="mie"
                  class="ml-8 checkbox"
                  label="Mie"
                ></v-checkbox>
                <v-checkbox
                  v-model="jue"
                  color="#7900ff"
                  class="ml-8 checkbox"
                  label="Jue"
                ></v-checkbox>
                <v-checkbox
                  color="#7900ff"
                  v-model="vie"
                  class="ml-8 checkbox"
                  label="Vie"
                ></v-checkbox
                ><v-checkbox
                  v-model="sab"
                  color="#7900ff"
                  class="ml-8 checkbox"
                  label="Sab"
                ></v-checkbox
                ><v-checkbox
                  v-model="dom"
                  color="#7900ff"
                  class="ml-8 checkbox"
                  label="Dom"
                ></v-checkbox>
              </v-btn-toggle>
            </v-col>
            <v-col md="6" cols="12"></v-col>
            
            <v-col class="mb-n7" md="11" cols="12">
              <v-row class="ml-0" >
      <span class="mt-8">De</span>
      <v-col cols="11" sm="3" xl="3">
        <v-dialog
          ref="dialog"
          v-model="modal2"
          :return-value.sync="time"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              color="#7900ff"
              class="textfield mb-3"
              outlined
              v-model="time"
              placeholder="08:00 AM"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker  color="#9966ff" :max="time2" v-if="modal2" v-model="time" full-width>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal2 = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.dialog.save(time)">
              OK
            </v-btn>
          </v-time-picker>
        </v-dialog>
      </v-col>

      <span class="mt-8">A</span>
      <v-col cols="11" sm="3" xl="3">
        <v-dialog
          ref="dialog2"
          v-model="modal"
          :return-value.sync="time2"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
            color="#9966ff"
            class="textfield mb-4"
              outlined
              v-model="time2"
              placeholder="08:00 AM"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker  color="#9966ff" :end="time" v-if="modal" v-model="time2" full-width>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.dialog2.save(time2)">
              OK
            </v-btn>
          </v-time-picker>
        </v-dialog>
      </v-col>
      <v-btn  @click="hour = !hour" class="btn ml-n5 mt-5" color="#9966ff" text
        ><v-icon class="icon">mdi-plus-circle</v-icon></v-btn
      >
    </v-row>
    <hour-picker v-if="hour"  />
    </v-col
            ><v-col md="1" lg="1" xl="1" class=" mt-4"></v-col>
            
            <v-row class="mt-3 ml-2">
              <v-col md="1" lg="1" xl="1">
                <p class="mt-1 weekday">Lun</p>
                <p class="mt-9 weekday">Mar</p>
                <p class="mt-8 weekday">Mie</p>
                <p class="mt-8 weekday">Jue</p>
                <p class="mt-9 weekday">Vie</p>
                <p class="mt-9 weekday">Sáb</p>
              </v-col>
              <v-col md="11" lg="11" xl="11">
                <v-col class="ml-n13 mt-n2"  md="10" lg="10" xl="10">
                  <v-chip label v-if="!chipLun">No registrado</v-chip>
                  <v-chip label v-if="!chipLun2">No registrado</v-chip>
                  <v-chip
                    v-if="chipLun"
                    @click:close="chipLun = false"
                    close-icon="mdi-close"
                    style="border: thin solid #7900ff"
                    color="#f4edff"
                    label
                    close
                    ><span class="hour">09:00 AM a 03:00 PM</span></v-chip
                  >
                  <v-chip
                    v-if="chipLun2"
                    @click:close="chipLun2 = false"
                    close-icon="mdi-close"
                    style="border: thin solid #7900ff"
                    color="#f4edff"
                    label
                    close
                    ><span class="hour">04:00 PM a 08:00 PM</span></v-chip
                  >
                  
                </v-col>
                <v-col md="7" lg="7" xl="7"></v-col>

                <v-col class="ml-n13 mt-n6"  md="10" lg="10" xl="10">
                  <v-chip label v-if="!chipMar">No registrado</v-chip>
                  <v-chip label v-if="!chipMar2">No registrado</v-chip>
                  <v-chip
                    v-if="chipMar"
                    @click:close="chipMar = false"
                    close-icon="mdi-close"
                    style="border: thin solid #7900ff"
                    color="#f4edff"
                    label
                    close
                    ><span class="hour">09:00 AM a 03:00 PM</span></v-chip
                  >
                  <v-chip
                    v-if="chipMar2"
                    @click:close="chipMar2 = false"
                    close-icon="mdi-close"
                    style="border: thin solid #7900ff"
                    color="#f4edff"
                    label
                    close
                    ><span class="hour">04:00 PM a 08:00 PM</span></v-chip
                  >
                </v-col> <v-col md="7" lg="7" xl="7"></v-col>

                <v-col class="ml-n13 mt-n6"  md="10" lg="10" xl="10">
                  <v-chip label v-if="!chipMie">No registrado</v-chip>
                  <v-chip label v-if="!chipMie2">No registrado</v-chip>
                  <v-chip
                    v-if="chipMie"
                    @click:close="chipMie = false"
                    close-icon="mdi-close"
                    style="border: thin solid #7900ff"
                    color="#f4edff"
                    label
                    close
                    ><span class="hour">09:00 AM a 03:00 PM</span></v-chip
                  >
                  <v-chip
                    v-if="chipMie2"
                    @click:close="chipMie2 = false"
                    close-icon="mdi-close"
                    style="border: thin solid #7900ff"
                    color="#f4edff"
                    label
                    close
                    ><span class="hour">04:00 PM a 08:00 PM</span></v-chip
                  >
             
                </v-col>
                <v-col md="7" lg="7" xl="7"></v-col>

                <v-col class="ml-n13 mt-n6" md="10" lg="10" xl="10">
                  <v-chip label v-if="!chipJue">No registrado</v-chip>
                  <v-chip label v-if="!chipJue2">No registrado</v-chip> 
                  <v-chip
                    v-if="chipJue"
                    @click:close="chipJue = false"
                    close-icon="mdi-close"
                    style="border: thin solid #7900ff"
                    color="#f4edff"
                    label
                    close
                    ><span class="hour">09:00 AM a 03:00 PM</span></v-chip
                  >
                  <v-chip
                    v-if="chipJue2"
                    @click:close="chipJue2 = false"
                    close-icon="mdi-close"
                    style="border: thin solid #7900ff"
                    color="#f4edff"
                    label
                    close
                    ><span class="hour">04:00 PM a 08:00 PM</span></v-chip
                  >
                 </v-col
                > <v-col md="7" lg="7" xl="7"></v-col>
                <v-col class="ml-n13 mt-n6"  md="10" lg="10" xl="10">
                  <v-chip label v-if="!chipVie">No registrado</v-chip>
                  <v-chip label v-if="!chipVie2">No registrado</v-chip>
                  <v-chip
                    v-if="chipVie"
                    @click:close="chipVie = false"
                    close-icon="mdi-close"
                    style="border: thin solid #7900ff"
                    color="#f4edff"
                    label
                    close
                    ><span class="hour">09:00 AM a 03:00 PM</span></v-chip
                  >
                  <v-chip
                    v-if="chipVie2"
                    @click:close="chipVie2 = false"
                    close-icon="mdi-close"
                    style="border: thin solid #7900ff"
                    color="#f4edff"
                    label
                    close
                    ><span class="hour">04:00 PM a 08:00 PM</span></v-chip
                  >
                   </v-col
                > <v-col md="7" lg="7" xl="7"></v-col>
                <v-col class="ml-n13 mt-n6"  md="10" lg="10" xl="10">
                  <v-chip label v-if="!chipSab">No registrado</v-chip>
                  <v-chip label v-if="!chipSab2">No registrado</v-chip>
                  <v-chip
                    v-if="chipSab"
                    @click:close="chipSab = false"
                    close-icon="mdi-close"
                    style="border: thin solid #7900ff"
                    color="#f4edff"
                    label
                    close
                    ><span class="hour">09:00 AM a 03:00 PM</span></v-chip
                  >
                  <v-chip
                    v-if="chipSab2"
                    @click:close="chipSab2 = false"
                    close-icon="mdi-close"
                    style="border: thin solid #7900ff"
                    color="#f4edff"
                    label
                    close
                    ><span class="hour">04:00 PM a 08:00 PM</span></v-chip
                  >
                   </v-col
                > <v-col md="7" lg="7" xl="7"></v-col>
              </v-col>
            </v-row>
          </v-row>
          <v-row class="mt-5">
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
</template>
<script>
import HourPicker from '~/components/hourPicker.vue';
export default {
  components: {HourPicker},
  data() {
    return {
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
     lun: '',
     mar: '',
     mie: '',
     jue: '',
     vie: '',
     sab: '',
     dom: '',

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
    }
  },
  methods: {
    addInput() {
      this.inputs.push({
        id: `fruit${++this.counter}`,
        label: 'Enter Fruit Name',
        value: '',
      });
    },
    getFacility() {
      this.$axios
        .post('/api/v1/physician/facility', {
          facility_name: this.facility_name,
           /* location: [
            {
              address: this.address,
              number_ext: this.number_ext,
              number_int: this.number_int,
              reference: this.reference,
            }
          ], 
          phone_number: this.phone_number,
          zip_code: this.zip_code, */
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
        /*   accessibility_and_others: [
            {
              accessibility:[
                {
                  parking_with_access_to_the_establishment: this.parking,
                  wheelchair_lift_or_ramp: this.lift,
                  toilets_with_wheelchair_access: this.restroom,
                  rest_area_with_wheelchair_access: this.area,
                  staff_trained_in_sign_language: this.sign,
                  braille_signage_for_blind_people: this.braille,
                }
              ],
              usual_audiences:[
                {
                  lgtb_friendly: this.lgbt,
                  safe_space_for_transgender_people: this.trans,
                }
              ],
              services:[
                {
                  toilets: this.toilets,
                  unisex_toilets: this.unisex,
                  wifi: this.wifi,
                }
              ],
            }
          ],
           clues: this.biography,
          city_id: this.biography,  */
        })
        .then((response) => {
          console.log(response.data.data)
          localStorage.setItem('token',response.data.access_token)
        })
        .catch((error) => {
          /*   alert(error.response.data.errors.email) */
          this.errormail = ''
          this.errormail = error.response.data.errors.email[0]
          this.password_error=""
          this.password_error = error.response.data.errors.password[0]
        })
    },
    putFacility() {
      this.$axios
        .put('/api/v1/physician', {
         
        })
        .then((response) => {
          console.log(response.data.data)
          localStorage.setItem('token',response.data.access_token)
        })
        .catch( 
          console.log("error")
        )
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
.chip{
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