<template>
  <div>
  <v-text-field outlined>
    <template #prepend-inner>
      <vue-country-code
        style="border: 0px solid #7900ff"
        enabled-country-code
        :preferred-countries="['MX', 'us', 'gb']"
        default-country="mx"
        @onSelect="onSelect"
      >
      </vue-country-code
    ></template>
  </v-text-field>
  code: {{ selectedCountry }}
</div>
</template>

<script>
import Vue from 'vue'
import VueCountryCode from 'vue-country-code'

Vue.use(VueCountryCode)
export default {
  data() {
    return {
      dialCode:'',
      selectedCountry: '',
    }
  },
  computed:{
    
  },
  methods: {
    onSelect(data) {
      this.selectedCountry = data
    },
  },
}
</script>