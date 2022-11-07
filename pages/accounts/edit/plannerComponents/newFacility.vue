<template>
  <div>        
    <v-card  height="100%" flat class="pa-16 ">
      <v-card-text class="pa-16">
        <v-row class="ml-16">
          <v-form class="ml-16" ref="form" v-model="valid">
          <v-col md="1" lg="1" xl="1"></v-col>
            <v-col  md="10" lg="10" xl="10">
              <v-row>
                <v-col md="12" cols="12">
                <span>Nombre del consultorio*</span>
                  <v-text-field prepend-inner-icon="mdi-magnify" v-model="name" color="#9966ff" class="textfield" placeholder="Nombre del consultorio" outlined></v-text-field>
                  </v-col>
                  <v-col md="6" cols="12">
                <span>Teléfono para citas*</span>
                  <v-text-field v-model="phone" color="#9966ff" class="textfield" placeholder="XXX XXX XXXX" outlined></v-text-field>
                  <v-btn  class="btn ml-n5 mt-3" color="#9966ff" text><v-icon class="icon">mdi-plus-circle</v-icon>Agregar otro número</v-btn>
                  </v-col>
                  <v-col md="6" cols="12">
                <span>Extensión</span>
                  <v-text-field v-model="extension" color="#9966ff" class="textfield"  placeholder="No. Extensión" outlined></v-text-field>
                  </v-col>
                  <v-col md="4" cols="12">
                <span>Código postal*</span>
                  <v-text-field v-model="CP" color="#9966ff" maxlength="5" counter="5" class="textfield" placeholder="00000" outlined></v-text-field>
                  </v-col>
                  <v-col md="4" cols="12">
                <span>Estado*</span>
                  <v-text-field v-model="state" color="#9966ff" class="textfield" placeholder="Estado" outlined></v-text-field>
                  </v-col>
                  <v-col md="4" cols="12">
                <span>Ciudad o Municipio*</span>
                  <v-text-field v-model="city" color="#9966ff" class="textfield" placeholder="Ciudad o Municipio" outlined></v-text-field>
                  </v-col>
                  <v-col md="4" cols="12">
                <span>Colonia*</span>
                  <v-autocomplete v-model="suburb" color="#9966ff" class="textfield" placeholder="Selecciona una colonia" outlined></v-autocomplete>
                  </v-col>
                  <v-col md="8" cols="12">
                <span>Ubicación*</span>
                  <v-text-field v-model="ubication" color="#9966ff" class="textfield" placeholder="Escribe la calle avenida" outlined></v-text-field>
                  </v-col>
                  <v-col md="4" cols="12">
                <span>Número exterior*</span>
                  <v-text-field v-model="nomext" color="#9966ff" class="textfield" placeholder="Número exterior" outlined></v-text-field>
                  </v-col>
                  <v-col md="4" cols="12">
                <span>Número interior</span>
                  <v-text-field v-model="nomint" color="#9966ff" class="textfield" placeholder="Número interior" outlined></v-text-field>
                  </v-col>
                  <v-col md="4" cols="12">
                <span>Referencias*</span>
                  <v-text-field v-model="references" color="#9966ff" class="textfield" placeholder="Escribe referencias de la ubicación" outlined></v-text-field>
                  </v-col>
             </v-row>
            <v-row>
              <v-col md="6" lg="6" xl="6">
                  <H1 class="mb-5">ACCESIBILIDAD</H1>
                  <v-checkbox v-model="parking" class="vcheckbox" color="#7900ff" hide-details label="Estacionamiento con acceso al establecimiento"></v-checkbox>
                  <v-checkbox v-model="elevator" class="vcheckbox" color="#7900ff" hide-details label="Ascensor o rampa para silla de ruedas"></v-checkbox>
                  <v-checkbox v-model="ramp" class="vcheckbox" color="#7900ff" hide-details label="Rampa con acceso para silla de ruedas"></v-checkbox>
                  <v-checkbox v-model="restroom" class="vcheckbox" color="#7900ff" hide-details label="Sanitarios con accesos para silla de ruedas"></v-checkbox>
                  <v-checkbox v-model="area" class="vcheckbox" color="#7900ff" hide-details label="Área de descanso con acceso para silla de ruedas"></v-checkbox>
                  <v-checkbox v-model="sign" class="vcheckbox" color="#7900ff" hide-details label="Personal capacitado en lengua de señas"></v-checkbox>
                  <v-checkbox v-model="braille" class="vcheckbox" color="#7900ff" hide-details label="Señaletica con braile para personas invidentes"></v-checkbox>
              </v-col>
              <v-col md="6" lg="6" xl="6">
                  <H1 class="mb-5">PÚBLICOS USUALES</H1>
                  <v-checkbox v-model="lgbt" class="vcheckbox" color="#7900ff" hide-details label="Amigable con la comunidad LGBTQ+"></v-checkbox>
                  <v-checkbox v-model="trans" class="vcheckbox" color="#7900ff" hide-details label="Espacio seguro para personas transgénero"></v-checkbox>
                  <H1 class="mb-5 mt-15">SERVICIOS</H1>
                  <v-checkbox v-model="lgbt" class="vcheckbox" color="#7900ff" hide-details label="Sanitarios"></v-checkbox>
                  <v-checkbox v-model="trans" class="vcheckbox" color="#7900ff" hide-details label="Sanitario unisex"></v-checkbox>
                  <v-checkbox v-model="trans" class="vcheckbox" color="#7900ff" hide-details label="Wi-Fi"></v-checkbox>
              </v-col>
              <div class="mt-5">
                <v-btn  @click="overlay = !overlay" height="50px" class="white--text save" color="#7900ff" large>Guardar cambios</v-btn>
          <v-btn @click="reset"  height="50px" class="restore ml-3" color="#999999" outlined large>Restaurar todo</v-btn>
          <v-overlay :value="overlay">
        <v-alert class="rounded-xl" icon="mdi-check-circle" color="green">Datos actualizados correctamente.</v-alert>
      </v-overlay>
      </div>
    </v-row>
        </v-col>
        <v-col xl="1"></v-col>
      </v-form>
      </v-row>
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
        overlay: false,
        dialog: false,
        selectedItem: 1,
      }
    },
    watch: {
    overlay (val) {
      val && setTimeout(() => {
        this.overlay = false
      }, 2000)
    },
  },
    methods: {
      reset () {
        this.$refs.form.reset()
      },
    }
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
  .v-input__icon--prepend-inner .v-icon { 
  color: #999999;
  width: 50px;
}
</style>