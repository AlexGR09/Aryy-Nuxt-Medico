<template>
  <div>
    <div>This is the stuff that gets hidden until it's loaded...</div>
    <v-overlay :value="overlay">
      <v-card light height="100vh" width="100vw"
        ><v-card-text>
          <v-skeleton-loader
            light
            type="list-item-avatar-three-line, image, article"
          ></v-skeleton-loader>
          <v-skeleton-loader
            light
            type="list-item-avatar-three-line, image, article"
          ></v-skeleton-loader> </v-card-text
      ></v-card>
    </v-overlay>
  </div>
</template>

<script>
export default {
  data: () => ({
    overlay: true,
    attrs: {
      class: 'mb-6',
      boilerplate: true,
      elevation: 2,
    },
  }),
  mounted() {
    // hide the overlay when everything has loaded
    // you could choose some other event, e.g. if you're loading
    // data asynchronously, you could wait until that process returns
    this.overlay = false
  },
}
</script>
