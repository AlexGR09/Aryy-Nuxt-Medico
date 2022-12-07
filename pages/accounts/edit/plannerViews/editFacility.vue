<template>
    <div>
      <v-card height="100%" flat class="pa-16">
        <v-card-text class="pa-16">
          <v-row class="ml-16">
            <v-form class="ml-16" ref="form" v-model="valid">
              <v-col md="1" lg="1" xl="1"></v-col>
              <v-col md="10" lg="10" xl="10">
                <v-row>
                  <v-col md="12" cols="12">
                    <span>Nombre del consultorio editar*</span>
                    <v-text-field
                      prepend-inner-icon="mdi-magnify"
                      v-model="name"
                      color="#9966ff"
                      class="textfield"
                      placeholder="Nombre del consultorio"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col md="6" cols="12">
                    <span>Teléfono para citas*</span>
                    <v-text-field
                      v-model="phone"
                      color="#9966ff"
                      class="textfield mb-5"
                      placeholder="XXX XXX XXXX"
                      outlined
                    ></v-text-field>
                    <span >Horario para recepción de llamadas*</span>
                    <div
                      class="form-group mb-9"
                      v-for="(input, k) in inputs"
                      :key="k"
                    >
                      <v-row class="mt-2 mb-n15">
                        <v-col xl="12">
                          <p class="weekday">
                            {{ lun }}
                            <v-chip
                              class="ml-5"
                              style="border: thin solid #7900ff"
                              color="#f4edff"
                              label
                              >{{ timeLun }}</v-chip
                            >
                          </p>
                          <p class="weekday" v-if="mar">
                            {{ mar }}
                            <v-chip
                              class="ml-3"
                              style="border: thin solid #7900ff"
                              color="#f4edff"
                              label
                              >{{ timeMar }}</v-chip
                            >
                          </p>
                          <p class="weekday" v-if="mie">
                            {{ mie }}
                            <v-chip
                              style="border: thin solid #7900ff"
                              color="#f4edff"
                              label
                              v-if="mie"
                              >{{ timeMie }}</v-chip
                            >
                          </p>
                          <p class="weekday" v-if="jue">
                            {{ jue }}
                            <v-chip
                              style="border: thin solid #7900ff"
                              color="#f4edff"
                              label
                              v-if="jue"
                              >{{ timeJue }}</v-chip
                            >
                          </p>
                          <p class="weekday" v-if="vie">
                            {{ vie }}
                            <v-chip
                              style="border: thin solid #7900ff"
                              color="#f4edff"
                              label
                              v-if="vie"
                              >{{ timeVie }}</v-chip
                            >
                          </p>
                          <p class="weekday" v-if="sab">
                            {{ sab }}
                            <v-chip
                              style="border: thin solid #7900ff"
                              color="#f4edff"
                              label
                              v-if="sab"
                              >{{ timeSab }}</v-chip
                            >
                          </p>
                          <p class="weekday" v-if="dom">
                            {{ dom }}
                            <v-chip
                              style="border: thin solid #7900ff"
                              color="#f4edff"
                              label
                              v-if="dom"
                              >{{ timeDom }}</v-chip
                            >
                          </p>
                        </v-col>
                      </v-row>
                    </div>
                  </v-col>
                  <v-col md="6" cols="12">
                    <span>Extensión</span>
                    <v-text-field
                      v-model="extension"
                      color="#9966ff"
                      class="textfield"
                      placeholder="No. Extensión"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <!--  <span>Horario para recepción de llamadas*</span> -->
                  <v-col md="4" cols="12">
                    <span>Código postal*</span>
                    <v-text-field
                      v-model="zipcode"
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
                  </div>
                  <div class="mt-5 mb-n15">
                  <v-btn
                  v-on:click="facility"
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
  export default {
    components: {
    },
    data() {
      return {
        lun: '',
      mar: '',
      mie: '',
      jue: '',
      vie: '',
      sab: '',
      dom: '',
      timeLun: '',
      timeMar: '',
      timeMie: '',
      timeJue: '',
      timeVie: '',
      timeSab: '',
      timeDom: '',
      horas: '',
      name: '',
      day: '',
      extension: '',
      city: '',
      
      parking: false,
      lift: false,
      ramp: false,
      restroom: false,
      area:false,
      sign: false,
      braille: false,

      lgbt: false,
      trans: false,
      toilets: false,

      unisex: false,
      wifi: false,
  
        attention_time: '',
        address: '',
        number_ext: '',
        number_int: '',
        state: '',
        facilities: [],
        phone: '',
        zipcode: '',
        suburb: '',
        reference: '',
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
      this.getFacility()
      this.facility()    },
    methods: {
      /*  metodo get para recibir datos de establecimiento | Genesis */
      getFacility() {
        console.log('creando petición GET')
        this.$axios
          .get('api/v1/facilities', {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
          })
          .then((res) => {
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
  
            this.lun = res.data.data[0].schedule[0].day
            this.timeLun = res.data.data[0].schedule[0].attention_time
            this.mar = res.data.data[1].schedule[1].day
            this.timeMar = res.data.data[1].schedule[1].attention_time
            this.mie = res.data.data[2].schedule[2].day
            this.timeMie = res.data.data[2].schedule[2].attention_time
            this.jue = res.data.data[3].schedule[3].day
            this.timeJue = res.data.data[3].schedule[3].attention_time
            this.vie = res.data.data[4].schedule[4].day
            this.timeVie = res.data.data[4].schedule[4].attention_time
            this.sab = res.data.data[5].schedule[5].day
            this.timeSab = res.data.data[5].schedule[5].attention_time
            this.dom = res.data.data[6].schedule[6].day
            this.timeDom = res.data.data[6].schedule[6].attention_time
            /*  accesibilidad | Genesis */
            this.parking =
              res.data.data[0].accessibility_and_others.accessibility.parking_with_access_to_the_establishment
            this.lift =
              res.data.data[0].accessibility_and_others.accessibility.wheelchair_lift_or_ramp
            this.restroom =
              res.data.data[0].accessibility_and_others.accessibility.toilets_with_wheelchair_access
            this.area =
              res.data.data[0].accessibility_and_others.accessibility.rest_area_with_wheelchair_access
            this.sign =
              res.data.data[0].accessibility_and_others.accessibility.staff_trained_in_sign_language
            this.braille =
              res.data.data[0].accessibility_and_others.accessibility.braille_signage_for_blind_people
  
            /* publico usual | Genesis */
            this.toilets =
              res.data.data[0].accessibility_and_others.usual_audiences.toilets
            this.unisex =
              res.data.data[0].accessibility_and_others.services.unisex_toilets
            this.wifi = res.data.data[0].accessibility_and_others.services.wifi
          })
  
          /*  servicios | Genesis */
  
          .catch(
            /* console.log(e); */
            console.log('error en GET')
          )
      },
      /*    método put para actualizar los datos de establecimiento | Genesis */
      facility() {
        console.log('creando petición GET')
        this.$axios
          .put('api/v1/facilities', {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
          })
          .then((res) => {
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
  
            this.lun = res.data.data[0].schedule[0].day
            this.timeLun = res.data.data[0].schedule[0].attention_time
            this.mar = res.data.data[1].schedule[1].day
            this.timeMar = res.data.data[1].schedule[1].attention_time
            this.mie = res.data.data[2].schedule[2].day
            this.timeMie = res.data.data[2].schedule[2].attention_time
            this.jue = res.data.data[3].schedule[3].day
            this.timeJue = res.data.data[3].schedule[3].attention_time
            this.vie = res.data.data[4].schedule[4].day
            this.timeVie = res.data.data[4].schedule[4].attention_time
            this.sab = res.data.data[5].schedule[5].day
            this.timeSab = res.data.data[5].schedule[5].attention_time
            this.dom = res.data.data[6].schedule[6].day
            this.timeDom = res.data.data[6].schedule[6].attention_time
            /*  accesibilidad | Genesis */
            this.parking =
              res.data.data[0].accessibility_and_others.accessibility.parking_with_access_to_the_establishment
            this.lift =
              res.data.data[0].accessibility_and_others.accessibility.wheelchair_lift_or_ramp
            this.restroom =
              res.data.data[0].accessibility_and_others.accessibility.toilets_with_wheelchair_access
            this.area =
              res.data.data[0].accessibility_and_others.accessibility.rest_area_with_wheelchair_access
            this.sign =
              res.data.data[0].accessibility_and_others.accessibility.staff_trained_in_sign_language
            this.braille =
              res.data.data[0].accessibility_and_others.accessibility.braille_signage_for_blind_people
  
            /* publico usual | Genesis */
            this.toilets =
              res.data.data[0].accessibility_and_others.usual_audiences.toilets
            this.unisex =
              res.data.data[0].accessibility_and_others.services.unisex_toilets
            this.wifi = res.data.data[0].accessibility_and_others.services.wifi
          })
  
          /*  servicios | Genesis */
  
          .catch(
            /* console.log(e); */
            console.log('error en GET')
          )
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