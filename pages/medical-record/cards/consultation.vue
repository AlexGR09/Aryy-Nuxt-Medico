<!-- seccion de consulta medica | Genesis -->
<template>
  <v-card class="pa-4 montserrat rounded-lg">
    <!-- sintomas -->
    <p>Signos vitales</p>
  <v-row>
<!-- Signos vitales -->
    <v-col cols="12" md="4" sm="4">
      <!-- Temperatura -->
      <v-text-field
        v-model="temperature"
        dense
        outlined
        label="Temperatura"
        prepend-icon="mdi-map-marker"
        suffix="°C"
      >
      <template #prepend>
        <img 
          width="20"
          height="20"
          :src="require('@/assets/icons/icon_temperature.svg')"
        />
      </template>
      </v-text-field>
    </v-col>
<!-- Altura -->

    <v-col cols="12" md="4" sm="4">
      <v-text-field
        v-model="weight"
        dense
        outlined
        label="Peso"
        prepend-icon="mdi-map-marker"
        suffix="Kg"
      >
      <template #prepend>
        <img 
          width="20"
          height="20"
          :src="require('@/assets/icons/icon_weight.svg')"
        />
      </template>
      </v-text-field>
    </v-col>
    
<!-- Breathing_frecuency -->

    <v-col cols="12" md="4" sm="4">
      <v-text-field
       v-model="Breathing_frecuency"
        dense
        outlined
        label="Frecuencia respiratoria"
        suffix="R/M"
      >
      <template #prepend>
        <img 
          width="20"
          height="20"
          :src="require('@/assets/icons/icon_frequency.svg')"
        />
      </template>
      </v-text-field>
    </v-col>
    
<!-- systolic_pressure -->
    <v-col cols="12" md="4" sm="4">
      <v-text-field
       v-model="systolic_pressure"
        dense
        outlined
        label="Sistolica"
        suffix="mmHg"
      >
      <template #prepend>
        <img 
          width="20"
          height="20"
          :src="require('@/assets/icons/icon_pressure.svg')"
        />
      </template>
      </v-text-field>
    </v-col>

    <v-col cols="12" md="4" sm="4">
      <v-text-field
        dense
        outlined
        label="Diastolica"
        suffix="mmHg"
      >
      <template #prepend>
        <img 
          width="20"
          height="20"
          :src="require('@/assets/icons/icon_pressure.svg')"
        />
      </template>
      </v-text-field>
    </v-col>

    
    <v-col cols="12" md="4" sm="4">
      <v-text-field
        dense
        outlined
        label="Frecuencia cardiaca"
        suffix="bpm"
      >
      <template #prepend>
        <img 
          width="20"
          height="20"
          :src="require('@/assets/icons/icon_pressureheart.svg')"
        />
      </template>
      </v-text-field>
    </v-col>


    <v-col cols="12" md="4" sm="4">
      <v-text-field
        dense
        outlined
        label="Saturación de Oxigeno"
      >
      <template #prepend>
        <img 
          width="20"
          height="20"
          :src="require('@/assets/icons/icon_oxygen.svg')"
        />
      </template>
      </v-text-field>
    </v-col>



    <v-col cols="12" md="4" sm="4">
      <v-text-field
        dense
        label="Masa Muscular"
        outlined
        suffix="%"
      >
      <template #prepend>
        <img 
          width="20"
          height="20"
          :src="require('@/assets/icons/icon_musculemass.svg')"
         
        />
      </template>
      </v-text-field>
    </v-col>


    <v-col cols="12" md="4" sm="4">
      <v-text-field
        dense
        label="Grasa corporal"
        outlined
        suffix="%"
      >
      <template #prepend>
        <img 
          width="20"
          height="20"
          :src="require('@/assets/icons/icon_corporalfat.svg')"
         
        />
      </template>
      </v-text-field>
    </v-col>


  </v-row>


    <!-- sintomas -->




    <p>Descripción de sintomas</p>
    <v-textarea
      color="#7900ff"
      placeholder="Escribe aquí los síntomas del paciente"
      outlined
    ></v-textarea>
    <p class="mt-n2">Exploración médica</p>
    <v-btn-toggle class="v-checkbox mt-n6">
      <v-checkbox
        color="#7900ff"
        v-model="yes"
        class="mr-5"
        label="Si"
      ></v-checkbox>
      <v-checkbox color="#7900ff" v-model="no" label="No"></v-checkbox>
    </v-btn-toggle>
    <v-textarea
      color="#7900ff"
      v-if="yes"
      placeholder="Escribe aquí los datos de la exploración médica"
      outlined
    ></v-textarea>
    <v-col  xs="12" sm="12" md="12" lg="12" xl="12">
      <odontograma />
    </v-col>
    <v-row v-for="input in inputs" :key="input.id" class="ml-n2 mt-n5">
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <p>Diagnostico</p>
        <v-text-field
          outlined
          color="#7900ff"
          placeholder="Escribe aquí el diagnóstico"
        ></v-text-field>
      </v-col>
      <v-col class="mt-n8" cols="12"  xs="12" sm="12" md="3" lg="3" xl="3">
        <p>Tratamiento</p>
        <v-text-field
          outlined
          color="#7900ff"
          placeholder="Medicamento"
        ></v-text-field>
      </v-col>
      <v-col class="mt-n8" cols="12" xs="12" sm="12" md="2" lg="2" xl="2">
        <p>Tomar</p>
        <v-text-field
          outlined
          color="#7900ff"
          placeholder="Medicamento"
        ></v-text-field>
      </v-col>
      <v-col class="mt-n8" cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
        <p>Frecuencia</p>
        <v-text-field
          outlined
          color="#7900ff"
          placeholder="Cada 8 horas"
        ></v-text-field>
      </v-col>
      <v-col class="mt-n8" cols="10" xs="10" sm="12" md="2" lg="2" xl="2">
        <p>Duración</p>
        <v-text-field
          outlined
          color="#7900ff"
          placeholder="15 días"
        ></v-text-field>
      </v-col>
      <v-col class="mt-n8" cols="2" xs="2" sm="1" md="1" lg="1" xl="1">
        <v-btn @click="deleteInput" class="iconos mt-12" icon>
          <v-img
            :src="require('@/assets/icons/icon_borrarpaciente.svg')"
            max-width="25"
          ></v-img>
        </v-btn>
      </v-col>
    </v-row>
    <v-btn
      class="mt-n7 ml-n4"
      @click="addInput"
      v-bind="attrs"
      v-on="on"
      color="#9966ff"
      text
      ><v-icon class="icon">mdi-plus-circle</v-icon>Añadir otro
      medicamento</v-btn
    >

    <p>Ordenes de laboratorio</p>
    <v-btn-toggle class="v-checkbox mt-n6">
      <v-checkbox
        color="#7900ff"
        v-model="lab"
        class="mr-5"
        label="Estudios de laboratorio"
      ></v-checkbox>
      <v-checkbox
        color="#7900ff"
        v-model="gab"
        label="Estudios de gabinete"
      ></v-checkbox>
    </v-btn-toggle>
    <v-textarea
      color="#7900ff"
      v-if="lab"
      placeholder="Escribe aquí los datos del estudio de laboratorio"
      outlined
    ></v-textarea>
    <v-textarea
      color="#7900ff"
      v-if="gab"
      placeholder="Escribe aquí los datos del estudio de gabinete"
      outlined
    ></v-textarea>
  <v-row>
   <v-col cols="12" xs="12" xl="3">
      <v-btn block v-on:click="overlay = !overlay" @click="save" height="50px" class="white--text mt-7 btn" color="#7900ff" large
        >Guardar y terminar</v-btn
      ></v-col>
      <v-col cols="12" xs="12"  xl="3">
      <v-btn block height="50px" class="btn  mt-7" color="#999999" outlined large
        >Imprimir receta</v-btn
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

          <v-btn @click="recetaMedica">enviar</v-btn>
  </v-card>
</template>
<script>
import odontograma from './odontograma/odontograma.vue'
export default {
  layout: 'medicalRecord',
  components: { odontograma },
  data() {
    return {
      overlay: false,
      inputs: [{}],
      yes: false,
      no: false,
      lab: false,
      gab: false,

      /* signos vitales */
      temperature: '54324',
      weight: '423',
      breathing_frecuency: '42432',
      systolic_pressure: '4324',
      diasystolic_pressure:'3424',
      heart_rate: '243422',
      oxygen_saturation:'34224',
      body_mass:'42342',
      body_fat:'3424432',
      weight_loss:'42342',
      fat: '42342',
      waist: '4324',
      water: '4232',
      muscle: '46545542',
      abdomen: '635',
      symptom: '4353',
      diagnosis: '45345',
      medical_examination: '13141',
      brand: '1234',
      drug_name: '24234',
      presentation: '3412',
      instruction: '',
      amount: '',
      frequency: '',
      duration: '',
      laboratory_studies: '',
      cabinet_studies:'',
	}

  },
  methods: {
    addInput() {
      this.inputs.push({
        id: `fruit${++this.counter}`,
        label: 'Enter Fruit Name',
        value: '',
      })
    },
    deleteInput(i) {
      this.inputs.splice(i, 1)
    },
    save(){
      this.$router.push('/patients/list')
    },
    recetaMedica(){
      this.$axios
        .post('api/v1/physician/medical-appointments/1/prescriptions',{
          vital_sings:
          [
            {
              temperature: this.temperature,
              weight: this.weight,
              breathing_frecuency: this.breathing_frecuency,
              systolic_pressure: this.systolic_pressure,
              diasystolic_pressure: this.diasystolic_pressure,
              heart_rate: this.heart_rate,
              oxygen_saturation: this.oxygen_saturation,
              body_mass: this.body_mass,
              body_fat:this.body_fat,
              weight_loss: this.weight_loss,
              fat: this.fat,
              waist: this.wait,
              water: this.water,
              muscle: this.muscle,
              abdomen: this.abdomen,
            }
          ]

        },
        {
          headers: {"Authorization": 'Bearer ' + localStorage.getItem("token"),}
        })
    }, 
    postnatalGet() {
      this.$axios
        .get('https://app.aryymd.com/api/v1/physician/medical-appointments/patient/1', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          alert(res.data.data[1].duration_treatment)
          this.delivery_details = res.data.data.delivery_details
          this.duration_treatment = res.data.data[1].duration_treatment
        })
    },
  },
  mounted() {
    this.postnatalGet()
  },
}
</script>
<style scoped>
p {
  color: #999999;
}
.v-checkbox {
  background-color: transparent !important;
}
.montserrat {
  font-family: Montserrat;
}
.btn {
  text-transform: capitalize;
  font-size: 100%;
}
</style>