<template>
  <div>
    <div id="app">
  <v-container  >
    <v-row class="hidden-sm-and-down">
      <h3 style="color:red;">1. should only show in md/lg</h3>
    </v-row>
    <v-row class="hidden-sm-and-up">
      <h3 style="color:red;">2. should only show in xs</h3>
    </v-row>
    <v-row class="hidden-md-and-up">
      <h3>3. should only show in xs/sm</h3>
    </v-row>
    <div class="hidden-md-and-down">
      <span>4. should only show in lg</span>
    </div>
    <v-row >
       <h3>5. should always be shown</h3>
    </v-row>
  </v-container>
</div>
  </div>
</template>

<script>
export default {
  data: () => ({
  }),
  mounted() {
    // hide the overlay when everything has loaded
    // you could choose some other event, e.g. if you're loading
    // data asynchronously, you could wait until that process returns
    this.overlay = false
  },
}
</script>
