<template>
    <v-col md="6" cols="12">
     <h1 class="mt-4 mb-4">MÉTODOS DE PAGO</h1>
       <p class="pay mt-8">No hay métodos de pago guardados</p>
         <v-dialog v-model="dialog" max-width="1000px">
       <template v-slot:activator="{ on, attrs }">
           <v-btn  v-bind="attrs" v-on="on" class="btn ml-n5 mb-5" color="#9966ff" text><v-icon class="icon">mdi-plus-circle</v-icon>Agregar un método de pago</v-btn>
       </template>
       <v-card>
       <v-card-title>Métodos de pago</v-card-title>
       <v-card-text>
          <v-row class="ml-5">
           <v-col md="6" cols="12">
            <v-btn  class="btn ml-n5 " large color="grey"  block  outlined><v-icon class="icon">mdi-credit-card</v-icon>Pago con tarjeta</v-btn>
     </v-col>
     <v-col md="6" cols="12">
            <v-btn  class="btn ml-n5 " large color="grey" block   outlined><v-icon class="icon">mdi-credit-card</v-icon>Pago con PayPal</v-btn>
     </v-col>
     <v-col md="6" cols="12">
            <v-btn  class="btn ml-n5 mt-n2 " large color="grey"  block  outlined><v-icon class="icon">mdi-credit-card</v-icon>Pago con Apple Pay</v-btn>
     </v-col>
     <v-col md="6" cols="12">
            <v-btn large class="btn ml-n5 mt-n2 "  color="grey" block   outlined><v-icon class="icon">mdi-credit-card</v-icon>Pago con Google Pay</v-btn>
     </v-col>
          </v-row>
        
       </v-card-text>
       </v-card>
     </v-dialog>
   </v-col>
</template>

<script>
 export default {
   data () {
     return {
       dialog: false,
     }
   },
 }
</script>
<style>
p.pay{
   font-family: Montserrat;
   color: gray;
   font-size: 120%;
}
</style>