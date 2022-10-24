<template>
    <v-card
    class="v-card-cita rounded-xl"
    max-width="500"
  >
  <v-carousel
    cycle
    height="225"
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="container-slider">
            {{ slide.title }}
          </div>
      
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</v-card>
</template>

<script>
  export default {
    data () {
      return {
        colors: [
          'white',
        ],
        slides: [
        {
          title: 'marketing 1',
          subtitle: 'Todavía no has hecho ninguna campaña',
          url: require('@/assets/icons/icon_cards_marketing.svg'),
          description: 'Realiza tu primera campaña aqui',
        },
        {
          title: 'marketing 2',
          subtitle: 'Todavía no has hecho ninguna campaña',
          url: require('@/assets/icons/icon_cards_marketing.svg'),
          description: 'Realiza tu primera campaña aqui',
        },
        ],
      }
    },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
.container-slider{
  font-family: 'MontserratBold';
  color: #4f565f;
  text-transform: uppercase;
  font-size: 20px;
}

.title-slide{
  font-family: 'MontserratMedium';
  white-space: nowrap;
  font-size: 18px;
  color: #cccccc;
}


</style>