<template>
    <div>        
  <v-card height="570px" flat class="pa-7">
    <v-card-subtitle class="pa-3  mt-n2 mb-n10"><H1 class="mb-5">CONSULTORIOS</H1></v-card-subtitle>
    <v-card-text 
    class="pa-3 "
    ><v-row><v-col>
      <v-list flat>
      </v-list></v-col></v-row>
    <v-row>
    <v-col md="6" cols="12">
    <span>Nombre del consultorio*</span>
      <v-text-field class="textfield" placeholder="Nombre del consultorio" outlined></v-text-field>
      </v-col>
      <v-col md="6" cols="12"></v-col>
      <v-col md="6" cols="12">
    <span>Teléfono para citas*</span>
      <v-text-field class="textfield" placeholder="XXX XXX XXXX" outlined></v-text-field>
      <v-btn  class="btn ml-n5 mt-3" color="#9966ff" text><v-icon class="icon">mdi-plus-circle</v-icon>Agregar otro número</v-btn>
      </v-col>
      <v-col md="6" cols="12">
    <span>Extensión</span>
      <v-text-field class="textfield"  placeholder="No. Extensión" outlined></v-text-field>
      </v-col>
      <v-col md="4" cols="12">
    <span>Código postal*</span>
      <v-text-field  maxlength="5" counter="5" class="textfield" placeholder="Nombre del consultorio" outlined></v-text-field>
      </v-col>
      <v-col md="4" cols="12">
    <span>Estado*</span>
      <v-text-field class="textfield" placeholder="Nombre del consultorio" outlined></v-text-field>
      </v-col>
      <v-col md="4" cols="12">
    <span>Ciudad o Municipio*</span>
      <v-text-field class="textfield" placeholder="Nombre del consultorio" outlined></v-text-field>
      </v-col>
      <v-col md="4" cols="12">
    <span>Colonia*</span>
      <v-autocomplete class="textfield" placeholder="Nombre del consultorio" outlined></v-autocomplete>
      </v-col>
      <v-col md="8" cols="12">
    <span>Ubicación*</span>
      <v-text-field class="textfield" placeholder="Nombre del consultorio" outlined></v-text-field>
      </v-col>
      <v-col md="4" cols="12">
    <span>Número exterior*</span>
      <v-text-field class="textfield" placeholder="Nombre del consultorio" outlined></v-text-field>
      </v-col>
      <v-col md="4" cols="12">
    <span>Número interior</span>
      <v-text-field class="textfield" placeholder="Nombre del consultorio" outlined></v-text-field>
      </v-col>
      <v-col md="4" cols="12">
    <span>Referencias*</span>
      <v-text-field  class="textfield" placeholder="Nombre del consultorio" outlined></v-text-field>
      </v-col>
    </v-row>
    <br/><br/>
    <v-row>
        <v-col md="6" lg="6" xl="6">
            <H1 class="mb-5">ACCESIBILIDAD</H1>
            <v-checkbox class="vcheckbox" color="#7900ff" hide-details label="Ascensor o rampa para silla de ruedas"></v-checkbox>
            <v-checkbox class="vcheckbox" color="#7900ff" hide-details label="Sanitarios con accesos para silla de ruedas"></v-checkbox>
            <v-checkbox class="vcheckbox" color="#7900ff" hide-details label="Área de descanso con acceso para silla de ruedas"></v-checkbox>
            <v-checkbox class="vcheckbox" color="#7900ff" hide-details label="Personal capacitado en lengua de señas"></v-checkbox>
            <v-checkbox class="vcheckbox" color="#7900ff" hide-details label="Señaletica con braile para personas invidentes"></v-checkbox>
        </v-col>
        <v-col md="6" lg="6" xl="6">
            <H1 class="mb-5">PÚBLICOS USUALES</H1>
            <v-checkbox class="vcheckbox" color="#7900ff" hide-details label="Amigable con la comunidad LGBTQ+"></v-checkbox>
            <v-checkbox class="vcheckbox" color="#7900ff" hide-details label="Espacio seguro para personas transgénero"></v-checkbox>
        </v-col>
    </v-row>
    <br/><br/>
    <v-btn height="50px" class="white--text save" color="#7900ff" large>Guardar cambios</v-btn>
    <v-btn  height="50px" class="restore ml-3" color="#999999" outlined large>Restaurar todo</v-btn>
    </v-card-text>
   </v-card>
 
</div>
</template>
<script>
  export default {
    components: {
},
    data () {
      return {
        selectedItem: 1,
      }
    },
  }
</script>

<style>
.vcheckbox{
    font-family: Montserrat;
}
.bgactive{
  background: #7900ff;
  color: white !important;
  fill: white !important;
}
.list-item {
  margin-top: 1em;
}
.titlee {
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  text-transform: unset !important;
  color: black;
}
.titlee:hover {

  color: #ffffff;
}
.v-list-item:hover {
  background: #7900ff;
}

.item-active {
  background-color: #7900ff;
  color: white !important;
}
  a{
      text-decoration: none !important;
    }
.save{
    font-family: Montserrat;
    text-transform: unset !important;
}
.restore{
    font-family: Montserrat;
    text-transform: unset !important;
}
.btn{
    font-family: Montserrat;
    text-transform: unset !important;
    color: #9966ff;
}
.textfield{
      height: 50px;
      width: 100%;
      font-size: .9rem;
      font-family: Montserrat;
    }
  H1{
    font-family: MontserratBold;
    font-size: 120%;
  }  
  span{
    font-family: Montserrat;
    font-size: 120%;
  }
</style>