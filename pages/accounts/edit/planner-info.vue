<template>
    <div><v-row>
        <v-col md="1" lg="3" xl="2">
            <v-card flat max-width="155">
    <v-list class="list-item" active-class="bgactive">
        <v-list-item-group
          v-model="selectedItem"
          color="#7900ff"
        >
          <v-list-item to="/accounts/edit/planner-info">
            <v-list-item-content active-class="bgactive">
              <v-list-item-title  class="titlee" >CONSULTORIOS</v-list-item-title>
            </v-list-item-content >
          </v-list-item>
          <v-list-item to="/accounts/edit/schedule-info">
            <v-list-item-content active-class="bgactive">
              <v-list-item-title  class="titlee">HORARIOS</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
        </v-col>
        <v-col md="10" lg="9" xl="10">
                
  <v-card flat
    class="pa-3 ml-n16 mt-2"
  >
    <v-card-subtitle class="pa-3 ml-n16 mt-n2 mb-n10"><H1 class="mb-5">CONSULTORIOS</H1></v-card-subtitle>
    <v-card-text 
    class="pa-3 ml-n16"
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
      <v-btn  class="btn ml-n5 mt-3"  text><v-icon class="icon">mdi-plus-circle</v-icon>Agregar otro número</v-btn>
      </v-col>
      <v-col md="6" cols="12">
    <span>Extensión</span>
      <v-text-field class="textfield"  placeholder="No. Extensión" outlined></v-text-field>
      </v-col>
      <v-col md="4" cols="12">
    <span>Código postal*</span>
      <v-text-field counter="5" class="textfield" placeholder="Nombre del consultorio" outlined></v-text-field>
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
      <v-btn  class="btn ml-n5 mt-3"  text><v-icon class="icon">mdi-plus-circle</v-icon>Agregar otro consultorio</v-btn>
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
    <v-btn height="50px" class="white--text save" color="#7900ff" large>Guardar cambios</v-btn>
    <v-btn  height="50px" class="restore ml-3" color="#999999" outlined large>Restaurar todo</v-btn>
    </v-card-text>
   </v-card>
        </v-col>
    </v-row>
 
</div>
</template>
<script>
  export default {
    data () {
      return {
        selectedItem: 1,
      }
    },
  }
</script>

<style>

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
    font-size: 150%;
  }  
  span{
    font-family: Montserrat;
    font-size: 120%;
  }
</style>