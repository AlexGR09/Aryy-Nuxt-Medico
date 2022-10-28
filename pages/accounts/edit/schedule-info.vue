<template>
    <div><v-row>
            <v-card flat max-width="155"
    >
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
        <v-col md="10" lg="9" xl="10">
          <v-card flat class="pa-3 mt-2">
                  <v-card-subtitle class="pa-3 mb-n5 mt-n2 "><H1 class="mb-5 ">CONFIGURACIÓN DE HORARIOS</H1></v-card-subtitle>
    <v-card-text class="pa-3">
      <v-row>
    <v-col md="6" cols="12">
      <span>Consultorio*</span>
        <v-autocomplete class="textfield" placeholder="Seleccione el consultorio" outlined></v-autocomplete>
    </v-col>    <v-col md="6" cols="12"></v-col>
    <v-col md="6" cols="12">
      <h1 class="mt-4 mb-4">TIPO DE HORARIO</h1>
        <v-autocomplete class="textfield" placeholder="Permanente" outlined></v-autocomplete>
    </v-col>  
    <v-col md="6" cols="12"></v-col>
    <v-col md="6" cols="12">
      <h1 class="mt-4 mb-4">HORARIOS DE CONSULTA</h1>
                    <v-btn-toggle borderless class="botones mb-n5 mt-n4">
                      <v-checkbox class="checkbox" label="Lun"></v-checkbox>   <v-checkbox class="ml-8 checkbox" label="Mar"></v-checkbox>   <v-checkbox class="ml-8 checkbox" label="Mie"></v-checkbox>   <v-checkbox class="ml-8 checkbox" label="Jue"></v-checkbox>   <v-checkbox class="ml-8 checkbox" label="Vie"></v-checkbox>   <v-checkbox class="ml-8 checkbox" label="Sab"></v-checkbox>   <v-checkbox class="ml-8 checkbox" label="Dom"></v-checkbox>
                    </v-btn-toggle>
    </v-col>    <v-col md="6" cols="12"></v-col>
    <v-col md="6" cols="12">
    <div class="form-group" v-for="(input,k) in inputs" :key="k">
      <v-row>
<p class="text mt-8 ml-6">De</p>
<v-col md="4">
      <v-dialog
        ref="dialog"
        v-model="modal2"
        :return-value.sync="time"
        persistent
        width="300px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field outlined
            v-model="time"
            placeholder="08:00 AM"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="modal2"
          v-model="time"
          full-width
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="modal2 = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="save(time)"
          >
            OK
          </v-btn>
        </v-time-picker>
      </v-dialog>
    </v-col>

    
<p class="text mt-8">A</p>
<v-col md="4">
      <v-dialog
        ref="dialog"
        v-model="modal2"
        :return-value.sync="time"
        persistent
        width="300px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field outlined
            v-model="time"
            placeholder="08:00 PM"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="modal2"
          v-model="time"
          full-width
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="modal2 = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="save(time)"
          >
            OK
          </v-btn>
        </v-time-picker>
      </v-dialog>
    </v-col>  
      <v-btn @click="add(k)" v-show="k == inputs.length-1" class="mt-6" icon color="#9966ff">
            <v-icon>mdi-plus-circle</v-icon>
          </v-btn> 
    </v-row></div></v-col>
  </v-row>
  <v-row>
    <v-col md="4" cols="12">
      <h1 class="mb-4 mt-n4">DURACIÓN DE LA CONSULTA</h1>
        <v-text-field class="textfield" placeholder="XX" outlined></v-text-field>
        
    </v-col> <p class="text mt-13 "> minutos</p> <v-col md="6" cols="12"></v-col>
  <v-col md="4" cols="12">
      <h1 class="mt-4 mb-4">TIEMPO PARA MOSTRAR AGENDA</h1>
        <v-autocomplete class="textfield mb-10" placeholder="4 semanas" outlined></v-autocomplete>
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
        inputs: [
            {
                name: ''
            }
        ],
        time: null,
      menu2: false,
      modal2: false,
        selectedItem: 1,
      }
    },
    methods: {
      save(time) {
       this.$refs.dialog[0].save(time)
    },
        add(index) {
            this.inputs.push({ name: '' });
        },
        remove(index) {
            this.inputs.splice(index, 1);
        }
    }
  }
</script>

<style>
.checkbox{
  font-family: Montserrat;
}
.text{
  font-family: MontserratBold;
  color: black;
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
  font-size: 15px;
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