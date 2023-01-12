<!-- seccion de "antecedentes psiquiatricos" dentro de la seccion "otros" de medical record | Genesis  -->
<template>
  <v-dialog scrollable v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="justify-start" width="360px" outlined color="#7900ff" v-bind="attrs" v-on="on">
       <v-icon color="#7900ff">mdi-plus</v-icon> 
        <span class="l">ANTECEDENTES PSIQUIATRICOS</span>
      </v-btn>
    </template>
    <v-card height="600px">
      <v-card-title>
        <span>ANTECEDENTES PSIQUIATRICOS</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4" xl="12">
              <p>Historia familiar</p>
              <v-text-field
                class="mt-n3"
                style="font-family: Montserrat"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>
              <p class="mt-n4 mb-n2">Consciencia de enfermedad</p>
              <v-radio-group style="font-family: Montserrat" v-model="cons" row>
                <v-radio color="#b380ff" label="Si" value="consYes"></v-radio>
                <v-radio color="#b380ff" label="No" value="consNo"></v-radio>
              </v-radio-group>
              <v-text-field
                class="mt-n3"
                style="font-family: Montserrat"
                v-if="cons == 'consYes'"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>
              <p class="mt-n3">Áreas afectadas por la enfermedad</p>
              <v-text-field
                class="mt-n3"
                style="font-family: Montserrat"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>
              <p class="mt-n4 mb-n2">Apoyo del grupo familiar y social</p>
              <v-radio-group   style="font-family: Montserrat" v-model="support" row>
                <v-radio color="#b380ff" label="Si" value="supYes"></v-radio>
                <v-radio color="#b380ff" label="No" value="supNo"></v-radio>
              </v-radio-group>
              <v-text-field
                class="mt-n3"
                style="font-family: Montserrat"
                v-if="support == 'supYes'"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>
              <p class="mt-n2">Grupo familiar del paciente</p>
              <v-text-field
                class="mt-n3"
                style="font-family: Montserrat"
                outlined
                placeholder="Escriba aqui"
              ></v-text-field>
              <p class="mt-n4">Aspectos de la vida social</p>
              <v-text-field
                class="mt-n3"
                style="font-family: Montserrat"
                outlined
                placeholder="Escriba aqui"
              ></v-text-field>
              <p class="mt-n4">Aspectos de la vida laboral</p>
              <v-text-field
                class="mt-n3"
                style="font-family: Montserrat"
                outlined
                placeholder="Escriba aqui"
              ></v-text-field>
              <p class="mt-n4">Relación con la autoridad</p>
              <v-text-field
                class="mt-n3"
                style="font-family: Montserrat"
                outlined
                placeholder="Escriba aqui"
              ></v-text-field>
              <p class="mt-n4">Control de impulsos</p>
              <v-text-field
                class="mt-n3"
                style="font-family: Montserrat"
                outlined
                placeholder="Escriba aqui"
              ></v-text-field>
              <p class="mt-n4">Manejo de frustración en su vida</p>
              <v-text-field
                class="mt-n3"
                style="font-family: Montserrat"
                outlined
                placeholder="Escriba aqui"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions class="mt-n10 ml-5 mr-5">
            <v-btn
            block
            @click="overlay = !overlay"
              height="50px"
              class="white--text save mb-5"
              color="#7900ff"
              large
              >Guardar cambios</v-btn
            >
            <v-overlay :value="overlay">
                <v-alert
                  class="rounded-xl"
                  icon="mdi-check-circle"
                  color="green"
                  >Datos actualizados correctamente.</v-alert
                >
              </v-overlay>
          </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  layout: 'medicalRecord',
  components: {},
  data() {
    return {
      overlay: false,
      modal: false,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      medicamentos: [
        {
          name: 'Enalapril',
          mg: '10 mg',
          presentation: 'Tabletas',
          indication: '1 tableta cada 24 horas',
          date: '25/DIC/22 a 25/ENE/2023',
        },
        {
          name: 'Losartán',
          mg: '50 mg',
          presentation: 'Comprimido',
          indication: '1 comprimido cada 24 horas',
          date: '25/DIC/22 a 25/ENE/2023',
        },
      ],
      dialog: false,
      alimentarias: '',
      farmacos: '',
      ambientales: '',
      cons: '',
      support: '',
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
}
</script>
  <style scoped>
p.titulo {
  font-family: MontserratMedium;
  color: #7900ff;
  font-size: 130%;
}
p {
  font-family: MontserratMedium;
  color: #999999;
}
p.sub {
  font-family: MontserratMedium;
  color: #999999;
}
span {
  color: #4f565f;
  font-family: MontserratBold;
}
.l{
  font-size: 90%;
  color: #7900ff;
  font-family: MontserratBold;
}
.save {
  font-family: Montserrat;
  text-transform: unset !important;
}
.restore {
  font-family: Montserrat;
  text-transform: unset !important;
}
.checkbox {
  font-family: Montserrat;
}
.vradio {
  font-size: 5px;
}
</style>