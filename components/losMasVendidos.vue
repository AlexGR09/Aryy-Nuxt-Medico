<template>
    <section class="p-5 bg-white">
      <div class="container-lg">
       <!--  <v-autocomplete :items="SeccionProductos.code"></v-autocomplete> -->
        <v-autocomplete outlined  :items="SeccionProductos.code" justify-right placeholder="Código país" color="#b380ff" height="25" > </v-autocomplete>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
          return {
          }},
  
    name: "losMasVendidos",
    props: ['SeccionProductos']
  }
  </script>
  
  <style scoped>
  
  </style>
  