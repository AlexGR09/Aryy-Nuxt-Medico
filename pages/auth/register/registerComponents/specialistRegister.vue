<template>
  <div class="fondo">
    <v-container>
      <v-row>
        <v-col align="center">
          <v-img
            :src="require('@/assets/logotipos/ISOLOGO_ARYY.svg')"
            class="mb-n5"
            max-width="150"
            min-width="150"
          ></v-img>
          <div>
            <!-- stepper formulario de registro especialista -->
            <v-stepper  v-model="e1" alt-labels class="elevation-0" >
              <v-stepper-header class="elevation-0">
                <v-stepper-step step="1"> Registro </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="2"> Consultorio </v-stepper-step>
              </v-stepper-header>
              <h2>Crea tu perfil gratuito como especialista</h2>
              <router-link
                  style="text-decoration: none color: inherit;"
                  to="/auth/register/registerComponents/registerPatient"
                  ><h3 align="c" class="">
                    <v-icon color="#9966ff">mdi-arrow-left</v-icon
                    >Registrarme como paciente
                  </h3>
                </router-link>
              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-col md="5" cols="12">
                    <p align="left" class="mb-1 label">Nombre*</p>
                    <v-text-field outlined placeholder="Nombre y apellidos (s)" dense required></v-text-field>
                    <p align="left" class="mb-1 label">Especialidad*</p>
                    <v-autocomplete outlined dense placeholder="Selecciona una especialidad" required></v-autocomplete>
                    <p align="left" class="mb-1 label">Cédula C1*</p>
                    <v-text-field outlined dense placeholder="Número de cédula" required></v-text-field>
                    <p align="left" class="mb-1 label">Institución*</p>
                    <v-text-field outlined dense placeholder="Institución que otorgó la cédula" required></v-text-field>
                    <v-row>
                      <v-col class='d-flex justify-center'>
                        <!-- para el chebooks https://vuetifyjs.com/en/components/forms/#validation-with-submit-26-clear -->
                          <v-checkbox  
                            color="#7900ff" 
                            class="terms" 
                            v-model="check" 
                            label="He leído y aceptado los Términos y condiciones de uso de Aryy."
                          >
                          </v-checkbox>
                      </v-col>
                    </v-row>
                    <v-btn
                      v-on:click="create"
                      @click="e1 = 2"
                      block
                      large
                      class="white--text btn"
                      color="#7900FF"
                      :disabled="!check"
                      >Registrarme
                    </v-btn>
                  </v-col>
                </v-stepper-content>
                <v-stepper-content step="2">
                  <v-col md="5" cols="12">
                    <p align="left" class="mb-1 label">Nombre del consultorio*</p>
                    <v-text-field outlined placeholder="Escriba como quiere identificar su consultorio" dense></v-text-field>
                    <p align="left" class="mb-1 label">Dirección*</p>
                    <v-text-field outlined placeholder="Dirección del consultorio o clínica" dense></v-text-field>
                    <v-row>
                      <v-col cols="12" md="6">
                        <p align="left" class="mb-1 label">Número exterior*</p>
                        <v-text-field outlined placeholder="Número exterior" dense></v-text-field>
                        <p align="left" class="mb-1 label">Código postal*</p>
                      <v-text-field outlined placeholder="293698" dense></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <p align="left" class="mb-1 label">Número interior*</p>
                        <v-text-field outlined placeholder="Número interior" dense></v-text-field>
                        <p align="left" class="mb-1 label">Estado*</p>
                        <v-autocomplete outlined placeholder="Selecciona" dense></v-autocomplete>
                      </v-col>
                    </v-row>
                    <p align="left" class="mb-1 label">Ciudad*</p>
                    <v-autocomplete outlined placeholder="Selecciona" dense></v-autocomplete>
                    <v-btn 
                        v-on:click=" CreateConsultorio"
                        block 
                        large 
                        class="white--text btn" 
                        color="#7900FF"
                    >Registrarme
                  </v-btn>
                  </v-col>
      
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      identification_card: '',
      institution: '',
      consultorio: '',
      direccion: '',

      codigoPostal: '',
      specialty: '',
      // specialty: [""],
      /*       specialties: [{
        specialty_id:'',
        name:'',
      }], */

      suburb: 'colonia',
      number_ext: '232',
      number_int: 'D',
      reference: 'edificio color blanco',
      city_select: '2',

      dbSelect: '',
      items: [],

      /* ESTADOS */
      states_select: '',
      states: [],

      /* MUNICIPIOS */

      phone: '9612563178',
      extension: '2',
      schedule: '',

      check: '',
      e1: 1,
    }
  },

  methods: {
    /* PERFIL MÉDICO */
    create() {
      this.$axios
        .post(
          '/api/v1/physician/profile',
          {
            professional_name: this.name,
            specialties: [
              {
                specialty_id: this.Select,
                license: this.identification_card,
                institution: this.institution,
              },
            ],
          },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((response) => {
          console.log(response.data.specialties)
        })
    },

    /* OBTENER ESPECIALIDADES */
    getspecialty() {
      this.$axios
        .get('/api/v1/catalogue/specialties', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          console.log(res)
          this.items = res.data.data
          console.log(res.data.data)
        })
    },

    /* ENVIAR DATOS DE CONSULTORIO | LUIS REYES */
    CreateConsultorio() {
      this.$axios.post(
        '/api/v1/facilities',
        {
          name: this.consultorio,
          location: {
            address: this.direccion,
            professional_name: this.professional_name,
            state: this.states_select,
            suburb: this.subur,
            number_ext: this.number_ext,
            number_int: this.number_int,
            reference: this.reference,
          },
          zipcode: this.codigoPostal,
          city_id: this.city_select,
        },
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        }
      )

      // OBTENER ESTADOS DEL PAIS DE MÉXICO| LUIS REYES
    },
    getstates() {
      this.$axios
        .get('/api/v1/catalogue/states', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((response) => {
          console.log(response)
          this.states = response.data.data
        })
    },
    // OBTENER MUNICIPIOS | LUIS REYES
    getCity() {
      this.$axios
        .get('/api/v1/catalogue/citiesofstate', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          console.log(res)
        })
    },
  },

  mounted() {
    this.getspecialty()
    this.getstates()
    this.getCity()
  },

  computed: {
    especialidad() {
      return Object.values(this.specialty_get)
    },
  },
}
</script>

<style>
.fondo {
  height: 100%;
  color: white;
  background: white;
}
h2 {
  color: #4f565f;
  font-family: MontserratBold;
}
h3 {
  font-family: 'MontserratLight';
  margin-top: 10px;
  font-size: 100%;
  margin-bottom: 10px;
  color: #9966ff;
}
p.code {
  font-family: MontserratMedium;
  color: #4f565f;
}
p.terms {
  color: #4f565f;
  font-family: MontserratMedium;
  font-size: 90%;
}
.label {
  color: #999999;
  font-family: Montserrat;
}
.btn {
  font-family: MontserratMedium;
  text-transform: unset !important;
}
.textfield {
  margin-left: -8px;
  font-size: 0.9rem;
  font-family: Montserrat;
}
.v-input__icon--append .v-icon {
  font-size: 52px;
  color: #999999;
}

::placeholder {
  color: #003870;
}
</style>
