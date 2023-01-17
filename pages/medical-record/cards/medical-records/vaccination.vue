<!-- seccion de historial de vacunacion dentro de medical record | Genesis -->
<template>
  <v-card-text class="mt-n7">
    <p class="titulo">Historial de vacunación</p>
    <div class="mb-2 mt-n11 d-flex justify-end">

      <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon color="#9966ff">mdi-plus-circle</v-icon>
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
                  <p class="cuestion mb-1">Vacuna</p>
                  <v-text-field
                    color="#7900ff"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Escribe aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n3 mb-1">Dosis</p>
                  <v-text-field
                    color="#7900ff"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Escribe aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n3 mb-1">Número de lote</p>
                  <v-text-field
                    color="#7900ff"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Escribe aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n3 mb-1">Fecha de aplicación</p>
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

    </div>
    <v-divider class="mt-n1"></v-divider>
    <p v-if="!this.idif">Sin datos registrados</p>
    <v-list-item
      v-else
      style="font-family: Montserrat"
      class="ml-n7 mt-n5 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{vaccine}} • 
        {{formattedDate}}
        </v-list-item-title>
        
      </v-list-item-content>
    </v-list-item>
    <p class="ml-3 d-flex justify-end">
      <img
        class="mr-3"
        width="20"
        :src="require('@/assets/icons/icon_timestamp.svg')"
      />Editado el 25 de diciembre de 2022
    </p>
  </v-card-text>
</template>
  <script>
    import moment from 'moment'
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
      vaccine: '',
      application_date: '',
      dose: '',
      lot_number: '',
      idif: '',
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
  methods: {
   /*  metodo para obtener datos de vacunacion | Genesis */
    vacunas() {
      console.log('creando petición GET')
      this.$axios
        .get(`api/v1/physician/medical-history/vaccination-history/${this.$route.params.medicalRecord}`, {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          console.log(res)
          this.vaccine = res.data.data.vaccine
          this.application_date = res.data.data.application_date
          this.dose = res.data.data.dose
          this.lot_number = res.data.data.lot_number
          this.idif=res.data.data.id
        })
        .catch(
          console.log('error en GET')
        )
    },
  /*   metodo para editar datos de vacunación | Genesis */
    editVacunas() {
      this.$axios
        .post('/api/v1/physician/medical-history/vaccination-history/', {
          patient_id: this.$route.params.medicalRecord,
          vaccine: this.vaccine,
          dose: this.dose,
          lot_number: this.lot_number,
          application_date: this.application_date,
        })
        .then((response) => {
          console.log(response.data.data)
          localStorage.setItem('token',response.data.access_token)
        })
        .catch((error) => {
          this.errormail = ''
          this.errormail = error.response.data.errors.email[0]
          this.password_error=""
          this.password_error = error.response.data.errors.password[0]
        })
    },
  },
  mounted(){
    this.vacunas()
  },
  computed: {
      formattedDate() {
        return moment(this.application_date).format('L');
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
p.cuestion {
  font-size: 115%;
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