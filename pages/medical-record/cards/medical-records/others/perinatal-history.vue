<template>
  <v-dialog scrollable v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn block outlined color="#7900ff" v-bind="attrs" v-on="on">
        <v-icon color="#7900ff">mdi-plus</v-icon>
        ANTECEDENTES PERINATALES
      </v-btn>
    </template>
    <v-card height="600px">
      <v-card-title>
        <span>ANTECEDENTES PERINATALES</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4" xl="12">
              <p class="mt-n3">Fecha del último ciclo menstrual</p>
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    outlined
                    placeholder="Selecciona la fecha"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  >
                    <template #append>
                      <div style="width: 30px">
                        <v-img
                          style="margin: auto 0"
                          max-width="20"
                          :src="require('@/assets/icons/iconos_citas.svg')"
                        />
                      </div> </template
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
              <p>Duración del ciclo</p>
              <v-text-field
                class="mt-n3"
                style="font-family: Montserrat"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>

              <p>Último método anticonceptivo utilizado</p>
              <v-text-field
                class="mt-n3"
                style="font-family: Montserrat"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>

              <p class="mt-n4 mb-n2">Concepción asistida</p>
              <v-radio-group v-model="con" row>
                <v-radio color="#b380ff" label="Si" value="conYes"></v-radio>
                <v-radio color="#b380ff" label="No" value="conNo"></v-radio>
              </v-radio-group>
              <v-text-field
                class="mt-n3"
                style="font-family: Montserrat"
                v-if="con == 'conYes'"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>

              <p class="mt-n3">FPP Final</p>
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    outlined
                    placeholder="Selecciona la fecha"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  >
                    <template #append>
                      <div style="width: 30px">
                        <v-img
                          style="margin: auto 0"
                          max-width="20"
                          :src="require('@/assets/icons/iconos_citas.svg')"
                        />
                      </div> </template
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-col class="ml-6">
        <v-btn
          height="50px"
          class="white--text save mb-5"
          v-on:click="update"
          color="#7900ff"
          large
          >Guardar cambios</v-btn
        >
        <v-btn
          v-bind="attrs"
          v-on="on"
          height="50px"
          class="restore ml-3 mb-5"
          color="#999999"
          outlined
          large
          >Restaurar todo</v-btn
        >
      </v-col>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  layout: 'medicalRecord',
  components: {},
  data() {
    return {
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
      con: '',
      support: '',
    }
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