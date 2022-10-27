<template>
    <v-row justify="center">
      <v-date-picker  locale="mx-es" v-model="picker" no-title prev-icon='$prev'></v-date-picker>
    </v-row>
  </template>
  
  <script>
    export default {
      data () {
        return {
          picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        }
      },
    }
  </script>