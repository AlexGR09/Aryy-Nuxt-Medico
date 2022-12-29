<template>
  <div>
    <vue-country-code
    enabledCountryCode
        @onSelect="onSelect"
        :preferredCountries="['MX', 'us', 'gb']"
        defaultCountry="mx">
   </vue-country-code>
   <p>+{{ selectedCountry.dialCode }}</p>
  </div>
</template>

<script>
import Vue from "vue";
import VueCountryCode from "vue-country-code";
Vue.use(VueCountryCode);
export default {
  data() {
    return {
      selectedCountry: ''
    };
  },
  methods: {
    onSelect(data) {
      this.selectedCountry = data;
    }
  },
}
</script>