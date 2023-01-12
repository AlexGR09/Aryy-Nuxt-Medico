<template>
  <div>
    <v-card height="800px" flat class="pa-3 montserrat">
      <v-card-title> NOTIFICACIONES </v-card-title>
      <v-card-text>
        <v-row>
          <v-col xl="4">
            <h3>Citas nuevas</h3>
            <h4>Notificaciones sobre las citas registradas en tu calendario</h4>
          </v-col>
          <v-col xl="3">
            <v-switch
              inset
              v-model="pushRegis"
              color="#9966ff"
              label="Push"
              hide-details
            ></v-switch>
            <v-switch
              inset
              v-model="emailRegis"
              color="#9966ff"
              label="Correo"
              hide-details
            ></v-switch>
            <v-switch
              inset
              v-model="whatsRegis"
              color="#9966ff"
              label="Whatsapp"
              hide-details
            ></v-switch>
          </v-col>
        </v-row>

        <v-row>
          <v-col xl="4">
            <h3>Citas próximas</h3>
            <h4>
              Notificaciones sobre las citas cercanas a tu horario actual en tu
              calendario
            </h4>
          </v-col>
          <v-col xl="3">
            <v-switch
              inset
              v-model="pushHor"
              color="#9966ff"
              label="Push"
              hide-details
            ></v-switch>
            <v-switch
              inset
              v-model="emailHor"
              color="#9966ff"
              label="Correo"
              hide-details
            ></v-switch>
            <v-switch
              inset
              v-model="whatsHor"
              color="#9966ff"
              label="Whatsapp"
              hide-details
            ></v-switch>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pushRegis: false,
      emailRegis: false,
      whatsRegis: false,
      pushHor: false,
      emailHor: false,
      whatsHor: false,
    }
  },
}
</script>
<style scoped>
h3 {
  font-family: MontserratMedium;
  color: #9966ff;
}
h4 {
  font-family: Montserrat;
  font-size: 1.8vh;
  color: #999999;
}
</style>