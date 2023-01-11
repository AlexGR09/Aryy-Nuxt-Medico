<template>
  <v-card
    class="greeting-card "
    outlined
    color="#ffffff"
    solo
  >
    <v-row class="ma-0 pa-0">
      <v-col cols="12">
          <div>
            <p class="texto" align="left">
                AGENDAR <br> NUEVA CITA <br> A DOMICILIO
            </p>
          </div>
      </v-col>
      <v-col cols="3">
          <img
          contain
          class="greeting-card-trophy"
          src="@/assets/icons/icon_CitaDomicilio.svg"
        />
      </v-col>
    </v-row>
  </v-card>
</template>
<style lang="scss" scoped>
.greeting-card {
  position: relative;
  border-radius: 30px;
      .greeting-card-bg {
        position: absolute;
        bottom: 0;
        right: 0;
      }
      .greeting-card-trophy {
        position: absolute;
        max-height: 50vh;
        max-width: 13vh;
        bottom: 25%;
        right: 10%;
      }
}
.texto{
  position: absolute;
  top: 10vh;
  font-size: 2vh;
  font-family: MontserratBold;
  color: #4f565f;
  margin-left: 3vh;
}


.greeting-card{
  color: #f4edff;
  box-shadow: 6px 11px 19px -1px rgba(235,225,252,0.93);
  -webkit-box-shadow: 6px 11px 19px -1px rgba(235,225,252,0.93);
  -moz-box-shadow: 6px 11px 19px -1px rgba(235,225,252,0.93);
  height: 25vh;
  width: 50vh;
}
.greeting-card:hover {
  color: #ffffff;
  background: rgb(121,0,255);
  background: linear-gradient(170deg, rgba(121,0,255,1) 0%, rgba(121,0,255,1) 78%, rgba(89,227,255,1) 100%); 
    .texto{
      color: #ffffff;
    }
}
</style>

