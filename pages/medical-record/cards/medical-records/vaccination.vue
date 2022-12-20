<template>
  <v-card-text class="mt-n7">
    <p class="titulo">Historial de vacunación</p>
    <div class="mb-2 mt-n11 d-flex justify-end">
      <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <img
              width="24"
              height="24"
              :src="require('@/assets/icons/icon_edit.svg')"
            />
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span>VACUNACIÓN</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4" xl="12">
                  <p>Vacuna</p>
                  <v-text-field
                    color="#7900ff"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Escribe aquí"
                  ></v-text-field>
                  <p class="mt-n3">Dosis</p>
                  <v-text-field
                    color="#7900ff"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Escribe aquí"
                  ></v-text-field>
                  <p class="mt-n3">Número de lote</p>
                  <v-text-field
                    color="#7900ff"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Escribe aquí"
                  ></v-text-field>
                  <p class="mt-n3">Fecha de aplicación</p>
                  <v-dialog
                    ref="dialog"
                    v-model="modal"
                    :return-value.sync="date"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        color="#7900ff"
                        style="font-family: Montserrat"
                        outlined
                        v-model="date"
                        placeholder="Seleccione la fecha"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      >
                        <template #append>
                          <div style="width: 30px">
                            <v-img
                              style="margin: auto 0"
                              max-height="20"
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
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.dialog.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="mt-n10 ml-5">
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
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-divider class="mt-n1"></v-divider>
    <p>Sin datos registrados</p>
    <p class="ml-3">
      <img
        class="mr-3"
        width="20"
        :src="require('@/assets/icons/iconos_hora.svg')"
      />Editado el 25 de diciembre de 2022
    </p>
  </v-card-text>
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
.textfieldd {
  font-size: Montserrat;
}
</style>