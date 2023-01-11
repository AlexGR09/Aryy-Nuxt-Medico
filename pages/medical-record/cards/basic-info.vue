<!-- card para seccion de informacion basica | Genesis -->
<template>
  <v-card background="grey-lighten-4">
    <v-card-text>
      <v-row>
        <v-col cols="4" xs="4" sm="4" md="4" lg="4" xl="4">
          <v-text-field
            dense
            hide-details
            color="#7900ff"
            placeholder="Número de teléfono"
            type="text"
          >
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_phone.svg')"
              />
            </template>
          </v-text-field>
        </v-col>

        <v-col cols="4" xs="4" sm="4" md="4" lg="4" xl="4">
          <v-text-field
            dense
            placeholder="Nombre completo"
            hide-details
            color="#7900ff"
            type="text"
          >
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_user.svg')"
              />
            </template>
          </v-text-field>
        </v-col>

        <v-col cols="4" xs="4" sm="4" md="4" lg="4" xl="4">
          <v-text-field
          placeholder="Edad"
            dense
            hide-details
            color="#7900ff"
            type="text"
          >
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_birthday.svg')"
              />
            </template>
          </v-text-field>
        </v-col>

        <v-col cols="4" xs="4" sm="4" md="4" lg="4" xl="4">
          <v-text-field
          placeholder="Tipo de sangre"
            class="mt-n5"
            dense
            color="#7900ff"
            type="text"
          >
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_bloodtype.svg')"
              />
            </template>
          </v-text-field>
        </v-col>

        <v-col cols="4" xs="4" sm="4" md="4" lg="4" xl="4">
          <v-text-field
          placeholder="Estatura"
            class="mt-n5"
            dense
            color="#7900ff"
            type="text"
          >
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_height.svg')"
              />
            </template>
          </v-text-field>
        </v-col>

        <v-col cols="4" xs="4" sm="4" md="4" lg="4" xl="4">
          <v-text-field
            class="mt-n5"
            placeholder="Genero"
            dense
            color="#7900ff"
            type="text"
          >
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_gender.svg')"
              />
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-subtitle class="title mt-n11">SIGNOS VITALES</v-card-subtitle>
    <div class="mb-2 mt-n11 d-flex justify-end">
      <v-menu :close-on-content-click="false" bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon color="black">mdi-dots-horizontal</v-icon>
          </v-btn>
        </template>
        <!-- menu de opciones | Genesis -->
        <v-list width="300px">
          <div class="ml-3">
            <p class="title ml-2">SIGNOS VITALES</p>
            <v-checkbox
              color="#7900ff"
              v-model="temperatura"
              class="checkbox"
              label="Temperatura"
            >
              <template #prepend>
                <img
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_temperature.svg')"
                />
              </template>
            </v-checkbox>
            <v-checkbox
              color="#7900ff"
              v-model="peso"
              class="mt-n3 checkbox"
              label="Peso"
            >
              <template #prepend>
                <img
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_weight.svg')"
                />
              </template>
            </v-checkbox>
            <v-checkbox
              color="#7900ff"
              v-model="respiratoria"
              class="mt-n3 checkbox"
              label="Frecuencia respiratoria"
            >
              <template #prepend>
                <img
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_frequency.svg')"
                />
              </template>
            </v-checkbox>
            <v-checkbox
              color="#7900ff"
              v-model="sistolica"
              class="mt-n3 checkbox"
              label="Presión sistólica"
            >
              <template #prepend>
                <img
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_pressure.svg')"
                />
              </template>
            </v-checkbox>
            <v-checkbox
              color="#7900ff"
              v-model="diastolica"
              class="mt-n3 checkbox"
              label="Presión diastólica"
            >
              <template #prepend>
                <img
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_pressure.svg')"
                />
              </template>
            </v-checkbox>

            <v-checkbox
              color="#7900ff"
              v-model="cardiaca"
              class="mt-n3 checkbox"
              label="Frecuencia cardiaca"
            >
              <template #prepend>
                <img
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_pressureheart.svg')"
                />
              </template>
            </v-checkbox>
            <v-checkbox
              color="#7900ff"
              v-model="oxigeno"
              class="mt-n3 checkbox"
              label="Saturación de oxigeno"
            >
              <template #prepend>
                <img
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_oxygen.svg')"
                />
              </template>
            </v-checkbox>
            <v-checkbox
              color="#7900ff"
              v-model="masa"
              class="mt-n3 checkbox"
              label="Masa muscular"
            >
              <template #prepend>
                <img
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_musculemass.svg')"
                />
              </template>
            </v-checkbox>
            <v-checkbox
              color="#7900ff"
              v-model="grasacorp"
              class="mt-n3 checkbox"
              label="Grasa corporal"
            >
              <template #prepend>
                <img
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_corporalfat.svg')"
                />
              </template>
            </v-checkbox>
            <v-checkbox
              color="#7900ff"
              v-model="pesoperd"
              class="mt-n3 checkbox"
              label="Peso perdido"
            >
              <template #prepend>
                <img
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_weightlost.svg')"
                />
              </template>
            </v-checkbox>

            <v-checkbox
              color="#7900ff"
              v-model="grasa"
              class="mt-n3 checkbox"
              label="Grasa"
            >
              <template #prepend>
                <img
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_fat.svg')"
                />
              </template>
            </v-checkbox>
            <v-checkbox
              color="#7900ff"
              v-model="cintura"
              class="mt-n3 checkbox"
              label="Cintura"
            >
              <template #prepend>
                <img
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_waist.svg')"
                />
              </template>
            </v-checkbox>
            <v-checkbox
              color="#7900ff"
              v-model="agua"
              class="mt-n3 checkbox"
              label="Agua"
            >
              <template #prepend>
                <img
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_water.svg')"
                />
              </template>
            </v-checkbox>
            <v-checkbox
              color="#7900ff"
              v-model="musculo"
              class="mt-n3 checkbox"
              label="Músculo"
            >
              <template #prepend>
                <img
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_muscle.svg')"
                />
              </template>
            </v-checkbox>
            <v-checkbox
              color="#7900ff"
              v-model="abs"
              class="mt-n3 checkbox"
              label="Abdomen"
            >
              <template #prepend>
                <img
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_abdomen.svg')"
                />
              </template>
            </v-checkbox>
          </div>
        </v-list>
        <!--     fin de menu -->
      </v-menu>
    </div>
    <v-divider class="mt-n4"></v-divider>
    <v-row class="mt-2 ml-1">
      <v-col v-if="temperatura" cols="4" xs="4" sm="5" md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div>
            <v-text-field  outlined dense value="°C" type="text">
              <template #prepend>
                <img
                  class="mr-n3"
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_temperature.svg')"
                />
              </template>
            </v-text-field>
            <p class="mt-n8 subtitle">Temperatura</p>
          </div>
        </v-row>
      </v-col>
      <v-col v-if="sistolica" cols="4" xs="4" md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div>
            <v-text-field outlined dense value="mmHg" type="text">
              <template #prepend>
                <img
                  class="mr-n3"
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_pressure.svg')"
                />
              </template>
            </v-text-field>
            <p class="mt-n8 subtitle">Sistólica</p>
          </div>
        </v-row>
      </v-col>
      <v-col v-if="oxigeno" cols="4" xs="4" md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div>
            <v-text-field outlined dense value="80" type="text">
              <template #prepend>
                <img
                  class="mr-n3"
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_oxygen.svg')"
                />
              </template>
            </v-text-field>
            <p class="mt-n8 subtitle">Saturación de oxigeno</p>
          </div>
        </v-row>
      </v-col>

      <v-col v-if="peso" cols="4" xs="4" md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div>
            <v-text-field
              outlined
              dense
              value="Kg (Fecha)"
              type="text"
            >
              <template #prepend>
                <img
                  class="mr-n3"
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_weight.svg')"
                />
              </template>
            </v-text-field>
            <p class="mt-n8 subtitle">Peso</p>
          </div>
        </v-row>
      </v-col>
      <v-col v-if="diastolica" cols="4" xs="4" md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div>
            <v-text-field outlined dense value="mmHg" type="text">
              <template #prepend>
                <img
                  class="mr-n3"
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_pressure.svg')"
                />
              </template>
            </v-text-field>
            <p class="mt-n8 subtitle">Diastólica</p>
          </div>
        </v-row>
      </v-col>
      <v-col v-if="masa" cols="4" xs="4" md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div>
            <v-text-field outlined dense value="15%" type="text">
              <template #prepend>
                <img
                  class="mr-n3"
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_musculemass.svg')"
                />
              </template>
            </v-text-field>
            <p class="mt-n8 subtitle">Masa muscular</p>
          </div>
        </v-row>
      </v-col>

      <v-col v-if="respiratoria" cols="4" xs="4" md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div>
            <v-text-field outlined dense value="r/m" type="text">
              <template #prepend>
                <img
                  class="mr-n3"
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_frequency.svg')"
                />
              </template>
            </v-text-field>
            <p class="mt-n8 subtitle">Frecuencia respiratoria</p>
          </div>
        </v-row>
      </v-col>
      <v-col v-if="cardiaca" cols="4" xs="4" md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div>
            <v-text-field outlined dense value="bpm" type="text">
              <template #prepend>
                <img
                  class="mr-n3"
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_pressureheart.svg')"
                />
              </template>
            </v-text-field>
            <p class="mt-n8 subtitle">Frecuencia cardiaca</p>
          </div>
        </v-row>
      </v-col>
      <v-col v-if="grasacorp" cols="4" xs="4" md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div>
            <v-text-field outlined dense value="20%" type="text">
              <template #prepend>
                <img
                  class="mr-n3"
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_corporalfat.svg')"
                />
              </template>
            </v-text-field>
            <p class="mt-n8 subtitle">Grasa corporal</p>
          </div>
        </v-row>
      </v-col>

      <v-col v-if="pesoperd" cols="4" xs="4" md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div>
            <v-text-field outlined dense value="20%" type="text">
              <template #prepend>
                <img
                  class="mr-n3"
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_weightlost.svg')"
                />
              </template>
            </v-text-field>
            <p class="mt-n8 subtitle">Peso perdido</p>
          </div>
        </v-row>
      </v-col>
      <v-col v-if="grasa" cols="4" xs="4" md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div>
            <v-text-field outlined dense value="20%" type="text">
              <template #prepend>
                <img
                  class="mr-n3"
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_fat.svg')"
                />
              </template>
            </v-text-field>
            <p class="mt-n8 subtitle">Grasa</p>
          </div>
        </v-row>
      </v-col>
      <v-col v-if="cintura" cols="4" xs="4" md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div>
            <v-text-field outlined dense value="cm" type="text">
              <template #prepend>
                <img
                  class="mr-n3"
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_waist.svg')"
                />
              </template>
            </v-text-field>
            <p class="mt-n8 subtitle">Cintura</p>
          </div>
        </v-row>
      </v-col>
      <v-col v-if="agua" cols="4" xs="4" md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div>
            <v-text-field outlined dense value="20%" type="text">
              <template #prepend>
                <img
                  class="mr-n3"
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_water.svg')"
                />
              </template>
            </v-text-field>
            <p class="mt-n8 subtitle">Agua</p>
          </div>
        </v-row>
      </v-col>
      <v-col v-if="musculo" md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div>
            <v-text-field outlined dense value="20%" type="text">
              <template #prepend>
                <img
                  class="mr-n3"
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_muscle.svg')"
                />
              </template>
            </v-text-field>
            <p class="mt-n8 subtitle">Músculo</p>
          </div>
        </v-row>
      </v-col>
      <v-col v-if="abs" md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div>
            <v-text-field outlined dense value="20%" type="text">
              <template #prepend>
                <img
                  class="mr-n3"
                  width="24"
                  height="24"
                  :src="require('@/assets/icons/icon_abdomen.svg')"
                />
              </template>
            </v-text-field>
            <p class="mt-n8 subtitle">Abdomen</p>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      temperatura: true,
      peso: true,
      respiratoria: true,
      sistolica: true,
      diastolica: true,
      cardiaca: true,
      oxigeno: true,
      masa: true,
      grasacorp: true,
      pesoperd: false,
      grasa: false,
      cintura: false,
      agua: false,
      musculo: false,
      abs: false,
      citas: false,
    }
  },
  mounted() {
    this.today()
  },
  methods: {
    today() {
      this.$axios
        .get('api/v1/calendar/appointments', {
          params: {
            type: 'today',
          },
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          this.eventos = res.data.data
          console.log(res)
        })
    },
  },
}
</script>

<style scoped>
.v-text-field {
  font-family: Montserrat;
}
.title {
  font-family: MontserratBold !important;
  color: #4f565f;
  font-size: 100% !important;
}
.subtitle {
  font-family: Montserrat !important;
  color: #4f565f;
  font-size: 80% !important;
}
.v-text-field--outlined >>> fieldset {
  border-color: transparent !important;
}
.checkbox {
  font-family: Montserrat;
}
</style>