<!-- seccion de consulta medica | Genesis -->
<template>
  <v-card class="pa-4 montserrat">
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
      <v-btn block v-on:click="overlay = !overlay"  height="50px" class="white--text mt-7 btn" color="#7900ff" large
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
            </v-col>
          </v-row>
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
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false
        }, 2000)
    },
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