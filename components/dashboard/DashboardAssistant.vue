<!--Maquetación de Cards de Mensajes | Luis Reyes-->
<template>
  <v-row class="ma-2 pa-3 mb-6">
    <v-col cols="14">
      <v-carousel
        cycle
        height="350"
        hide-delimiter-background
        show-arrows-on-hover
        class="rounded-xl v-carousel"
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="title-marketing">
                {{ slide.title }}
              </div>
              <!-- barra de progreso | Luis Reyes -->
              <div class="text-center">
                <v-progress-circular
                  :rotate="-90"
                  :size="180"
                  :width="15"
                  :value="value"
                  color="primary"
                >
                  <div>
                    <p class="progress_number"><strong>{{ value }}%</strong> completado</p>
                  <!--   <p class="progress_text">completado</p> -->
                  </div>
                </v-progress-circular>
              </div>

              <div class="subtitle">
                <v-list-item-title class="v-list-item-title">{{
                  slide.description
                }}</v-list-item-title>
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
  <!--   </v-card> -->
</template>
  <script>
export default {
  data() {
    return {
      interval: {},
      value: 0,
      complete: 'completado',
      colors: ['white'],
      slides: [
        {
          title: 'asistente',
          description: 'Revisa detalles de capacitación aqui',
        },
      ],
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0)
      }
      this.value += 10
    }, 1000)
  },
}
</script>
  <style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');

.title-marketing {
  font-family: 'MontserratBold';
  color: #4f565f;
  text-transform: uppercase;
}

.text-marketing {
  color: #999999;
  font-family: 'MontserratMedium';
  text-transform: uppercase;
}
.icono {
  width: 2vh;
}

/* SLIDER */
.v-carousel {
  box-shadow: 10px 10px 5px -2px rgba(94, 185, 255, 0.2);
  -webkit-box-shadow: 10px 10px 5px -2px rgba(94, 185, 255, 0.2);
  -moz-box-shadow: 10px 10px 5px -2px rgba(94, 185, 255, 0.2);
}
.title-marketing {
  font-family: 'MontserratMedium';
  color: #4f565f;
  font-size: 25px;
  text-transform: uppercase;
  overflow: hidden;
}
.v-list-item-title {
  width: 250px;
  margin: 0px auto;
  white-space: pre-wrap;
  font-size: 18px;
  text-align: center;
}
.icon-marketing {
  width: 100px;
  height: 100px;
}
/*Barra de progreso circular | Luis Reyes */
.v-progress-circular {
  margin: 1rem;
}

.progress_number {
  font-family: 'MontserratMedium';
  text-transform: uppercase;
  font-size: 20px;
  color: #999999;
  white-space: pre-wrap;

}
</style> 