<template>
  <v-form
    ref="form"
    v-model="valid"
  >
   
  <v-row>
      <v-card flat>
        <menu-med/>
      </v-card>
      <v-col md="10" lg="10" xl="10">          
        <v-card flat class="pa-3 mt-2">
          <v-card-subtitle class="pa-3  mt-n2 mb-n10"><H1 class="mb-5">FORMACIÓN ACADÉMICA</H1></v-card-subtitle>
        <v-form ref="form" v-model="valid">
            <v-card-text class="pa-3 mt-5 ">
              <v-row>
                <v-col md="6" lg="6" xl="6" cols="12">
                  <span>Especialidad*</span>
                  <v-autocomplete v-model="specialty" color="#9966ff" class="textfield " placeholder="Selecciona una especialidad" outlined></v-autocomplete>
                </v-col> 
                <v-col md="6" lg="6" xl="6" cols="12"></v-col>
                <v-col md="6" lg="6" xl="6" cols="12">
                  <span >Subespecialidad (opcional)</span>
                  <v-autocomplete v-model="subspecialty" color="#9966ff" class="textfield" placeholder="Añadir" outlined></v-autocomplete>
                  <v-btn class="btn ml-n5 mt-3" color="#9966ff" text><v-icon class="icon">mdi-plus-circle</v-icon>Añadir otra</v-btn>
                </v-col>
                <v-col md="6" lg="6" xl="6" cols="12">
                  <span >Subespecialidad (opcional)</span>
                  <v-autocomplete v-model="subespeciality2" color="#9966ff" class="textfield" placeholder="Añadir" outlined></v-autocomplete>
                  <v-btn class="btn ml-n5 mt-3" color="#9966ff" text><v-icon class="icon">mdi-plus-circle</v-icon>Añadir otra</v-btn>
                </v-col>
                <v-col md="6" lg="6" xl="6" cols="12">
                    <p class="cedu mt-n4 mb-n1">No. de cedula*</p>
                  <v-text-field v-model="identification" color="#9966ff" class="textfield mt-1" placeholder="00000000" outlined></v-text-field> </v-col>
                  <v-col md="6" lg="6" xl="6" cols="12">
                    <p class="cedu mt-n4 mb-n1">Institución que otorgó la cédula*</p>
                  <v-text-field v-model="institution" color="#9966ff"  class="textfield mt-1" placeholder="Escribe el nombre de la institución" outlined></v-text-field>
                  </v-col>
                  <v-col md="6" lg="6" xl="6" cols="12">
                    <p class="cedu mb-1">Foto de cedula*</p>
                  <v-file-input v-model="fileIden" chips color="#9966ff" class="textfield" placeholder="Añadir archivo" outlined></v-file-input >
                    <v-input class="input mb-n4">Formatos pemitidos: JPG o PNG. Tamaño máximo de archivo 2 MB</v-input>
                    <v-btn class="btn ml-n5 mb-n4" color="#9966ff" text><v-icon class="icon">mdi-plus-circle</v-icon>Añadir otra cédula</v-btn>
                  </v-col><v-col md="6" lg="6" xl="6" cols="12"></v-col>
                <!-- 
                 
                </v-col> -->
                <v-col xl="12">
                    <span >Sobre mi(opcional)</span>
                    <v-textarea v-model="aboutme" maxlength="400" counter="400" auto-grow placeholder="Escribe una biografía breve sobre ti" outlined class="textfield mb-16"></v-textarea> 
                </v-col>
             
                </v-row>
                <v-btn  @click="overlay = !overlay" height="50px" class="white--text save mt-7" color="#7900ff" large>Guardar cambios</v-btn>
      <v-btn  height="50px" class="restore ml-3 mt-7" color="#999999" outlined large>Restaurar todo</v-btn>
      <v-overlay :value="overlay">
        <v-alert class="rounded-xl" icon="mdi-check-circle" color="green">Datos actualizados correctamente.</v-alert>
      </v-overlay>
    <H1 class="mb-5 mt-8">CERTIFICADOS</H1>
    <VueFileAgent  :multiple="true" :deletable="true" :helpText="'Selecciona o arrastra tus archivos aquí'" :uploadUrl="uploadUrl" v-model="fileRecords"></VueFileAgent>
<!--     <H1 class="mb-5 mt-8">RECETA MÉDICA*</H1>
    <v-row>
      <v-col xl="6"> <span>Logotipo propio</span> <v-file-input class="textfield" placeholder="Añadir archivo" outlined></v-file-input >   <v-input class="input">Formatos permitidos: PDF, JPG O PNG. Tamaño máximo de archivo 5 MB.</v-input></v-col>    
      <v-col xl="6">  <span>Grupo médico (opcional)</span><v-file-input class="textfield" placeholder="Añadir archivo" outlined></v-file-input >   <v-input class="input">Formatos permitidos: PDF, JPG O PNG. Tamaño máximo de archivo 5 MB.</v-input></v-col>
    </v-row> -->
   
    <BR/><BR/>
   <v-btn  @click="overlay = !overlay" height="50px" class="white--text save mt-7" color="#7900ff" large>Guardar cambios</v-btn>
      <v-btn  height="50px" class="restore ml-3 mt-7" color="#999999" outlined large>Restaurar todo</v-btn>
      <v-overlay :value="overlay">
        <v-alert class="rounded-xl" icon="mdi-check-circle" color="green">Datos actualizados correctamente.</v-alert>
      </v-overlay> 
    
  </v-card-text>
</v-form> 
        </v-card>
      </v-col>
    </v-row>


    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

  </v-form>
</template>

<script>
import Vue from 'vue';
import VueFileAgent from 'vue-file-agent';
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css';
Vue.use(VueFileAgent);
Vue.use(VueFileAgentStyles);
  export default {
    data: () => ({
      valid: true,
      overlay: false,
        fileRecords: [],
        uploadUrl: 'https://example.com',
        selectedItem: 1,
      name: '',
  
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>