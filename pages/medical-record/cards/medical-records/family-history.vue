<!-- seccion de antecedentes heredofamiliares dentro de medical record | Genesis -->
<template>
  <v-card-text class="mt-n7">
    <p class="titulo">Antecedentes heredofamiliares</p>
    <div class="mb-2 mt-n11 d-flex justify-end">
        <!-- agregar informacion existente | Genesis -->
        <v-dialog persistent v-if="!this.null" scrollable v-model="dialog"  max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon color="#9966ff">mdi-plus-circle</v-icon>
          </v-btn> 	
        </template>
        <v-card  max-height="600px">
          <v-card-title class="d-flex justify-space-between flex-wrap">
            <span >ANTECEDENTES HEREDOFAMILIARES</span>
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
                  <p class="cuestion mb-n3">Diabetes</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="diabetes"
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
                  v-model="diabetes_family"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="diabetes == 'Si'"
                    outlined
                    placeholder="Selecciona quién(es) de tu familia"
                  ></v-text-field>
                  <v-text-field
                  v-model="diabetes_type"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="diabetes == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                  <p class="cuestion mb-n3 mt-n4">Cardiopatías</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="disease"
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
                  v-model="diseases_family"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="disease == 'Si'"
                    outlined
                    placeholder="Selecciona quién(es) de tu familia"
                  ></v-text-field>
                  <v-text-field
                  v-model="diseases_type"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="disease == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                  <p class="cuestion mb-n3 mt-n4">
                    Presión arterial alta o baja
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="pressure"
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
                  v-model="pressure_family"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="pressure == 'Si'"
                    outlined
                    placeholder="Selecciona quién(es) de tu familia"
                  ></v-text-field>
                  <v-text-field
                  v-model="pressure_type"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="pressure == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                  <p class="cuestion mb-n3 mt-n4">Enfermedades tiroideas</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="thyroid"
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
                  v-model="thyroid_family"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="thyroid == 'Si'"
                    outlined
                    placeholder="Selecciona quién(es) de tu familia"
                  ></v-text-field>
                  <v-text-field
                  v-model="thyroid_type"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="thyroid == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                  <p class="cuestion mb-n3 mt-n4">Enfermedades de la sangre</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="blood"
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
                  v-model="blood_family"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="blood == 'Si'"
                    outlined
                    placeholder="Selecciona quién(es) de tu familia"
                  ></v-text-field>
                  <v-text-field
                  v-model="blood_type"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="blood == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                  <p class="cuestion mb-n3 mt-n4">Cáncer</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="cancer"
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
                  v-model="cancer_family"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="cancer == 'Si'"
                    outlined
                    placeholder="Selecciona quién(es) de tu familia"
                  ></v-text-field>
                  <v-text-field
                  v-model="cancer_type"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="cancer == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                  <p class="cuestion mb-n3 mt-n4">Cálculos renales</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="kidney"
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
                  v-model="kidney_family"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="kidney == 'Si'"
                    outlined
                    placeholder="Selecciona quién(es) de tu familia"
                  ></v-text-field>
                  <v-text-field
                  v-model="kidney_type"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="kidney == 'Si'"
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


      <!-- editar informacion existente | Genesis -->
      <v-dialog persistent v-else scrollable v-model="edit"  max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <img
              width="24"
              height="24"
              :src="require('@/assets/icons/icon_edit.svg')"
            />
          </v-btn>
        </template>
        <v-card  max-height="600px">
           <v-card-title class="d-flex justify-space-between flex-wrap">
            <span >ANTECEDENTES HEREDOFAMILIARES</span>{{diabetes}} {{ diabetes_family }}
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
                  <p class="cuestion mb-n3">Diabetes</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="diabetes"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="diabetesStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-model="diabetes_family"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="diabetes == 'Si'"
                    outlined
                    placeholder="Selecciona quién(es) de tu familia"
                  ></v-text-field>
                  <v-text-field
                  v-model="diabetes_type"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="diabetes == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                  <p class="cuestion mb-n3 mt-n4">Cardiopatías</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="disease"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" @click="diseasesStatus" value="No"></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-model="diseases_family"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="disease == 'Si'"
                    outlined
                    placeholder="Selecciona quién(es) de tu familia"
                  ></v-text-field>
                  <v-text-field
                  v-model="diseases_type"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="disease == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                  <p class="cuestion mb-n3 mt-n4">
                    Presión arterial alta o baja
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="pressure"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" value="No" @click="pressureStatus"></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-model="pressure_family"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="pressure == 'Si'"
                    outlined
                    placeholder="Selecciona quién(es) de tu familia"
                  ></v-text-field>
                  <v-text-field
                  v-model="pressure_type"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="pressure == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                  <p class="cuestion mb-n3 mt-n4">Enfermedades tiroideas</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="thyroid"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" value="No" @click="thyroidStatus"></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-model="thyroid_family"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="thyroid == 'Si'"
                    outlined
                    placeholder="Selecciona quién(es) de tu familia"
                  ></v-text-field>
                  <v-text-field
                  v-model="thyroid_type"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="thyroid == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                  <p class="cuestion mb-n3 mt-n4">Enfermedades de la sangre</p>                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="blood"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="bloodStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-model="blood_family"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="blood == 'Si'"
                    outlined
                    placeholder="Selecciona quién(es) de tu familia"
                  ></v-text-field>
                  <v-text-field
                  v-model="blood_type"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="blood == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                  <p class="cuestion mb-n3 mt-n4">Cáncer</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="cancer"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" value="No" @click="cancerStatus"></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-model="cancer_family"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="cancer == 'Si'"
                    outlined
                    placeholder="Selecciona quién(es) de tu familia"
                  ></v-text-field>
                  <v-text-field
                  v-model="cancer_type"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="cancer == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                  <p class="cuestion mb-n3 mt-n4">Cálculos renales</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="kidney"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" value="No" @click="kidneyStatus"></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-model="kidney_family"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="kidney == 'Si'"
                    outlined
                    placeholder="Selecciona quién(es) de tu familia"
                  ></v-text-field>
                  <v-text-field
                  v-model="kidney_type"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="kidney == 'Si'"
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
              v-on:click="update"
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
             <v-overlay    :value="overlay">
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
    <v-divider class="mt-n1"></v-divider>
   <list-familyhistory/>
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
  import listFamilyhistory from '~/components/data-list-medicalrecord/list-familyhistory.vue'

export default {
  layout: 'medicalRecord',
  components: {listFamilyhistory},
  data() {
    return {
      overlay: false,
      dialog: false,
      incompleto: false,
      errordata: '',
      edit:'',
      diabetes: '',
      family: [],
      disease: '',
      pressure: '',
      thyroid: '',
      blood: '',
      cancer: '',
      kidney: '',
      null: '',

      diabetes_family:'',
      diabetes_type:'',
      diseases_family:'',
      diseases_type:'',
      pressure_family:'',
      pressure_type:'',
      thyroid_family:'',
      thyroid_type:'',
      cancer_family:'',
      cancer_type:'',
      kidney_family:'',
      kidney_type:'',
      blood_family:'',
      blood_type: '',
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
  mounted() {
    this.datos()
  },
  methods: {
    /* obtener informacion | Genesis */
    datos() {
      this.$axios
        .get(
          `api/v1/medical-history/physician/hereditary-background/patient/${this.$route.params.medicalRecord}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.blood_family=res.data.data.blood_diseases.type
          this.blood_type=res.data.data.blood_diseases.family
          this.diabetes_family = res.data.data.diabetes.family
          this.diabetes_type = res.data.data.diabetes.type
          this.diseases_family = res.data.data.heart_diseases.family
          this.diseases_type = res.data.data.heart_diseases.type
          this.pressure_family = res.data.data.blood_pressure.family
          this.pressure_type = res.data.data.blood_pressure.type
          this.thyroid_family = res.data.data.thyroid_diseases.family
          this.thyroid_type = res.data.data.thyroid_diseases.type
          this.cancer_family = res.data.data.cancer.family
          this.cancer_type = res.data.data.cancer.type
          this.kidney_family = res.data.data.kidney_stones.family
          this.kidney_type = res.data.data.kidney_stones.type
          this.null=res.data.data.blood_diseases
        }).then(
          this.diabetesStatus(),
          this.diseasesStatus(),
          this.pressureStatus(),
          this.thyroidStatus(),
          this.cancerStatus(),
          this.kidneyStatus(),
          this.bloodStatus()
        )
    },
    
   /*  agregar informacion | Genesis */
    add() {
      this.$axios
        .post(
          'api/v1/medical-history/physician/hereditary-background/',
          {
            patient_id: this.$route.params.medicalRecord,
            diabetes: 
              {
                family: this.diabetes_family,
                type: this.diabetes_type,
              },
              heart_diseases: 
              {
                family: this.diseases_family,
                type: this.diseases_type,
              },
              blood_pressure: 
              {
                family: this.pressure_family,
                type: this.pressure_type,
              },
              blood_diseases: 
              {
                family: this.blood_family,
                type: this.blood_type,
              },
              thyroid_diseases: 
              {
                family: this.thyroid_family,
                type: this.thyroid_type,
              },
              cancer: 
              {
                family: this.cancer_family,
                type: this.cancer_type,
              },
              kidney_stones: 
              {
                family: this.kidney_family,
                type: this.kidney_type,
              },
          
          },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then(
          this.overlay=true,
          this.incompleto=false,
          this.diabetesStatus(),
          this.diseasesStatus(),
          this.pressureStatus(),
          this.thyroidStatus(),
          this.cancerStatus(),
          this.kidneyStatus(),
          this.bloodStatus()
        ).catch((error)=>{
          this.errordata = ''
          this.errordata = error.response.data.errors
          this.incompleto=true
        })
    },

     /*  actualizar informacion | Genesis */
     update() {
      this.$axios
        .put(
          `api/v1/medical-history/physician/hereditary-background/patient/${this.$route.params.medicalRecord}`,
          {
            patient_id: this.$route.params.medicalRecord,
            diabetes: 
              {
                family: this.diabetes_family,
                type: this.diabetes_type,
              },
              heart_diseases: 
              {
                family: this.diseases_family,
                type: this.diseases_type,
              },
              blood_pressure: 
              {
                family: this.pressure_family,
                type: this.pressure_type,
              },
              blood_diseases: 
              {
                family: this.blood_family,
                type: this.blood_type,
              },
              thyroid_diseases: 
              {
                family: this.thyroid_family,
                type: this.thyroid_type,
              },
              cancer: 
              {
                family: this.cancer_family,
                type: this.cancer_type,
              },
              kidney_stones: 
              {
                family: this.kidney_family,
                type: this.kidney_type,
              },
          
          },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then(
          this.overlay=true,
          this.incompleto=false,
          this.diabetesStatus(),
          this.diseasesStatus(),
          this.pressureStatus(),
          this.thyroidStatus(),
          this.cancerStatus(),
          this.kidneyStatus(),
          this.bloodStatus()
        ).catch((error)=>{
          this.errordata = ''
          this.errordata = error.response.data.errors
          this.incompleto=true
        })
    },
    reloadPage(){
      this.$router.go()
  },
    diabetesStatus() {
      if(this.diabetes_type==="No"){
        this.diabetes="No"
      } else {
        this.diabetes = 'Si'
      }
    },
    diseasesStatus(){
      if (this.diseases_family === null) {
        this.disease = 'No'
      }else if(this.disease==="No"){
        this.diseases_family="No"
        this.diseases_type="No"
      } else {
        this.disease = 'Si'
      }
    },
    pressureStatus(){
      if (this.pressure_family === null) {
        this.pressure = 'No'
      }else if(this.pressure==="No"){
        this.pressure_family="No"
        this.pressure_type="No"
      } else {
        this.pressure = 'Si'
      }
    },
    thyroidStatus(){
      if (this.thyroid_family === null) {
        this.thyroid = 'No'
      }else if(this.thyroid==="No"){
        this.thyroid_family="No"
        this.thyroid_type="No"
      } else {
        this.thyroid = 'Si'
      }
    },
    cancerStatus(){
      if (this.cancer_family === null) {
        this.cancer = 'No'
      }else if(this.cancer==="No"){
        this.cancer_family="No"
        this.cancer_type="No"
      } else {
        this.cancer = 'Si'
      }
    },
    kidneyStatus(){
      if (this.kidney_family === null) {
        this.kidney = 'No'
      }else if(this.kidney==="No"){
        this.kidney_family="No"
        this.kidney_type="No"
      } else {
        this.kidney = 'Si'
      }
    },
    bloodStatus(){
      if (this.blood_family === null) {
        this.blood = 'No'
      }else if(this.blood==="No"){
        this.blood_family="No"
        this.blood_type="No"
      } else {
        this.blood = 'Si'
      }
    },
  }
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
}
.save {
  font-family: Montserrat;
  text-transform: unset !important;
}
.restore {
  font-family: Montserrat;
  background-color: white;
  text-transform: unset !important;
}
</style>