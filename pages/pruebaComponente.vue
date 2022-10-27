<template>
  <v-container>
   <code-country/>
  </v-container>
</template>

<script>
import codeCountry from '~/components/codeCountry.vue';
export default {
  name: "Example",
  components: {
    codeCountry,
  },
  data() {
    return {
      phone: {
        number: "",
        valid: false,
        country: undefined
      }
    };
  },
  methods: {
    onInput(formattedNumber, { number, valid, country }) {
      this.phone.number = number.international;
      this.phone.valid = valid;
      this.phone.country = country && country.name;
    }
  }
};
</script>