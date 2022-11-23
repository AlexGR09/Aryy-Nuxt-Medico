<template>
  <section class="p-5 bg-white">
    <div class="container-lg">
      <!-- <label>{{ SeccionProductos.codigo }}</label> -->
   <v-autocomplete placeholder="codigo" :items="SeccionProductos.codigo"></v-autocomplete>
    </div>
  </section>
</template>

<script>
import { productosDestacados } from "@/assets/productos.js"
export default {
  data() {
        return {
          LosDestacados : productosDestacados
        }},

  name: "losMasVendidos",
  props: ['SeccionProductos']
}
</script>

<style scoped>

</style>
