<!--Maquetación de Cards de Mensajes | Luis Reyes-->
<template>
  <div class="card-opiniones">
    <h3 class="title-card">OPINIONES</h3>
    <v-card class="rounded-xl v-cards" >
      <v-list three-line>
        <template v-for="(item, index) in items">
          <v-subheader v-if="item.header" :key="item.header"></v-subheader>
          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          ></v-divider>
          <v-list-item v-else :key="item.title">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="TitleName">
                {{ item.name }}
              </v-list-item-title>
              <v-list-item-subtitle class="opinion">{{
                item.opinion
              }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-btn depressed color="primary">RESPONDER</v-btn>
          </v-list-item>
        </template>
        <div>
          <v-btn color="primary" text> Ver más mensajes </v-btn>
        </div>
      </v-list>
    </v-card>
  </div>
</template>


<script>
export default {
  data: () => ({
    items: [
      { header: 'Today' },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        name: 'Julian Casablancas',
        opinion: '¿Por qué la gallina cruza la calle?',
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        name: 'Demi Moore',
        opinion:
          'Hace unos días fui a una fiesta y habia una alberca en el lugar, me sentí triste y pensé, ¿puedo llorar debajo de agua?',
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        name: 'Victor Von Doom',
        opinion:
          'Si el congelador se encuentra a no más de 10 grados cero, y en la Antártida en un invierno my frío la temperatura ambiente llega a 50 grados',
      },
    ],
  }),
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');
.TitleName {
  font-family: 'MontserratBold';
  color: #999999;
}

.opinion {
  font-family: 'Montserrat';
  color: #999999;
}

.v-cards {
  box-shadow: 10px 10px 5px -2px rgba(94, 185, 255, 0.2);
  -webkit-box-shadow: 10px 10px 5px -2px rgba(94, 185, 255, 0.2);
  -moz-box-shadow: 10px 10px 5px -2px rgba(94, 185, 255, 0.2);
}

.card-opiniones{
  margin-top: -100px;

}
</style>

