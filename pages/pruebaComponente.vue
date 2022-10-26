<template>
  <div> 
   <!--  <div v-for="destacados in LosDestacados"
    :key="destacados.id">
    <p>{{destacados.id}}</p>
    <v-autocomplete placeholder="codigo" :items="destacados.id"></v-autocomplete> 
  </div> -->
  <vue-tel-input-vuetify filled locale="MX-ES"></vue-tel-input-vuetify>
  </div>
</template>

<script>
import VueTelInputVuetify from "vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue"
import { productosDestacados } from "@/assets/productos.js"
export default {
  components: {
    VueTelInputVuetify,
  },
  data(){
    return {
      LosDestacados : productosDestacados,
    }
  },
  
  name: "losMasVendidos",
}
</script>

<style lang="scss">
.vti__flag {
  margin-right: 8px;
}
.vue-tel-input-vuetify {
  display: flex;
  align-items: center;
  .country-code {
    width: 75px;
  }
  li.last-preferred {
    border-bottom: 1px solid #cacaca;
  }
  .v-text-field {
    .v-select__selections {
      position: relative;
      .vti__flag {
        position: absolute;
        margin-left: 18px;
      }
    }
    &--outlined {
      .v-select__selections {
        .vti__flag {
          margin-left: auto;
        }
      }
    }
  }
}
</style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
