<template>
  <v-card height="90%" background="grey-lighten-4">
    <v-card-text>
      <v-row>
        <v-col xl="4">
          <v-text-field value="+52 961 123 4567" type="text">
            <template v-slot:prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_phone.svg')"
              />
            </template>
          </v-text-field>
        </v-col>

        <v-col xl="4">
          <v-text-field value="Fulanito Detal" type="text">
            <template v-slot:prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_user.svg')"
              />
            </template>
          </v-text-field>
        </v-col>

        <v-col xl="4">
          <v-text-field value="31 años (01 Enero 1991)" type="text">
            <template v-slot:prepend>
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
        <v-col xl="4">
          <v-text-field value="B+" type="text">
            <template v-slot:prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_bloodtype.svg')"
              />
            </template>
          </v-text-field>
        </v-col>

        <v-col xl="4">
          <v-text-field value="1.80 mts" type="text">
            <template v-slot:prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_height.svg')"
              />
            </template>
          </v-text-field>
        </v-col>

        <v-col xl="4">
          <v-text-field value="Hombre" type="text">
            <template v-slot:prepend>
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
    <v-divider class="mt-n4"></v-divider>
<v-row class="mt-2 ml-1">
    <v-col xl="4">
      <v-row class="ml-1">
        <div>
        <v-text-field
         outlined
         dense
          value="37.5 °C"
          type="text"
        >
          <template v-slot:prepend>
            <img class="mr-n3"
              width="24"
              height="24"
              :src="require('@/assets/icons/icon_temperature.svg')"
            />
          </template>
        </v-text-field>
        <p class="mt-n8 subtitle">Temperatura</p>
      </div>
      <div>
        <v-text-field
         outlined
         dense
          value="120 mmHg"
          type="text"
        >
          <template v-slot:prepend>
            <img class="mr-n3"
              width="24"
              height="24"
              :src="require('@/assets/icons/icon_pressure.svg')"
            />
          </template>
        </v-text-field>
        <p class="mt-n8 subtitle">Sistólica</p>
      </div>
      <div>
        <v-text-field
         outlined
         dense
          value="120 mmHg"
          type="text"
        >
          <template v-slot:prepend>
            <img class="mr-n3"
              width="24"
              height="24"
              :src="require('@/assets/icons/icon_oxygen.svg')"
            />
          </template>
        </v-text-field>
        <p class="mt-n8 subtitle">Sistólica</p>
      </div>
      </v-row>
    </v-col>

    <v-col xl="4">
      <v-row class="ml-1">
        <div>
        <v-text-field
         outlined
         dense
          value="95 Kg (Diciembre 2022)"
          type="text"
        >
          <template v-slot:prepend>
            <img class="mr-n3"
              width="24"
              height="24"
              :src="require('@/assets/icons/icon_weight.svg')"
            />
          </template>
        </v-text-field>
        <p class="mt-n8 subtitle">Peso</p>
      </div>
      <div>
        <v-text-field
         outlined
         dense
          value="80 mmHg"
          type="text"
        >
          <template v-slot:prepend>
            <img class="mr-n3"
              width="24"
              height="24"
              :src="require('@/assets/icons/icon_pressure.svg')"
            />
          </template>
        </v-text-field>
        <p class="mt-n8 subtitle">Diastólica</p>
      </div>
      <div>
        <v-text-field
         outlined
         dense
          value="15%"
          type="text"
        >
          <template v-slot:prepend>
            <img class="mr-n3"
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

    <v-col xl="4">
      <v-row class="ml-1">
        <div>
        <v-text-field
         outlined
         dense
          value="17 r/m"
          type="text"
        >
          <template v-slot:prepend>
            <img class="mr-n3"
              width="24"
              height="24"
              :src="require('@/assets/icons/icon_frequency.svg')"
            />
          </template>
        </v-text-field>
        <p class="mt-n8 subtitle">Frecuencia respiratoria</p>
      </div>
      <div>
        <v-text-field
         outlined
         dense
          value="80 bpm"
          type="text"
        >
          <template v-slot:prepend>
            <img class="mr-n3"
              width="24"
              height="24"
              :src="require('@/assets/icons/icon_pressureheart.svg')"
            />
          </template>
        </v-text-field>
        <p class="mt-n8 subtitle">Frecuencia cardiaca</p>
      </div>
      <div>
        <v-text-field
         outlined
         dense
          value="20%"
          type="text"
        >
          <template v-slot:prepend>
            <img class="mr-n3"
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
  </v-row>
    
  </v-card>
</template>

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
</style>