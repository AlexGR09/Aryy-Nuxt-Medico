<!-- seccion de antecedentes no patologicos dentro de medical record | Genesis -->
<template>
  <v-card-text class="mt-n7">
    <p class="titulo">Antecedentes no patológicos</p>
    <div class="mb-2 mt-n11 d-flex justify-end">
      <!-- agregar informacion  | Genesis -->
      <v-dialog v-if="!diet" scrollable v-model="editt" max-width="600px">
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

                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="sports"
                    row
                  >
                    <v-radio color="#b380ff" label="Si" value="sportYes"></v-radio>
                    <v-radio color="#b380ff" label="No" value="sportNo"></v-radio>
                  </v-radio-group>
                  <v-text-field
                    v-model="type_activity"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="sports == 'sportYes'"
                    outlined
                    placeholder="Escriba el tipo de actividad"
                  ></v-text-field>
                  <v-text-field
                    v-model="days_week"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="sports == 'sportYes'"
                    outlined
                    placeholder="¿Cuántos días a la semana?"
                  ></v-text-field>
                  <p class="cuestion mt-n4">Horas de sueño</p>
                  <v-text-field
                    color="#7900ff"
                    v-model="horas_sueño"
                    style="font-family: Montserrat"
                    class="mt-n3"
                    outlined
                    placeholder="Seleccione un rango"
                  ></v-text-field>

                  <p class="cuestion mt-n4 mb-n3">¿Sueña siempre que duerme?</p>

                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="soñar"
                    row
                  >
                    <v-radio color="#b380ff" label="Si" value="Si"></v-radio>
                    <v-radio color="#b380ff" label="No" value="No"></v-radio>
                  </v-radio-group>

                  <p class="cuestion mt-n4 mb-n3">
                    ¿Siente que descansa al dormir?
                  </p>

                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="descanso"
                    row
                  >
                    <v-radio color="#b380ff" label="Si" value="Si"></v-radio>
                    <v-radio color="#b380ff" label="No" value="No"></v-radio>
                  </v-radio-group>

                  <p class="cuestion mt-n4 mb-n3">Tabaquismo</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="smoking"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="smokYes"
                    ></v-radio>
                    <v-radio
                      color="#b380ff"
                      label="No"
                      value="smokNo"
                    ></v-radio>
                  </v-radio-group>
                  <v-text-field
                    v-model="cigarettes"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="smoking == 'smokYes'"
                    outlined
                    placeholder="Escriba la cantidad de cigarrillos al dia"
                  ></v-text-field>
                  <v-text-field
                    v-model="typeSmoke"
                    v-if="smoking == 'smokYes'"
                    color="#7900ff"
                    style="font-family: Montserrat"
                    class="mt-n3"
                    outlined
                    placeholder="Seleccione el tipo"
                  ></v-text-field>

                  <p class="cuestion mt-n4 mb-n3">Alcoholismo</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="alcoholism"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="alcYes"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" value="alcNo"></v-radio>
                  </v-radio-group>
                  <v-text-field
                    v-model="alcohol"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="alcoholism == 'alcYes'"
                    outlined
                    placeholder="Frecuencia semanal"
                  ></v-text-field>
                  <v-text-field
                    v-model="typeAlcohol"
                    v-if="alcoholism == 'alcYes'"
                    color="#7900ff"
                    style="font-family: Montserrat"
                    class="mt-n3"
                    outlined
                    placeholder="Seleccione el tipo"
                  ></v-text-field>

                  <p class="cuestion mt-n4 mb-n3">Otras sustancias</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="other_substances"
                    row
                  >
                    <v-radio color="#b380ff" label="Si" value="Si"></v-radio>
                    <v-radio color="#b380ff" label="No" value="No"></v-radio>
                  </v-radio-group>

                  <p class="cuestion mt-n4 mb-n3">Dieta</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="dieta"
                    row
                  >
                    <v-radio color="#b380ff" label="Si" value="yes"></v-radio>
                    <v-radio color="#b380ff" label="No" value="no"></v-radio>
                  </v-radio-group>
                  <v-autocomplete
                    v-model="diet"
                    :items="dietas"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="dieta == 'yes'"
                    outlined
                    placeholder="Seleccione el tipo de dieta"
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="mt-n10 ml-5 mr-5">
            <v-btn
              block
              @click="overlay = !overlay"
              v-on:click="add"
              height="50px"
              class="white--text save mb-5"
              color="#7900ff"
              large
              >Guardar cambios</v-btn
            >
            <v-overlay :value="overlay">
              <v-alert class="rounded-xl" icon="mdi-check-circle" color="green"
                >Datos actualizados correctamente.</v-alert
              >
            </v-overlay>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!--    editar informacion | Genesis -->
      <v-dialog v-else scrollable v-model="editt" max-width="600px">
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
                  <p class="cuestion mb-n3">Actividad físsica</p>

                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="sports"
                    row
                  >
                    <v-radio color="#b380ff" label="Si" value="sportYes"></v-radio>
                    <v-radio color="#b380ff" label="No" value="sportNo"></v-radio>
                  </v-radio-group>
                  <v-text-field
                    v-model="type_activity"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="sports == 'sportYes'"
                    outlined
                    placeholder="Escriba el tipo de actividad"
                  ></v-text-field>
                  <v-text-field
                    v-model="days_week"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="sports == 'sportNo'"
                    outlined
                    placeholder="¿Cuántos días a la semana?"
                  ></v-text-field>
                  <p class="cuestion mt-n4">Horas de sueño</p>
                  <v-text-field
                    color="#7900ff"
                    v-model="horas_sueño"
                    style="font-family: Montserrat"
                    class="mt-n3"
                    outlined
                    placeholder="Seleccione un rango"
                  ></v-text-field>

                  <p class="cuestion mt-n4 mb-n3">¿Sueña siempre que duerme?</p>

                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="soñar"
                    row
                  >
                    <v-radio color="#b380ff" label="Si" value="Si"></v-radio>
                    <v-radio color="#b380ff" label="No" value="No"></v-radio>
                  </v-radio-group>

                  <p class="cuestion mt-n4 mb-n3">
                    ¿Siente que descansa al dormir?
                  </p>

                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="descanso"
                    row
                  >
                    <v-radio color="#b380ff" label="Si" value="Si"></v-radio>
                    <v-radio color="#b380ff" label="No" value="No"></v-radio>
                  </v-radio-group>

                  <p class="cuestion mt-n4 mb-n3">Tabaquismo</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="smoking"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="smokYes"
                    ></v-radio>
                    <v-radio
                      color="#b380ff"
                      label="No"
                      value="smokNo"
                    ></v-radio>
                  </v-radio-group>
                  <v-text-field
                    v-model="cigarettes"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="smoking == 'smokYes'"
                    outlined
                    placeholder="Escriba la cantidad de cigarrillos al dia"
                  ></v-text-field>
                  <v-text-field
                    v-model="typeSmoke"
                    v-if="smoking == 'smokYes'"
                    color="#7900ff"
                    style="font-family: Montserrat"
                    class="mt-n3"
                    outlined
                    placeholder="Seleccione el tipo"
                  ></v-text-field>

                  <p class="cuestion mt-n4 mb-n3">Alcoholismo</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="alcoholism"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="alcYes"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" value="alcNo"></v-radio>
                  </v-radio-group>
                  <v-text-field
                    v-model="alcohol"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="alcoholism == 'alcYes'"
                    outlined
                    placeholder="Frecuencia semanal"
                  ></v-text-field>
                  <v-text-field
                    v-model="typeAlcohol"
                    v-if="alcoholism == 'alcYes'"
                    color="#7900ff"
                    style="font-family: Montserrat"
                    class="mt-n3"
                    outlined
                    placeholder="Seleccione el tipo"
                  ></v-text-field>

                  <p class="cuestion mt-n4 mb-n3">Otras sustancias</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="other_substances"
                    row
                  >
                    <v-radio color="#b380ff" label="Si" value="Si"></v-radio>
                    <v-radio color="#b380ff" label="No" value="No"></v-radio>
                  </v-radio-group>

                  <p class="cuestion mt-n4 mb-n3">Dieta</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="dieta"
                    row
                  >
                    <v-radio color="#b380ff" label="Si" value="yes"></v-radio>
                    <v-radio color="#b380ff" label="No" value="no"></v-radio>
                  </v-radio-group>
                  <v-autocomplete
                    v-model="diet"
                    :items="dietas"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="dieta == 'yes'"
                    outlined
                    placeholder="Seleccione el tipo de dieta"
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="mt-n10 ml-5 mr-5">
            <v-btn
              block
              @click="overlay = !overlay"
              v-on:click="add"
              height="50px"
              class="white--text save mb-5"
              color="#7900ff"
              large
              >Guardar cambios</v-btn
            >
            <v-overlay :value="overlay">
              <v-alert class="rounded-xl" icon="mdi-check-circle" color="green"
                >Datos actualizados correctamente.</v-alert
              >
            </v-overlay>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-divider class="mt-n1"></v-divider>
     <p v-if="!diet">Sin datos registrados</p>
    <list-nonpathologic v-else/>

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
      sportsradio: '',
      dias: '',
      overlay: false,
      editt: false,
      create: false,
      tabaquismo: '',
      sports: '',
      dreaming: '',
      resting: '',
      smoking: '',
      alcoholism: '',
      diet: '',
      dieta: '',
      other: '',
      horas_sueño: '',
      horassueño: '',
      soñar: '',
      descanso: '',
      nonpat: [],
      type_activity: '',
      days_week: '',
      other_substances: '',
      cigarettes: '',
      typeSmoke: '',
      alcohol: '',
      diettype: '',
      alcoholismo: '',
      typeAlcohol: '',
      dietas: [
        'Dieta mediterránea',
        'Dieta de la zona',
        'Dieta vegetariana',
        'Dieta vegana',
        'Dieta de la fertilidad',
        'Dieta hipocalórica',
        'Dieta hipercalórica',
        'Dieta volumétrica',
        'Dieta keto',
        'Dieta detox',
        'Dieta Ornish / Ovolactovegetariana',
        'Dieta Dash',
        'Dieta paleo',
      ],
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
          `api/v1/medical-history/physician/non-pathological-background/patient/${this.$route.params.medicalRecord}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.type_activity = res.data.data.physical_activity.type_of_activity
          this.days_week = res.data.data.physical_activity.days_of_the_week

          this.horas_sueño = res.data.data.rest_time.hours_of_sleep
          this.soñar = res.data.data.rest_time.dreams_while_sleeping
          this.descanso = res.data.data.rest_time.rest_when_sleeping

          this.cigarettes = res.data.data.smoking.number_of_cigarettes
          this.typeSmoke = res.data.data.smoking.type
          this.alcohol = res.data.data.alcoholim.weekly_frequency
          this.typeAlcohol = res.data.data.alcoholim.type

          this.diet = res.data.data.diet
          this.other_substances = res.data.data.other_substances
          this.sportstatus()
          this.statusSmoking()
          this.statusAlcohol()
          this.statusDiet()
        })
    },
  
    /* agregar información | Genesis */
    add() {
      this.$axios
        .post(
          'api/v1/medical-history/physician/non-pathological-background/',
          {
            patient_id: this.$route.params.medicalRecord,
            other_substances: this.other_substances,
            diet: this.diet,
            drug_active: 'string',
            previous_medication: 'null',
            physical_activity: 
              {
                days_of_the_week: this.days_week,
                type_of_activity: this.type_activity,
              },
            rest_time: 
              {
                dreams_while_sleeping: this.soñar,
                hours_of_sleep: this.horas_sueño,
                rest_when_sleeping: this.descanso,
              },
            alcoholim:
              {
                type: this.typeAlcohol,
                weekly_frequency: this.alcohol,
              },
            smoking:
              {
                number_of_cigarettes: this.cigarettes,
                type: this.typeSmoke,
              },
          },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          location.reload()
        })
    },

    sportstatus() {
      if (this.type_activity === null) {
        this.sports = 'sportNo'
      } else {
        this.sports = 'sportYes'
      }
    },
    statusSmoking() {
      if (this.cigarettes === null) {
        this.smoking = 'smokNo'
      } else {
        this.smoking = 'smokYes'
      }
    },
    statusAlcohol() {
      if (this.alcohol === null) {
        this.alcoholism = 'alcNo'
      } else {
        this.alcoholism = 'alcYes'
      }
    },
    statusDiet() {
      if (this.diet === null) {
        this.dieta = 'no'
      } else {
        this.dieta = 'yes'
      }
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