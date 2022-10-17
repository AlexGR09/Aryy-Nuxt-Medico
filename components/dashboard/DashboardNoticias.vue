<template>
  <div id="app">
    <v-app id="inspire">
      <v-card  max-width="800" class="rounded-xl">
        <v-system-bar lights-out></v-system-bar>
        <v-carousel
          :continuous="false"
          :cycle="cycle"
          :show-arrows="false"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          height="200"
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="text-h2">{{ slide.title }}</div>
                <v-img src="@/assets/icons/imagen.jpg"></v-img>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
        <v-list two-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://logos-download.com/wp-content/uploads/2016/10/Pfizer_logo.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>por <strong>Pfizer</strong></v-list-item-title>
              <v-list-item-subtitle>en <strong>Congresos</strong></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-app>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colors: ['blue'],
      slides: [
        {
          title: 'marketing',
          subtitle: 'Todavía no has hecho ninguna campaña',
          url: require('@/assets/icons/icon_cards_marketing.svg'),
          description: 'Realiza tu primera campaña aqui',
        },
        {
          title: 'sitio web',
          subtitle: 'Todavía no has hecho ninguna campaña',
          url: require('@/assets/icons/imagen.jpg'),
          description: 'Realiza tu primera campaña aqui',
        },
      ],
    }
  },
}
</script>