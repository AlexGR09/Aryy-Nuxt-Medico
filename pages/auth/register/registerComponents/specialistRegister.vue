<template>
  <div class="fondo">
    <div align="center" justify="end">
      <v-row>
        <v-col cols="3" sm="1" md="1" lg="1" xl="1" class="flex-grow-0 flex-shrink-0"></v-col>
        <v-col xs="1" sm="8" md="10" lg="10" xl="10">
          <v-img :src="require('@/assets/logotipos/ISOLOGO_ARYY.svg')" class="mb-n5" max-width="150" min-width="150"></v-img>
          <v-stepper class="elevation-0" alt-labels v-model="e1">
            <v-stepper-header class="elevation-0">
              <v-stepper-step color="#7900ff" :complete="e1 > 1" step="1">Verificación</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step color="#7900ff" :complete="e1 > 2" step="2">Registro</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step color="#7900ff" step="3">Consultorio</v-stepper-step>
            </v-stepper-header>
            <!-- contenido de seccion verificación | Genesis -->
            <v-stepper-items color="red">
              <v-stepper-content step="1">
                <h2 align="center" justify="end">Crea tu perfil gratuito como especialista</h2>
                <p class="code">Ingresa el código que recibiste vía WhatsApp o SMS al número que <br/>nos proporcionaste con anterioridad.</p>
                <div align="">
                  <v-col xs="11" sm="8" md="8" lg="7" xl="7">
                    <router-link style="text-decoration: none color: inherit;" to="/auth/register/registerComponents/registerPatient">
                      <h3 align="left" class="a mb-13">
                        <v-icon color="#9966ff">mdi-arrow-left</v-icon>Registrarme como paciente
                      </h3>
                    </router-link>
                    <p align="left" class="mb-1 label">Celular</p>
                    <code-country />
                    <p align="left" class="mb-1 label">Código de verificación</p>
                    <v-text-field outlined placeholder="Verifica tu código" class="textfield" color="#b380ff"></v-text-field>
                    <div align="right">
                      <v-btn class="btn mt-n11" text color="#9966ff" @click="e1 = 2">Reenviar código</v-btn>
                      <br/><br/>
                      <v-btn
                        width="30%"
                        large
                        class="white--text btn mt-n4"
                        color="#7900FF"
                        @click="e1 = 2"
                      >
                        Siguiente
                      </v-btn>
                    </div>
                  </v-col>
                </div>
              </v-stepper-content>
              <!-- contenido de seccion formulario registro  | Genesis -->
              <v-stepper-content step="2">
                <h2 align="center" justify="end">
                  Crea tu perfil gratuito como especialista
                </h2>
                <div align="">
                  <v-col xs="11" sm="8" md="8" lg="7" xl="7">
                    <router-link
                      style="text-decoration: none color: inherit;"
                      to="/auth/register/registerComponents/registerPatient"
                      ><h3 align="left" class="a mb-13">
                        <v-icon color="#9966ff">mdi-arrow-left</v-icon
                        >Registrarme como paciente
                      </h3>
                    </router-link>

                    <!--2.  FORMULARIO DE REGISTRO -->
                    <!-- NOMBRE DEL DOCTOR -->
                    <p align="left" class="mb-1 label">Nombre</p>
                    <v-text-field
                
                      v-model="name"
                      outlined
                      placeholder="Nombre"
                      class="textfield mb-n3"
                      color="#b380ff"
                    >
                    </v-text-field>
                    <!-- CAMPO DE ESPECIALIDAD -->
                    <p align="left" class="mb-1 label">Especialidad*</p>
                    <!-- <select
                      multiple
                      v-model="specialtieslist"
                      id="specialty"
                      outlined
                      placeholder="Selecciona una especialidad"

                    > <option v-for="specialty  in specialties " :value="specialty" :key="specialty">{{specialty.name}}</option></select> -->
                      <v-autocomplete
                          outlined
                          :items="items"
                          v-model="Select"
                          item-text="name"
                          item-value="specialty_id"
                        ></v-autocomplete>
              
                    

                    <!-- CAMPO DE CÉDULA -->
                    <p align="left" class="mb-1 label">Cédula C1</p>
                    <v-text-field
                      v-model="identification_card"
                      outlined
                      placeholder="Número de cédula"
                      class="textfield mb-n3"
                      color="#b380ff"
                    ></v-text-field>
                    <!-- CAMPO DE INSTITUCIÓN -->
                    <p align="left" class="mn-1 label" label>Institución</p>
                    <v-text-field
                      v-model="institution"
                      outlined
                      placeholder="Institución"
                      class="textfield mb-n3"
                      color="#b3380ff"
                    >
                    </v-text-field>
                    <!-- BOTON DE GUARDAR CAMBIOS -->
                    <div class="mt-n7" align="right">
                      <v-checkbox color="#7900ff" class="mt-n3" v-model="check">
                        <template v-slot:label>
                          <div>
                            <p class="terms mt-4">
                              He leído y aceptado los Terminos y Condiciones de
                              uso de aryy.
                            </p>
                          </div>
                        </template>
                      </v-checkbox>
                      <v-btn
                        v-on:click="create"
                        @click="e1 = 3"
                        block
                        large
                        class="white--text btn mt-n3"
                        color="#7900FF"
                        :disabled="!check"
                        >Siguiente
                      </v-btn>
                    </div>
                  </v-col>
                </div>
              </v-stepper-content>
              <!-- 2. FORMULARIO DE REGISTRO -->

  <!-- ------------------------- 3. FORMULARIO DE CONSULTORIO -------------------------------------------------------- -->

              <!-- contenido de seccion Perfil | Genesis -->
              <v-stepper-content step="3">
                <h2 align="center" justify="end">
                  Crea tu perfil gratuito como especialista
                </h2>
                <div align="">
                  <v-col xs="11" sm="8" md="8" lg="7" xl="7">
                    <router-link
                      style="text-decoration: none color: inherit;"
                      to="/auth/register/registerComponents/registerPatient"
                      ><h3 align="left" class="a mb-13">
                        <v-icon color="#9966ff">mdi-arrow-left</v-icon
                        >Registrarme como paciente
                      </h3>
                    </router-link>
                  
                    <form>
                    
                      <!-- CAMPO DE CONSULTORIO  -->
                    <p align="left" class="mb-1 label">Nombre del consultorio*</p>
                    <v-text-field 
                      v-model="consultorio" 
                      name="nombre" id="nombre" 
                      outlined 
                      placeholder="Nombre del consultorio" 
                      class="textfield" 
                      color="#b380ff"
                    ></v-text-field>
                    
                    <!-- CAMPO DE DIRECCION  -->
                    <p align="left" class="mb-1 mt-n2 label">Direccion*</p>
                    <v-text-field v-model="direccion" outlined placeholder="Calle panuco" class="textfield" color="#b380ff"></v-text-field>
                    <!-- NUMERO EXTERIOR Y EXTERIOR    -->
                    <v-row>
                      <v-col cols="12" md="4">
                        <p align="left" class="mb-1 mt-n2 label">N.Exterior</p>
                        <v-text-field v-model="number_ext" outlined placeholder="N. Exterior" class="textfield" color="#b380ff"></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4">
                        <p align="left" class="mb-1 mt-n2 label">N.Interior</p>
                        <v-text-field v-model="number_int" outlined placeholder="N. Interior" class="textfield" color="#b380ff"></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4">
                        <p align="left" class="mb-1 mt-n2 label">C.P.*</p>
                        <v-text-field v-model="codigoPostal" outlined placeholder="C.P." class="textfield" color="#b380ff"></v-text-field>
                      </v-col>
                    </v-row>
                    
                    <!-- CIUDAD Y ESTADO -->
                    <v-row>
                      <v-col cols="12" md="6">
                        <p align="left" class="mb-1 mt-n2 label">Estado*</p>
                        <v-autocomplete
                          outlined
                          placeholder="Selecciona"
                          :items="states"
                          v-model="states_select"
                          item-text="name"
                          item-value="state_id"
                          
                        ></v-autocomplete>
                      </v-col>
                      <v-col cols="12" md="6">
                        <p align="left" class="mb-1 mt-n2 label">Ciudad*</p>
                        <v-text-field
                          outlined
                          placeholder="Selecciona"
                          v-model="city_select"
                  
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <!-- BOTON DE GUARDAR | LUIS REYES -->
                    <v-btn 
                      v-on:click=" CreateConsultorio"
                      block 
                      large 
                      class="white--text btn" 
                      color="#7900FF"
                    >Registrarme</v-btn>
                  </form>
                  </v-col>
                </div>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
          <!-- 3. FORMULARIO DE CONSULTORIO -->
        </v-col>
        <v-col cols="3" sm="1" md="2" lg="1" xl="1" class="flex-grow-0 flex-shrink-1"></v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      identification_card: "",
      institution: "",
      consultorio:"",
      direccion:"",
  
      codigoPostal:"",
      specialty:"",
      // specialty: [""],
/*       specialties: [{
        specialty_id:'',
        name:'',
      }], */

      suburb: "colonia",
        number_ext: "232",
        number_int: "D",
        reference:"edificio color blanco",
        city_select:"2",

      dbSelect : '',
      items : [],
      
      /* ESTADOS */
      states_select: '',
      states: [],

      /* MUNICIPIOS */
   

      phone:"9612563178",
      extension:"2",
      schedule: "",


      check: '',
      e1: 1,
    }
  },
  
  methods: {

   /* PERFIL MÉDICO */
    create() {
      this.$axios
      .post('/api/v1/physician/profile', {
          professional_name: this.name,
          specialties: [
            {
              specialty_id: this.Select,
              license: this.identification_card,
              institution: this.institution
            }
          ]
      }, 
      { 
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
      })
      .then((response) => {
        console.log(response.data.specialties)
      })
    },

    
    /* OBTENER ESPECIALIDADES */
    getspecialty() {
      this.$axios
      .get('/api/v1/catalogue/specialties',{
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
      })
      .then(res => {
        console.log(res)
        this.items= res.data.data
        console.log(res.data.data)

      })
    },
    
    
    /* ENVIAR DATOS DE CONSULTORIO | LUIS REYES */
    CreateConsultorio(){
      this.$axios
      .post('/api/v1/facilities',{
    
        name: this.consultorio,
        location:
          {
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
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
      })
    
    // OBTENER ESTADOS DEL PAIS DE MÉXICO| LUIS REYES
    },
    getstates() {
      this.$axios
      .get('/api/v1/catalogue/states',{
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
      })
      .then(response => {
        console.log(response)
        this.states= response.data.data
 
      })
    },
    // OBTENER MUNICIPIOS | LUIS REYES
    getCity(){
      this.$axios
      .get('/api/v1/catalogue/citiesofstate',{
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
      })
      .then(res => {
        console.log(res)
      })
    },



  }, 

  mounted() {
    this.getspecialty()
    this.getstates()
    this.getCity()
  
  },


  computed:{
    especialidad(){
      return Object.values(this.specialty_get)

    }
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
</style>
