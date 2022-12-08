<template>
  <v-card class="greeting-card rounded-xl">
    <v-row class="ma-0 pa-0">
      <v-col cols="8">
        <v-card-text class="text-no-wrap ">
          CITA PRÓXIMA
        </v-card-text>
        <v-card-title class="text-no-wrap ">
          Todavía no <br> tienes citas <br> agendadas
        </v-card-title>
        <v-card-subtitle class="d-flex align-center">
 
        </v-card-subtitle>
        <v-card-text class="d-flex align-center">

        </v-card-text>

      </v-col>
      <v-col cols="4">
        <img
          contain
          height="150"
          max-width="150"
          class="greeting-card-trophy"
          src="@/assets/icons/icon_appointments.svg"
        >
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default{
  data(){
    return{

    }
  },

};

</script>

<style lang="scss" scoped>
.greeting-card {
  position: relative;
  .greeting-card-bg {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .greeting-card-trophy {
    position: absolute;
    bottom: 10%;
    right: 10%;
  }
}
// rtl
.v-application {
  &.v-application--is-rtl {
    .greeting-card-bg {
      right: initial;
      left: 0;
      transform: rotateY(180deg);
    }
    .greeting-card-trophy {
      left: 2%;
      right: initial;
    }
  }
}
</style>