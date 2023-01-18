<!-- seccion de antecedentes no patologicos dentro de medical record | Genesis -->
<template>
    <v-card-text class="mt-n7">
      <p class="titulo">Antecedentes no patológicos</p>
      <div class="mb-2 mt-n11 d-flex justify-end">

<!-- agregar informacion  | Genesis -->
<v-dialog scrollable v-model="dialog" max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon color="#9966ff">mdi-plus-circle</v-icon>
          </v-btn> 	
          </template>
          <v-card max-height="640px">
            <v-card-title>
              <span>ANTECEDENTES NO PATOLÓGICOS</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4" xl="12">
                    <p class="cuestion mb-n3">Actividad física</p>
  
                    <v-radio-group  style="font-family: Montserrat" v-model="sports" row>
                      <v-radio
                        color="#b380ff"
                        label="Si"
                        value="sportsYes"
                      ></v-radio>
                      <v-radio color="#b380ff" label="No" value="sportsNo"></v-radio>
                    </v-radio-group>
                    <v-text-field
                    color="#7900ff"
                      class="mt-n3"
                      style="font-family: Montserrat"
                      v-if="sports == 'sportsYes'"
                      outlined
                      placeholder="Escriba el tipo de actividad"
                    ></v-text-field>
                    <v-text-field
                      color="#7900ff"
                      class="mt-n3"
                      style="font-family: Montserrat"
                      v-if="sports == 'sportsYes'"
                      outlined
                      placeholder="¿Cuántos días a la semana?"
                    ></v-text-field>
                    <p class="cuestion mt-n4">Horas de sueño</p>
                    <v-text-field
                      color="#7900ff"
                      style="font-family: Montserrat"
                      class="mt-n3"
                      outlined
                      placeholder="Seleccione un rango"
                    ></v-text-field>
                   
                  
                    <p class="cuestion mt-n4 mb-n3">¿Sueña siempre que duerme?</p>
  
                    <v-radio-group  style="font-family: Montserrat" v-model="dreaming" row>
                      <v-radio
                        color="#b380ff"
                        label="Si"
                        value="dreamYes"
                      ></v-radio>
                      <v-radio
                        color="#b380ff"
                        label="No"
                        value="dreamNo"
                      ></v-radio>
                    </v-radio-group>
                  
                    <p class="cuestion mt-n4 mb-n3">¿Siente que descansa al dormir?</p>
  
                    <v-radio-group  style="font-family: Montserrat" v-model="resting" row>
                      <v-radio
                        color="#b380ff"
                        label="Si"
                        value="resYes"
                      ></v-radio>
                      <v-radio color="#b380ff" label="No" value="resNo"></v-radio>
                    </v-radio-group>
                    <p class="cuestion mt-n4 mb-n3">Tabaquismo</p>
  
                    <v-radio-group  style="font-family: Montserrat" v-model="smoking" row>
                      <v-radio
                        color="#b380ff"
                        label="Si"
                        value="smokYes"
                      ></v-radio>
                      <v-radio color="#b380ff" label="No" value="smokNo"></v-radio>
                    </v-radio-group>
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
        
     <!--    editar informacion | Genesis -->
        <v-dialog scrollable v-model="dialog" max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark icon v-bind="attrs" v-on="on">
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_edit.svg')"
              />
            </v-btn>
          </template>
          <v-card max-height="640px">
            <v-card-title>
              <span>ANTECEDENTES NO PATOLÓGICOS</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4" xl="12">
                    <p class="cuestion mb-n3">Actividad física</p>
  
                    <v-radio-group  style="font-family: Montserrat" v-model="sports" row>
                      <v-radio
                        color="#b380ff"
                        label="Si"
                        value="sportsYes"
                      ></v-radio>
                      <v-radio color="#b380ff" label="No" value="sportsNo"></v-radio>
                    </v-radio-group>
                    <v-text-field
                    color="#7900ff"
                      class="mt-n3"
                      style="font-family: Montserrat"
                      v-if="sports == 'sportsYes'"
                      outlined
                      placeholder="Escriba el tipo de actividad"
                    ></v-text-field>
                    <v-text-field
                      color="#7900ff"
                      class="mt-n3"
                      style="font-family: Montserrat"
                      v-if="sports == 'sportsYes'"
                      outlined
                      placeholder="¿Cuántos días a la semana?"
                    ></v-text-field>
                    <p class="cuestion mt-n4">Horas de sueño</p>
                    <v-text-field
                      color="#7900ff"
                      style="font-family: Montserrat"
                      class="mt-n3"
                      outlined
                      placeholder="Seleccione un rango"
                    ></v-text-field>
                   
                  
                    <p class="cuestion mt-n4 mb-n3">¿Sueña siempre que duerme?</p>
  
                    <v-radio-group  style="font-family: Montserrat" v-model="dreaming" row>
                      <v-radio
                        color="#b380ff"
                        label="Si"
                        value="dreamYes"
                      ></v-radio>
                      <v-radio
                        color="#b380ff"
                        label="No"
                        value="dreamNo"
                      ></v-radio>
                    </v-radio-group>
                  
                    <p class="cuestion mt-n4 mb-n3">¿Siente que descansa al dormir?</p>
  
                    <v-radio-group  style="font-family: Montserrat" v-model="resting" row>
                      <v-radio
                        color="#b380ff"
                        label="Si"
                        value="resYes"
                      ></v-radio>
                      <v-radio color="#b380ff" label="No" value="resNo"></v-radio>
                    </v-radio-group>

                    <p class="cuestion mt-n4 mb-n3">Tabaquismo</p>
                    <v-radio-group  style="font-family: Montserrat" v-model="smoking" row>
                      <v-radio
                        color="#b380ff"
                        label="Si"
                        value="smokYes"
                      ></v-radio>
                      <v-radio color="#b380ff" label="No" value="smokNo"></v-radio>
                    </v-radio-group>
                    <v-text-field
                    color="#7900ff"
                      class="mt-n3"
                      style="font-family: Montserrat"
                      v-if="smoking == 'smokYes'"
                      outlined
                      placeholder="Escriba la cantidad de cigarrillos al dia"
                    ></v-text-field>
                    <v-text-field
                    v-if="smoking == 'smokYes'"
                      color="#7900ff"
                      style="font-family: Montserrat"
                      class="mt-n3"
                      outlined
                      placeholder="Seleccione el tipo"
                    ></v-text-field>


                    <p class="cuestion mt-n4 mb-n3">Alcoholismo</p>
                    <v-radio-group  style="font-family: Montserrat" v-model="alcoholism" row>
                      <v-radio
                        color="#b380ff"
                        label="Si"
                        value="alcYes"
                      ></v-radio>
                      <v-radio color="#b380ff" label="No" value="alcNo"></v-radio>
                    </v-radio-group>
                    <v-text-field
                    color="#7900ff"
                      class="mt-n3"
                      style="font-family: Montserrat"
                      v-if="alcoholism == 'alcYes'"
                      outlined
                      placeholder="Frecuencia semanal"
                    ></v-text-field>
                    <v-text-field
                    v-if="alcoholism == 'alcYes'"
                      color="#7900ff"
                      style="font-family: Montserrat"
                      class="mt-n3"
                      outlined
                      placeholder="Seleccione el tipo"
                    ></v-text-field>

                    <p class="cuestion mt-n4 mb-n3">Otras sustancias</p>
                    <v-radio-group  style="font-family: Montserrat" v-model="other" row>
                      <v-radio
                        color="#b380ff"
                        label="Si"
                        value="subYes"
                      ></v-radio>
                      <v-radio color="#b380ff" label="No" value="subNo"></v-radio>
                    </v-radio-group>

                    <p class="cuestion mt-n4 mb-n3">Dieta</p>
                    <v-radio-group  style="font-family: Montserrat" v-model="diet" row>
                      <v-radio
                        color="#b380ff"
                        label="Si"
                        value="yes"
                      ></v-radio>
                      <v-radio color="#b380ff" label="No" value="no"></v-radio>
                    </v-radio-group>
                    <v-text-field
                    color="#7900ff"
                      class="mt-n3"
                      style="font-family: Montserrat"
                      v-if="diet == 'yes'"
                      outlined
                      placeholder="Seleccione el tipo de dieta"
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
      </div>
      <v-divider class="mt-n1"></v-divider>
      <p v-if="!nonpat[0]">Sin datos registrados</p>
      <v-list-item
      v-for="nonpat in nonpats"
      :key="nonpat"
      v-else
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Cirugias previas</v-list-item-title>
        <v-list-item-subtitle
          >{{ nonpat.name }} en {{ nonpat.date }}</v-list-item-subtitle
        >
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
  export default {
    layout: 'medicalRecord',
    components: {},
    data() {
      return {
        overlay: false,
        dialog: false,
        sports: '',
        dreaming: '',
        resting: '',
        smoking: '',
        alcoholism: '',
        diet: '',
        other: '',
        nonpat: [],
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
    datos() {
      this.$axios
        .get(
          `api/v1/medical-history/physician/non-pathological-background/patient/${this.$route.params.medicalRecord}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          console.log(res)
          this.idif = res.data.data.idif
          
        })
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
    text-transform: unset !important;
  }
  </style>