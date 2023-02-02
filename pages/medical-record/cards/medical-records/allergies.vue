<!-- seccion de alergias dentro de medical record | Genesis -->
<template>
  <v-card-text>
    <p class="titulo">Alergias</p>
    <div class="mb-2 mt-n11 d-flex justify-end">
      <!-- agregar información nueva | Genesis -->
      <v-dialog v-if="!msg" scrollable v-model="dialogg" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon color="#9966ff">mdi-plus-circle</v-icon>
          </v-btn>
        </template>
        <v-card max-height="600px">
          <v-card-title class="d-flex justify-space-between flex-wrap">
            <span >ALERGIAS</span>
                  <v-btn
                    dark
                    icon
                    color="grey"
                    @click="reloadPage"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4" xl="12">
                  <p class="cuestion mb-n3">Alimentarias</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="alim"
                    row
                  >
                    <v-radio color="#b380ff" label="Si" value="Si"></v-radio>
                    <v-radio color="#b380ff" label="No" value="No"></v-radio>
                  </v-radio-group>
                  <v-text-field
                    color="#7900ff"
                    v-model="food"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="alim == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n4 mb-n3">Fármacos</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="farm"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                  </v-radio-group>
                  <v-text-field
                    color="#7900ff"
                    v-model="drugss"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="farm == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n4 mb-n3">Factores ambientales</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="amb"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" value="No"></v-radio>
                  </v-radio-group>
                  <v-text-field
                    color="#7900ff"
                    v-model="environmental"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="amb == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="mt-n10 ml-5 mr-5">
            <v-row>
             
              <v-col cols="12">
                <v-btn
              block
              @click="add"
              height="50px"
              class="white--text save"
              color="#7900ff"
              large
              >Guardar cambios</v-btn
            > </v-col>
            <v-col  cols="12">
               <v-alert v-model="incompleto" class="mt-n4"
                style="font-family: Montserrat; background-color: white !important"
                dense
                outlined
                type="error"
              >
                Datos incompletos, <strong>vuelva a intentarlo.</strong>
              </v-alert>
             </v-col>
             <v-overlay :value="overlay">
                <v-alert
                  class="rounded-xl"
                  icon="mdi-check-circle"
                  color="green"
                  >Datos actualizados correctamente.</v-alert
                >
              </v-overlay>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!--  Editar información registrada | Genesis -->
      <v-dialog  v-else scrollable v-model="dialog" max-width="600px"> 
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <img
              width="24"
              height="24"
              :src="require('@/assets/icons/icon_edit.svg')"
            />
          </v-btn>
        </template>
        <v-card max-height="600px">
          <v-card-title class="d-flex justify-space-between flex-wrap">
            <span >ALERGIAS</span>
                  <v-btn
                    dark
                    icon
                    color="grey"
                    @click="reloadPage"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4" xl="12">
                  <p class="cuestion mb-n3">Alimentarias</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="alimentarias"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="alergiasalimentarias"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                  </v-radio-group>
                  <v-text-field
                    color="#7900ff"
                    v-model="food"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="alimentarias == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n4 mb-n3">Fármacos</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="farmacos"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="alergiasfarmacos"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                  </v-radio-group>
                  <v-text-field
                    color="#7900ff"
                    v-model="drugss"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="farmacos == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n4 mb-n3">Factores ambientales</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="ambientales"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio @click="alergiasambientales" color="#b380ff" label="No" value="No"></v-radio>
                  </v-radio-group>
                  <v-text-field
                    color="#7900ff"
                    v-model="environmental"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="ambientales == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="mt-n10 ml-5 mr-5">
            <v-row>
             
              <v-col cols="12">
                <v-btn
              block
              @click="update"
              height="50px"
              class="white--text save"
              color="#7900ff"
              large
              >Guardar cambios</v-btn
            > </v-col>
            <v-col  cols="12">
               <v-alert v-model="incompleto" class="mt-n4"
                style="font-family: Montserrat; background-color: white !important"
                dense
                outlined
                type="error"
              >
                Datos incompletos, <strong>vuelva a intentarlo.</strong>
              </v-alert>
             </v-col>
             <v-overlay :value="overlay">
                <v-alert
                  class="rounded-xl"
                  icon="mdi-check-circle"
                  color="green"
                  >Datos actualizados correctamente.</v-alert
                >
              </v-overlay>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-divider class="mt-n1 mb-3"></v-divider>
<list-alergies/>
    <p class="ml-3 d-flex justify-end">
      <img
        class="mr-3"
        width="20"
        :src="require('@/assets/icons/icon_timestamp.svg')"
      />Editado el {{ time }}
    </p>
  </v-card-text>
</template>
  <script>
    import listAlergies from '~/components/data-list-medicalrecord/list-allergies.vue'
export default {
  layout: 'medicalRecord',
  components: {listAlergies},
  data() {
    return {
      incompleto: false,
      errordata: '',
      msg:'',
      food: '',
      environmental: '',
      drugs: '',
      drugss: '',
      overlay: false,
      dialog: false,
      dialogg: false,
      alimentarias: '',
      farmacos: '',
      ambientales: '',
      alim: '',
      farm: '',
      amb: '',
      drug_allergy: '',
      environmental_allergy: '',
      food_allergy: '',
      time: '',
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
    alergiass() {
      this.$axios
        .get(
          `api/v1/medical-records/physician/allergies/patient/${this.$route.params.medicalRecord}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.idif = res.data.data.id
          this.drugss = res.data.data.drug_allergy[0]
          this.environmental = res.data.data.environmental_allergy[0]
          this.food = res.data.data.food_allergy[0]
          this.time = res.data.data.created_at
          this.msg=res.data.data.drug_allergy[0]
          this.alergiasalimentarias()
          this.alergiasambientales()
          this.alergiasfarmacos()
        })
    },

    add() {
      this.$axios
        .post(
          'api/v1/medical-records/physician/allergies/patient',
          {
            patient_id: this.$route.params.medicalRecord,
            food_allergy: [this.food],
            drug_allergy: [this.drugss],
            environmental_allergy: [this.environmental],
          },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.overlay=true
          this.incompleto=false
          this.alergiasalimentarias()
          this.alergiasambientales()
          this.alergiasfarmacos()
        }).catch((error)=>{
            this.incompleto=true
          this.errordata = ''
          this.errordata = error.response.data.errors
        })
    },
    reloadPage(){
      this.$router.go()
  },
    update() {
      this.$axios
        .put(
          `api/v1/medical-records/physician/allergies/patient/${this.$route.params.medicalRecord}`,
          {
            patient_id: this.$route.params.medicalRecord,
            food_allergy: [this.food],
            drug_allergy: [this.drugss],
            environmental_allergy: [this.environmental],
          },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.overlay=true
          this.incompleto=false
          this.alergiasalimentarias()
          this.alergiasambientales()
          this.alergiasfarmacos()
        }).catch((error)=>{
            this.incompleto=true
          this.errordata = ''
          this.errordata = error.response.data.errors
        })
    },

    alergiasalimentarias() {
      if (this.food === 'N/A') {
        this.alimentarias = 'No'
      } else if(this.alimentarias==="No"){
        this.food = "N/A"
      } 
       else{
        this.alimentarias = 'Si'
      }
    },

    alergiasambientales() {
      if (this.environmental === 'N/A') {
        this.ambientales = 'No'
      } else if(this.ambientales==="No"){
        this.environmental = "N/A"
      } else {
        this.ambientales = 'Si'
      }
    },
    alergiasfarmacos() {
      if (this.drugss === 'N/A') {
        this.farmacos = 'No'
      } else if(this.farmacos==="No"){
        this.drugss = "N/A"
      } 
      else {
        this.farmacos = 'Si'
      }
    },
  },

  mounted() {
    this.alergiass()
    
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
p.cuestion {
  font-size: 115%;
}
span {
  color: #4f565f;
  font-family: MontserratBold;
  font-size: 1.1rem
}
.save {
  font-family: Montserrat;
  text-transform: unset !important;
}
.restore {
  font-family: Montserrat;
  text-transform: unset !important;
}
</style>