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
          <v-row>
           <v-col md="6" cols="12">
   <span>Número de tarjeta</span>
     <v-text-field class="textfield" placeholder="Nombre del consultorio" outlined></v-text-field>
     </v-col>
     <v-col md="6" cols="12">
   <span>Nombre completo</span>
     <v-text-field class="textfield" placeholder="Nombre del consultorio" outlined></v-text-field>
     </v-col>
     <v-col md="4" cols="12">
   <span>Valida hasta</span>
     <v-text-field class="textfield" placeholder="Nombre del consultorio" outlined></v-text-field>
     </v-col>
     <v-col md="4" cols="12">
   <span>Código CVC</span>
     <v-text-field class="textfield" placeholder="Nombre del consultorio" outlined></v-text-field>
     </v-col>
     <v-col md="4" cols="12">
   <span>Código postal</span>
     <v-text-field class="textfield" placeholder="Nombre del consultorio" outlined></v-text-field>
     </v-col>
          </v-row>
          <v-btn height="50px" class="white--text save mt-10" color="#7900ff" large>Guardar cambios</v-btn>
   <v-btn  height="50px" class="restore mt-10 ml-3" color="#999999" outlined large>Restaurar todo</v-btn>
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