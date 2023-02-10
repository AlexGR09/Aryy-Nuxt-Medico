<template>
  <div>
    <v-app-bar flat height="150px" color="white" dense fixed hide-on-scroll>
      <v-btn dark icon color="black" @click="$router.back()">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-row>
                    <v-col md="5" lg="5" xl="5"></v-col>
                    <v-col md="4" lg="4" xl="4"> <v-img class="ml-n8" :src="require('@/assets/logotipos/ISOLOGO_ARYY.svg')" max-width="150"></v-img><p class="mt-n7 prueba">Consultorios</p></v-col>
                    <v-col ms="3" lg="3" xl="3"></v-col>
                  </v-row>
                  </v-app-bar>
    <v-card color="card" height="100%" flat class="pa-16">
      <v-card-text class="pa-16">
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
                </v-col>
                <v-col md="6" cols="12">
                  <span>Teléfono para citas*</span>
                  <v-text-field
                    v-model="phone_number"
                    color="#9966ff"
                    class="textfield mb-5"
                    placeholder="XXX XXX XXXX"
                    outlined
                  ></v-text-field>
                  <span >Horario para recepción de llamadas*</span>
                  
                  <v-row>
                    <v-col class="mt-2" cols="6" xl="2">
                      <p class="mb-4">{{ lunes }}</p>
                      <p class="mb-4">{{ martes }}</p>
                      <p class="mb-4">{{ miercoles }}</p>
                      <p class="mb-4">{{ jueves }}</p>
                      <p class="mb-4">{{ viernes }}</p>
                      <p class="mb-4">{{ sabado }}</p>
                      <p class="mb-4">{{ domingo }}</p>
                    </v-col>

                    <v-col xl="5">
                      <v-chip v-if="lun" class="ml-3" color="#f4edff" label>{{
                        timeLun
                      }}</v-chip
                      ><br v-if="lun" />
                      <v-chip v-if="mar" class="ml-3" color="#f4edff" label>{{
                        timeMar
                      }}</v-chip
                      ><br v-if="mar" />
                      <v-chip v-if="mie" class="ml-3" color="#f4edff" label>{{
                        timeMie
                      }}</v-chip
                      ><br v-if="mie" />
                      <v-chip v-if="jue" class="ml-3" color="#f4edff" label>{{
                        timeJue
                      }}</v-chip
                      ><br v-if="jue" />
                      <v-chip v-if="vie" class="ml-3" color="#f4edff" label>{{
                        timeVie
                      }}</v-chip
                      ><br />
                      <v-chip v-if="sab" class="ml-3" color="#f4edff" label>{{
                        timeSab
                      }}</v-chip
                      ><br v-if="sab" />
                      <v-chip v-if="dom" class="ml-3" color="#f4edff" label>{{
                        timeDom
                      }}</v-chip
                      ><br v-if="dom" />
                    </v-col>
                  </v-row>
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
                  v-on:click="update"
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
  layout: 'auth',
  components: {
  },
  data() {
    return {
      timeLun: '',
      timeMar: '',
      timeMie: '',
      timeJue: '',
      timeVie: '',
      timeSab: '',
      timeDom: '',
      lun: '',
      mar: '',
      mie: '',
      jue: '',
      vie: '',
      sab: '',
      dom: '',

      horas: '',
      name: '',
      day: '',
      extension: '',
      city: '',
      facility_name: '',

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
      location: [],
      overlay: false,
      dialog: false,
      selectedItem: 1,
      time: null,
      menu2: false,
      modal2: false,
      valid: '',
      id: '',
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
    const facilityId = this.$route.params.id;
    console.log(facilityId)
  },
  created(){
   
  },
  methods: {
    /*  metodo get para recibir datos de establecimiento | Genesis */
    getFacility() {
      this.$axios
      .get(`api/v1/facilities/${this.$route.params.editFacility}`, {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          console.log(res)
          console.log('exito en GET')
          this.id = res.data.data.id
          this.facilities = res.data.data
          this.location = res.data.data.location
          this.consultorios = res.data.data.length

          this.facility_name = res.data.data.name
          this.address = res.data.data.location.address
          this.state = res.data.data.location.state
          this.suburb = res.data.data.location.suburb
          this.number_ext = res.data.data.location.number_ext
          this.number_int = res.data.data.location.number_int
          this.reference = res.data.data.location.reference
          this.zip_code = res.data.data.zipcode
          this.city = res.data.data.city_id
          this.extension = res.data.data.extension
          this.phone_number = res.data.data.phone

           /*  accesibilidad | Genesis */
          this.parking = res.data.data.accessibility_and_others.accessibility.parking_with_access_to_the_establishment
          this.lift = res.data.data.accessibility_and_others.accessibility.wheelchair_lift_or_ramp
          this.ramp = res.data.data.accessibility_and_others.accessibility.wheelchair_lift_or_ramp
          this.restroom = res.data.data.accessibility_and_others.accessibility.toilets_with_wheelchair_access
          this.area = res.data.data.accessibility_and_others.accessibility.rest_area_with_wheelchair_access
          this.sign = res.data.data.accessibility_and_others.accessibility.staff_trained_in_sign_language
          this.braille = res.data.data.accessibility_and_others.accessibility.braille_signage_for_blind_people
         

          /*  publicos usuales | Genesis */
          this.lgbt = res.data.data.accessibility_and_others.usual_audiences.lgtb_friendly
          this.trans = res.data.data.accessibility_and_others.usual_audiences.safe_space_for_transgender_people

          /*  servicios | Genesis */
          this.toilets = res.data.data.accessibility_and_others.services.toilets
          this.unisex = res.data.data.accessibility_and_others.services.unisex_toilets
          this.wifi = res.data.data.accessibility_and_others.services.wifi

       
        })
    },
    /*    método put para actualizar los datos de establecimiento | Genesis */
    update(){
      this.$axios
      .post(`api/v1/facilities/full/${this.$route.params.editFacility}`, {
        name: this.facility_name,
        location: 
          {
            address: this.address,
            state: this.state,
            suburb: this.suburb,
            number_ext: this.number_ext,
            number_int: this.number_int,
            reference: this.reference,
          },
          phone: this.phone_number,
          extension: this.extension,
          zipcode: this.zip_code,
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
              },
            services:
              {
                toilets: this.toilets,
                unisex_toilets: this.unisex,
                wifi: this.wifi,
              },
            
          },
          clues: 'none',
          city_id: '2',
          coordinates: "54645",
      },
      {
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token"),} 
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