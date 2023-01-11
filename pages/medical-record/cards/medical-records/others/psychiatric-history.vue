<!-- seccion de "antecedentes psiquiatricos" dentro de la seccion "otros" de medical record | Genesis  -->
<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn 
          block 
          outlined 
          color="#7900ff" 
          v-bind="attrs" 
          v-on="on"
        >
          <v-icon color="#7900ff">mdi-plus</v-icon>
              ANTECEDENTES PSIQUIATRICOS
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">ANTECEDENTES PSIQUIATRICOS</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
          
              <v-col cols="12">
                <span>Historia Familiar</span>
                <v-text-field
                  outlined
                  placeholder="Escribe aqui"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <span>Coincidencia enfermedad</span>
                <v-radio-group v-model="cons" row>
                <v-radio color="#b380ff" label="Si" value="consYes"></v-radio>
                <v-radio color="#b380ff" label="No" value="consNo"></v-radio>
              </v-radio-group>
                <v-text-field
                  outlined
                  placeholder="Escribe aqui"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field class="mt-n3" style="font-family: Montserrat" v-if="cons == 'consYes'" outlined
                placeholder="Escriba aquí"></v-text-field>
                <p class="mt-n3">Áreas afectadas por la enfermedad</p>
              </v-col>
              <v-col>
                <v-text-field class="mt-n3" style="font-family: Montserrat" outlined
                placeholder="Escriba aquí"></v-text-field>
              <p class="mt-n4 mb-n2">Apoyo del grupo familiar y social</p>
              <v-radio-group v-model="support" row>
                <v-radio color="#b380ff" label="Si" value="supYes"></v-radio>
                <v-radio color="#b380ff" label="No" value="supNo"></v-radio>
              </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-text-field class="mt-n3" style="font-family: Montserrat" v-if="support == 'supYes'" outlined
                placeholder="Escriba aquí"></v-text-field>
              </v-col>
              <v-col cols="12">

                <p class="mt-n2">Grupo familiar del paciente</p>
              <v-text-field class="mt-n3" style="font-family: Montserrat" outlined
                placeholder="Escriba aqui"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field class="mt-n3" style="font-family: Montserrat" outlined
                placeholder="Escriba aqui"></v-text-field>
              <p class="mt-n4">Aspectos de la vida laboral</p>
              <v-text-field class="mt-n3" style="font-family: Montserrat" outlined
                placeholder="Escriba aqui"></v-text-field>
              <p class="mt-n4">Relación con la autoridad</p>
              <v-text-field class="mt-n3" style="font-family: Montserrat" outlined
                placeholder="Escriba aqui"></v-text-field>
              <p class="mt-n4">Control de impulsos</p>
              <v-text-field class="mt-n3" style="font-family: Montserrat" outlined
                placeholder="Escriba aqui"></v-text-field>
                         </v-col>
            </v-row>
          </v-container>
          <small></small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

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

l {
  font-size: 90%;
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

<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>