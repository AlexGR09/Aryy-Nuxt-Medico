<template>
  <v-card  background="grey-lighten-4">
    <v-card-text>
      <v-row>
        <v-col md="4" lg="4" xl="4">
          <v-text-field color="#7900ff" value="+52 961 123 4567" type="text">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_phone.svg')"
              />
            </template>
          </v-text-field>
        </v-col>

        <v-col md="4" lg="4" xl="4">
          <v-text-field color="#7900ff" value="Fulanito Detal" type="text">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_user.svg')"
              />
            </template>
          </v-text-field>
        </v-col>

        <v-col md="4" lg="4" xl="4">
          <v-text-field color="#7900ff" value="31 años (01 Enero 1991)" type="text">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_birthday.svg')"
              />
            </template>
          </v-text-field>
        </v-col>
      </v-row>

      <v-row class="mt-n15">
        <v-col md="4" lg="4" xl="4">
          <v-text-field color="#7900ff" value="B+" type="text">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_bloodtype.svg')"
              />
            </template>
          </v-text-field>
        </v-col>

        <v-col md="4" lg="4" xl="4">
          <v-text-field color="#7900ff" value="1.80 mts" type="text">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_height.svg')"
              />
            </template>
          </v-text-field>
        </v-col>

        <v-col md="4" lg="4" xl="4">
          <v-text-field color="#7900ff" value="Hombre" type="text">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_phone.svg')"
              />
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-subtitle class="title mt-n11">SIGNOS VITALES</v-card-subtitle>
    <div class="mb-2 mt-n11 d-flex justify-end">
      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon color="black">mdi-dots-horizontal</v-icon>
          </v-btn>
        </template>
<!-- menu de opciones | Genesis -->
        <v-list width="300px">
          <div class="ml-3">
          <p class="title ml-2">SIGNOS VITALES</p>
          <v-checkbox color="#7900ff" v-model="temperature" class="checkbox" label="Temperatura">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_temperature.svg')"
              />
            </template>
          </v-checkbox>
          <v-checkbox color="#7900ff" v-model="weight" class="mt-n3 checkbox" label="Peso">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_weight.svg')"
              />
            </template>
          </v-checkbox>
          <v-checkbox color="#7900ff" v-model="frequency" class="mt-n3 checkbox" label="Frecuencia respiratoria">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_frequency.svg')"
              />
            </template>
          </v-checkbox>
          <v-checkbox color="#7900ff" v-model="pressure" class="mt-n3 checkbox" label="Presión sistólica">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_pressure.svg')"
              />
            </template>
          </v-checkbox>
          <v-checkbox color="#7900ff" v-model="pressureD" class="mt-n3 checkbox" label="Presión diastólica">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_pressure.svg')"
              />
            </template>
          </v-checkbox>

          <v-checkbox color="#7900ff" v-model="pressureheart" class="mt-n3 checkbox"  label="Frecuencia cardiaca">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_pressureheart.svg')"
              />
            </template>
          </v-checkbox>
          <v-checkbox color="#7900ff" v-model="oxygen" class="mt-n3 checkbox" label="Saturación de oxigeno">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_oxygen.svg')"
              />
            </template>
          </v-checkbox>
          <v-checkbox color="#7900ff" v-model="musculemass" class="mt-n3 checkbox" label="Masa muscular">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_musculemass.svg')"
              />
            </template>
          </v-checkbox>
          <v-checkbox color="#7900ff" v-model="corporalfat" class="mt-n3 checkbox" label="Grasa corporal">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_corporalfat.svg')"
              />
            </template>
          </v-checkbox>
          <v-checkbox color="#7900ff" v-model="weightlost" class="mt-n3 checkbox" label="Peso perdido">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_weightlost.svg')"
              />
            </template>
          </v-checkbox>

          <v-checkbox color="#7900ff" v-model="fat" class="mt-n3 checkbox" label="Grasa">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_fat.svg')"
              />
            </template>
          </v-checkbox>
          <v-checkbox color="#7900ff" v-model="waist" class="mt-n3 checkbox" label="Cintura">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_waist.svg')"
              />
            </template>
          </v-checkbox>
          <v-checkbox color="#7900ff" v-model="water" class="mt-n3 checkbox" label="Agua">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_water.svg')"
              />
            </template>
          </v-checkbox>
          <v-checkbox color="#7900ff" v-model="muscle" class="mt-n3 checkbox" label="Músculo">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_muscle.svg')"
              />
            </template>
          </v-checkbox>
          <v-checkbox color="#7900ff" v-model="abdomen" class="mt-n3 checkbox" label="Abdomen">
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
      <v-col v-if="temperature" md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div>
            <v-text-field outlined dense value="37.5 °C" type="text">
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
          <v-col v-if="pressure"  md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div>
            <v-text-field outlined dense value="120 mmHg" type="text">
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
          <v-col v-if="oxygen"  md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div >
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

      <v-col v-if="weight"  md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div >
            <v-text-field
              outlined
              dense
              value="95 Kg (Diciembre 2022)"
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
          <v-col v-if="pressureD"  md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div >
            <v-text-field outlined dense value="80 mmHg" type="text">
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
          <v-col v-if="musculemass"  md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div >
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

      <v-col v-if="frequency"  md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div >
            <v-text-field outlined dense value="17 r/m" type="text">
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
          <v-col v-if="pressureheart"  md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div >
            <v-text-field outlined dense value="80 bpm" type="text">
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
          <v-col v-if="corporalfat"  md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div >
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

      <v-col v-if="weightlost"  md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div >
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
      <v-col v-if="fat"  md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div >
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
      <v-col v-if="waist"  md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div >
            <v-text-field outlined dense value="90 cm" type="text">
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
      <v-col v-if="water"  md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div >
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
      <v-col v-if="muscle"  md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div >
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
      <v-col v-if="abdomen"  md="4" lg="4" xl="4">
        <v-row class="ml-1">
          <div >
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
      temperature: true,
      weight: true,
      frequency: true,
      pressure: true,
      pressureD: true,
      pressureheart: true,
      oxygen: true,
      musculemass: true,
      corporalfat: true,
      weightlost: false,
      fat: false,
      waist: false,
      water: false,
      muscle: false,
      abdomen: false,




    }
  }
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
.checkbox{
  font-family: Montserrat;
}
</style>