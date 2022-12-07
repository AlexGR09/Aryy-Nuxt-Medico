<template>
  <div>
    <v-card height="100%" flat class="pa-16">
      <v-card-text class="pa-16 ml-10">
        <v-row class="ml-16">
          <v-form class="ml-16" ref="form" v-model="valid">
            <v-col md="1" lg="1" xl="1"></v-col>
            <v-col md="10" lg="10" xl="10">
              <v-row>
                <v-col md="12" cols="12">
                  <span>Nombre del consultorio*</span>
                  <v-text-field
                    prepend-inner-icon="mdi-magnify"
                    v-model="facility_name"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Nombre del consultorio"
                    outlined
                  ></v-text-field>
                  <v-input class="input mb-n9 mt-4"
                    ><v-icon class="mr-3" color="#9966ff" size="15px"
                      >mdi-information</v-icon
                    >Realizaremos una búsqueda de tu establecimiento en Google,
                    si no aparece puedes agregarlo desde aqui.</v-input
                  >
                </v-col>
                <v-row v-for="input in inputs" :key="input.id" class="ml-1 mt-2">
                <v-col md="6" cols="12">
                  <span>Teléfono para citas*</span>
                  <v-text-field :for="input.id"
                    v-model="phone_number"
                    color="#9966ff"
                    class="textfield mb-5"
                    placeholder="XXX XXX XXXX"
                    outlined
                  ></v-text-field>
                  <v-btn @click="addInput" class="btn ml-n5 mt-n5" color="#9966ff" text
                    ><v-icon class="icon">mdi-plus-circle</v-icon>Agregar otro
                    número</v-btn
                  >
                  <v-col class="mb-n7" md="11" cols="12">
        <p class="mt-4 mb-4 span">Horario para recepción de llamadas*</p>
            <bussines-hour/>
            </v-col>
                  
                </v-col>
                <v-col md="6" cols="12">
                  <span>Extensión</span>
                  <v-text-field :for="input.id"
                    v-model="extension"
                    color="#9966ff"
                    class="textfield"
                    placeholder="No. Extensión"
                    outlined
                  ></v-text-field>
                  
                </v-col>
              </v-row>
                <v-col md="4" cols="12">
                  <span>Código postal*</span>
                  <v-text-field
                    v-model="zip_code"
                    color="#9966ff"
                    maxlength="5"
                    counter="5"
                    class="textfield"
                    placeholder="00000"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col md="4" cols="12">
                  <span>Estado*</span>
                  <v-text-field
                    v-model="state"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Estado"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col md="4" cols="12">
                  <span>Ciudad o Municipio*</span>
                  <v-text-field
                    v-model="city"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Ciudad o Municipio"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col md="4" cols="12">
                  <span>Colonia*</span>
                  <v-text-field
                    v-model="suburb"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Selecciona una colonia"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col md="8" cols="12">
                  <span>Ubicación*</span>
                  <v-text-field
                    v-model="address"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Escribe la calle avenida"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col md="4" cols="12">
                  <span>Número exterior*</span>
                  <v-text-field
                    v-model="number_ext"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Número exterior"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col md="4" cols="12">
                  <span>Número interior</span>
                  <v-text-field
                    v-model="number_int"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Número interior"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col md="4" cols="12">
                  <span>Referencias*</span>
                  <v-text-field
                    v-model="reference"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Escribe referencias de la ubicación"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="coordinates"
                    color="#9966ff"
                    class="textfield"
                    placeholder="coordenada"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col md="6" lg="6" xl="6">
                  <H1 class="mb-5">ACCESIBILIDAD</H1>
                  <v-checkbox
                    v-model="parking"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Estacionamiento con acceso al establecimiento"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="lift"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Ascensor con acceso para silla de ruedas"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="ramp"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Rampa con acceso para silla de ruedas"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="restroom"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Sanitarios con accesos para silla de ruedas"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="area"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Área de descanso con acceso para silla de ruedas"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="sign"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Personal capacitado en lengua de señas"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="braille"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Señaletica con braile para personas invidentes"
                  ></v-checkbox>
                </v-col>
                <v-col md="6" lg="6" xl="6">
                  <H1 class="mb-5">PÚBLICOS USUALES</H1>
                  <v-checkbox
                    v-model="lgbt"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Amigable con la comunidad LGBTQ+"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="trans"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Espacio seguro para personas transgénero"
                  ></v-checkbox>
                  <H1 class="mb-5 mt-15">SERVICIOS</H1>
                  <v-checkbox
                    v-model="toilets"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Sanitarios"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="unisex"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Sanitario unisex"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="wifi"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Wi-Fi"
                  ></v-checkbox>
                </v-col>
                <div class="mt-5 mb-n15">
                  <v-btn
                  v-on:click="Savefacility"
                    @click="overlay = !overlay"
                    height="50px"
                    class="white--text save"
                    color="#7900ff"
                    large
                    >Guardar cambios</v-btn
                  >
                  <v-btn
                    @click="reset"
                    height="50px"
                    class="restore ml-3"
                    color="#999999"
                    outlined
                    large
                    >Restaurar todo</v-btn
                  >
                  <v-overlay :value="overlay">
                    <v-alert
                      class="rounded-xl"
                      icon="mdi-check-circle"
                      color="green"
                      >Datos actualizados correctamente.</v-alert
                    >
                  </v-overlay>
                </div>
              </v-row>
            </v-col>
            <v-col xl="1"></v-col>
          </v-form>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import bussinesHour from './bussinesHour.vue'
export default {
  components:{
    bussinesHour,
  },
  data() {
    return {
      valid: '',

      facility_name: '',
      phone_number: '',
      extension: '',
      zip_code: '',
      state: '',
      city: '',
      suburb: '',
      address: '',
      number_ext: '',
      number_int: '',
      reference: '',
      parking: false,
      lift: false,
      ramp: false,
      restroom: false,
      area: false,
      sign: false,
      braille: false,
      lgbt: false,
      trans: false,
      toilets: false,
      unisex: false,
      wifi: false,
      coordinates: '',
      horas: '',
      name: '',
      day: '',
      
  



      inputs: [
        {
          name: '',
        },
      ],
      overlay: false,
      dialog: false,
      selectedItem: 1,
      time: null,
      menu2: false,
      modal2: false,
      lun: '',
      mar: '',
      mie: '',
      jue: '',
      vie: '',
      sab: '',
      dom: '',
    }
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false
        }, 2000)
    },
  },
  mounted() {
    console.log('verificando')
  },
  methods: {
     /*    método post para añadir un consultorio | Genesis */
     Savefacility() {
    this.$axios
      .post('api/v1/facilities/full', {
        name: this.facility_name,
        location: 
          {
            address: this.address,
            state: this.state,
            suburb: this.suburb,
            number_ext: this.number_ext,
            number_int: this.number_int,
            reference: this.reference,
          }
        ,
        coordinates: this.coordinates,
        phone: this.phone_number,
        extension: this.extension,
        zipcode: this.zip_code,
        schedule: [
          {
            day: this.lun,
            attention_time: this.attention_time,
          },
          {
            day: this.mar,
            attention_time: this.attention_time,
          },
          {
            day: this.mie,
            attention_time: this.attention_time,
          },
          {
            day: this.jue,
            attention_time: this.attention_time,
          },
          {
            day: this.vie,
            attention_time: this.attention_time,
          },
          {
            day: this.sab,
            attention_time: this.attention_time,
          },
          {
            day: this.dom,
            attention_time: this.attention_time,
          },
          
        ],
        accessibility_and_others: 
          {
            accessibility:
              {
                parking_with_access_to_the_establishment: this.parking,
                wheelchair_lift_or_ramp: this.lift,
                toilets_with_wheelchair_access: this.restroom,
                rest_area_with_wheelchair_access: this.area,
                staff_trained_in_sign_language: this.sign,
                braille_signage_for_blind_people: this.braille,
              }
            ,
            usual_audiences:
              {
                lgtb_friendly: this.lgbt,
                safe_space_for_transgender_people: this.trans,
              }
            ,
            services:
              {
                toilets: this.toilets,
                unisex_toilets: this.unisex,
                wifi: this.wifi,
              }
            ,
          }
        ,
      })
      .then((response) => {
        console.log(response.data.data)
        localStorage.setItem('token',response.data.access_token)
      })
      .catch((error) => {
        /*   alert(error.response.data.errors.email) */
        console.log(error)
        this.errormail = ''
        this.errormail = error.response.data.errors.email[0]
        this.password_error=""
        this.password_error = error.response.data.errors.password[0]
      })
  },
    save(start, end) {
      this.$refs.dialog[0].save(start, end)
    },
    add(index) {
      this.inputs.push({ name: '' })
    },
    remove(index) {
      this.inputs.splice(index, 1)
    },
    reset() {
      this.$refs.form.reset()
    },
    addInput() {
      this.inputs.push({
        id: `fruit${++this.counter}`,
        label: 'Enter Fruit Name',
        value: '',
      });
    },
  },
}
</script>

<style>
.text {
  font-family: Montserrat;
  color: grey;
}
.vcheckbox {
  font-family: Montserrat;
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
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
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
  font-family: MontserratBold;
  font-size: 120%;
}
span {
  font-family: Montserrat;
  font-size: 120%;
}
p.span {
  font-family: Montserrat;
  font-size: 120%;
}
.v-input__icon--prepend-inner .v-icon {
  color: #999999;
  width: 50px;
}
.input {
  margin-top: 5px;
  color: #9966ff !important;
  font-family: MontserratMedium;
  font-size: 100%;
}
</style>