<template>
  <v-card class="greeting-card rounded-xl">
    <v-row class="ma-0 pa-0">
      <v-col cols="12">
        <v-row class="mb-6" no-gutters>
          <v-col md="4">
            <br>
            <br>
            <p color="#7900ff">INICIAR <br> NUEVA CONSULTA </p>
          </v-col>
          <v-col md="4" offset-md="4">
            <img
              contain
              height="100"
              max-width="100"
              class="greeting-card-trophy"
              src="@/assets/icons/icon_consulta.svg"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>


<script>
export default {
  data() {
    return {

    }
  },
}
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

.card :hover {
  color: #ffffff;
  background: #5d01db;
  border-radius: 20;
}
</style>