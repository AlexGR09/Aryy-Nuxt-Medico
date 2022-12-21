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
    <v-col xl="12">
      <odontograma />
     
    </v-col>
    <div v-for="input in inputs" :key="input.id">
    <v-row class="ml-0 mt-n8">
        <v-col xl="12">
           
      <p>Diagnostico</p>
      <v-text-field
        outlined
        color="#7900ff"
        placeholder="Escribe aquí el diagnóstico"
      ></v-text-field>
        </v-col>
      <v-col xl="3">
        <p>Tratamiento</p>
        <v-text-field
          outlined
          color="#7900ff"
          placeholder="Medicamento"
        ></v-text-field>
      </v-col>
      <v-col xl="2">
        <p>Tomar</p>
        <v-text-field
          outlined
          color="#7900ff"
          placeholder="Medicamento"
        ></v-text-field>
      </v-col>
      <v-col xl="4">
        <p>Frecuencia</p>
        <v-text-field
          outlined
          color="#7900ff"
          placeholder="Cada 8 horas"
        ></v-text-field>
      </v-col>
      <v-col xl="2">
        <p>Duración</p>
        <v-text-field
          outlined
          color="#7900ff"
          placeholder="15 días"
        ></v-text-field>
      </v-col>
      <v-col xl="1">
        <v-btn class="iconos mt-12" icon>
          <v-img
            :src="require('@/assets/icons/icon_borrarpaciente.svg')"
            max-width="25"
          ></v-img>
        </v-btn>
      </v-col>
    </v-row>
</div>
    <v-btn @click="addInput" v-bind="attrs" v-on="on" color="#9966ff" text><v-icon class="icon">mdi-plus-circle</v-icon>Añadir otro medicamento</v-btn>
  </v-card>
</template>
<script>
import odontograma from './odontograma/odontograma.vue'
export default {
  layout: 'medicalRecord',
  components: { odontograma },
  data() {
    return {
        inputs: [{
    
    }],
      yes: false,
      no: false,
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
	}
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
</style>