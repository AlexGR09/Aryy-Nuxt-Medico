<template>
  <v-dialog scrollable v-model="dialog" max-width="700px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn block outlined color="#7900ff" v-bind="attrs" v-on="on">
        <v-icon color="#7900ff">mdi-plus</v-icon>
        ANTECEDENTES GINECO-OBSTÉTRICOS
      </v-btn>
    </template>
    <v-card height="600px">
      <v-card-title>
        <span>ANTECEDENTES GINECO-OBSTÉTRICOS</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4" xl="12">
              <p>Fecha de la primera menstruación</p>
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
              <p class="mt-n3">Fecha de la última menstruación</p>
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
              <p class="mt-n4 mb-n2">Sangrado</p>
              <v-radio-group style="font-family: Montserrat" v-model="cons" row>
                <v-radio
                  color="#b380ff"
                  label="Ligero"
                  value="consYes"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Moderado"
                  value="consNo"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Fuerte"
                  value="consYes"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Manchado"
                  value="consNo"
                ></v-radio>
              </v-radio-group>

              <p class="mt-n4 mb-n2">Dolor</p>
              <v-radio-group style="font-family: Montserrat" v-model="cons" row>
                <v-radio
                  color="#b380ff"
                  label="Cólicos"
                  value="consYes"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Dolor de cabeza"
                  value="consNo"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Ovulación"
                  value="consYes"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Senos sensibles"
                  value="consNo"
                ></v-radio>
              </v-radio-group>

              <p class="mt-n4 mb-n2">Higiene íntima</p>
              <v-radio-group style="font-family: Montserrat" v-model="cons" row>
                <v-radio
                  color="#b380ff"
                  label="Tampón"
                  value="consYes"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Toalla"
                  value="consNo"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Protector diario"
                  value="consYes"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Copa menstrual"
                  value="consNo"
                ></v-radio>
              </v-radio-group>

              <p class="mt-n4 mb-n2">Flujo cervical</p>
              <v-radio-group style="font-family: Montserrat" v-model="cons" row>
                <v-radio
                  color="#b380ff"
                  label="Clara de huevo"
                  value="consYes"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Pegajoso"
                  value="consNo"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Cremoso"
                  value="consYes"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Atípico"
                  value="consNo"
                ></v-radio>
              </v-radio-group>

              <p class="mt-n4 mb-n2">Sexo</p>
              <v-radio-group style="font-family: Montserrat" v-model="cons" row>
                <v-radio
                  color="#b380ff"
                  label="Sin protección"
                  value="consYes"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Con protección"
                  value="consNo"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Coito interrumpido"
                  value="consYes"
                ></v-radio>
              </v-radio-group>

              <p class="mt-n4 mb-n3">Embarazos</p>

              <v-radio-group v-model="diabetes" row>
                <v-radio color="#b380ff" label="Si" value="diabYes"></v-radio>
                <v-radio color="#b380ff" label="No" value="diabNo"></v-radio>
              </v-radio-group>
              <v-text-field
                class="mt-n3"
                style="font-family: Montserrat"
                v-if="diabetes == 'diabYes'"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>

              <p class="mt-n4 mb-n3">Cáncer cérvicouterino</p>

              <v-radio-group v-model="diabetes" row>
                <v-radio color="#b380ff" label="Si" value="diabYes"></v-radio>
                <v-radio color="#b380ff" label="No" value="diabNo"></v-radio>
              </v-radio-group>
              <v-text-field
                class="mt-n3"
                style="font-family: Montserrat"
                v-if="diabetes == 'diabYes'"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>

              <p class="mt-n4 mb-n3">Cáncer de mama</p>

              <v-radio-group v-model="diabetes" row>
                <v-radio color="#b380ff" label="Si" value="diabYes"></v-radio>
                <v-radio color="#b380ff" label="No" value="diabNo"></v-radio>
              </v-radio-group>
              <v-text-field
                class="mt-n3"
                style="font-family: Montserrat"
                v-if="diabetes == 'diabYes'"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>

              <p class="mt-n4 mb-n3">Sexualmente activa</p>

              <v-radio-group v-model="diabetes" row>
                <v-radio color="#b380ff" label="Si" value="diabYes"></v-radio>
                <v-radio color="#b380ff" label="No" value="diabNo"></v-radio>
              </v-radio-group>
              <v-text-field
                class="mt-n3"
                style="font-family: Montserrat"
                v-if="diabetes == 'diabYes'"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>

              <p class="mt-n4 mb-n3">Método de planificación familiar</p>

              <v-radio-group v-model="diabetes" row>
                <v-radio color="#b380ff" label="Si" value="diabYes"></v-radio>
                <v-radio color="#b380ff" label="No" value="diabNo"></v-radio>
              </v-radio-group>
              <v-text-field
                class="mt-n3"
                style="font-family: Montserrat"
                v-if="diabetes == 'diabYes'"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>

              <p class="mt-n4 mb-n3">Terapia de reemplazo hormonal</p>

              <v-radio-group v-model="diabetes" row>
                <v-radio color="#b380ff" label="Si" value="diabYes"></v-radio>
                <v-radio color="#b380ff" label="No" value="diabNo"></v-radio>
              </v-radio-group>
              <v-text-field
                class="mt-n3"
                style="font-family: Montserrat"
                v-if="diabetes == 'diabYes'"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>

              <p>Fecha del último papanicolaou</p>
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
              <p class="mt-n3">Fecha de la última mastrografía</p>
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
      cons: '',
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
  color: #4f565f;
  margin-bottom: 0px;
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