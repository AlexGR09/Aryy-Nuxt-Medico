<template>
  <div>
    <v-row >
    <v-card flat >
      <v-date-picker color="#9966ff" class="v-date-picker"  locale="mx-es" v-model="picker" no-title ></v-date-picker>
    </v-card>
  </v-row>
  </div>
   
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
  <style>
  .v-date-picker{
    font-family: Montserrat;
  }
 
  </style>