<template>
  <div class="fondo">
    <div class="container ml-2"  align="center" justify="end">
       
        <v-row>
          <v-col cols="3" sm="1" md="2" lg="1" xl="2" class="flex-grow-0 flex-shrink-0"></v-col>
        <v-col xs="1" sm="8" md="8" lg="1" xl="9">
          <v-img :src="require('@/assets/logotipos/ISOLOGO_ARYY.svg')" class="mb-n5" max-width="150"></v-img>
  <v-stepper class="elevation-0" width="1000px" alt-labels  v-model="e1">
    <v-stepper-header class="elevation-0"  >
      <v-stepper-step color="#7900ff"
        :complete="e1 > 1"
        step="1"
      >
        Verificación
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step color="#7900ff"
        :complete="e1 > 2"
        step="2"
      >
      Formulario <p class="ml-3">registro</p>
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step color="#7900ff" step="3">
        Perfil
      </v-stepper-step>
    </v-stepper-header>
    <!-- contenido de seccion verificación | Genesis -->
    <v-stepper-items color="red" >
      <v-stepper-content  step="1">     
        <h2  align="center"
          justify="end">Crea tu perfil gratuito como especialista</h2>
        <p class="code">Ingresa el código que recibiste vía WhatsApp o SMS al número que <br/> nos proporcionaste con anterioridad. </p>
        <div  align="">
          <v-col xl="7">
          <router-link
            style="text-decoration: none
            color: inherit;"
             to="/auth/register/registerComponents/registerPatient"
            ><h3 align="left" class="a mb-13"><v-icon color="#9966ff">mdi-arrow-left</v-icon>Registrarme como paciente</h3>
          </router-link>
          <p align="left" class="mb-1 label">Celular</p>
          <v-text-field outlined
            prepend-inner-icon="mdi-flag"
            placeholder="+51 XXX XXX XXXX"
            class="textfield"
            color="#b380ff"
          ></v-text-field>
          <p align="left" class="mb-1 label">Código de verificación</p>
          <v-text-field outlined
            placeholder="Verifica tu código"
            class="textfield"
            color="#b380ff"
          ></v-text-field>
          <div align="right">
          <v-btn class="btn mt-n11 " text color="#9966ff" @click="e1 = 2">Reenviar código</v-btn>
          <br /><br />
        <v-btn width="30%" large class="white--text btn mt-n4"
          color="#7900FF"
          @click="e1 = 2"
        >
          Siguiente
        </v-btn>
      </div>
      </v-col>
      </div>
      </v-stepper-content>
    <!-- contenido de seccion formulario registro  | Genesis -->
      <v-stepper-content step="2">
        <h2  align="center"
          justify="end">Crea tu perfil gratuito como especialista</h2>
        <div  align="">
          <v-col xl="7">
            <router-link
            style="text-decoration: none
            color: inherit;"
               to="/auth/register/registerComponents/registerPatient"
            ><h3 align="left" class="a mb-13"><v-icon color="#9966ff">mdi-arrow-left</v-icon>Registrarme como paciente</h3>
          </router-link>
          <p align="left" class="mb-1 label">Especialidad*</p>
          <v-autocomplete  outlined :items="especialidades"
            placeholder="Selecciona una especialidad"
            class="textfield"
            color="#b380ff"
          ></v-autocomplete>
          <p align="left" class="mb-1 label">Estado*</p>
          <v-autocomplete  outlined :items="especialidades"
            placeholder="Selecciona un Estado"
            class="textfield"
            color="#b380ff"
          ></v-autocomplete>
          <p align="left" class="mb-1 label">Ciudad*</p>
          <v-autocomplete outlined
            placeholder="Selecciona una ciudad"
            class="textfield"
            color="#b380ff"
            :items="ciudad"
          ></v-autocomplete>
          <p align="left" class="mb-1 label">Cédula C1</p>
          <v-text-field outlined
            placeholder="Número de cédula"
            class="textfield"
            color="#b380ff"
          ></v-text-field>
          <div align="right">
            <v-checkbox class="mt-n3" v-model="check">
        <template v-slot:label>
          <div >
            He leído y aceptado los Terminos y Condiciones de uso de aryy.
          </div>
        </template>
      </v-checkbox>
        <v-btn block large class="white--text btn"
          color="#7900FF"
          @click="e1 = 3"
          :disabled="!check"
        >
          Siguiente
        </v-btn>
      </div>
      </v-col>
      </div>
      </v-stepper-content>
    <!-- contenido de seccion Perfil | Genesis -->
      <v-stepper-content step="3">
        <h2  align="center"
          justify="end">Crea tu perfil gratuito como especialista</h2>
        <div  align="">
          <v-col xl="7">
            <router-link
            style="text-decoration: none
            color: inherit;"
               to="/auth/register/registerComponents/registerPatient"
            ><h3 align="left" class="a mb-13"><v-icon color="#9966ff">mdi-arrow-left</v-icon>Registrarme como paciente</h3>
          </router-link>
          <p align="left" class="mb-1 label">Nombre (s)*</p>
          <v-text-field outlined placeholder="Escriba su nombre" class="textfield" color="#b380ff" ></v-text-field>
          <v-text-field outlined placeholder="Apellido (s)" class="textfield" color="#b380ff" ></v-text-field>
          <p align="left" class="mb-1 mt-n2 label">Fecha de nacimiento*</p>
          <!-- calendario para seleccionar fecha de nacimiento  | Genesis -->
          <v-dialog  ref="dialog"  v-model="menu2" :return-value.sync="date" width="290px">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field class="textfield" color="#b380ff" 
              v-model="date"
              outlined
              placeholder="Fecha de nacimiento*"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
          color="#9966ff"
          locale="MX-ES"
            v-model="date"
            
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="#b380ff"
              @click="modal = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="#b380ff"
              @click="$refs.dialog.save(date)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-dialog>
        <p align="left" class="mb-1 mt-n2 label">Consultorio*</p>
          <v-text-field outlined
            placeholder="Nombre del consultorio o clínica"
            class="textfield"
            color="#b380ff"
          ></v-text-field>
          <p align="left" class="mb-1 mt-n2 label">Dirección*</p>
          <v-autocomplete  outlined :items="especialidades"
            placeholder="Dirección de consultorio o clínica"
            class="textfield"
            color="#b380ff"
          ></v-autocomplete>
        <v-btn block large class="white--text btn"
          color="#7900FF"
          href="/"
        >
          Registrarme
        </v-btn>
      </v-col>
      </div>

      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</v-col> 
<v-col cols="3" sm="1" md="2" lg="1" xl="1"  class="flex-grow-0 flex-shrink-1" ></v-col>
</v-row>
</div>
</div>
</template>

<script>
  export default {
    layout: "auth",
    data () {
      return {
        check: "",
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        especialidades: ['Acupuntura', 'Alergología', 'Anatomopatología', 'Anestesiología', 'Angiología', 'Audiología', 'Cardiología', 'Cardiología Pediátrica', 'Cirugía Cardiovascular y Torácica', 'Cirugía de la Mano', 'Cirugía Estética y Cosmética', 'Cirugía General', 'Cirugía Maxilofacial', 'Cirugía Oncológica', 'Cirugía Pediátrica', 'Cirugía Plástica', 'Dermatología', 'Dermatología Pediátrica', 'Diabetología', 'Endocrinología', 'Endoscopía', 'Enfermería', 'Fisioterapia', 'Gastroenterología', 'Gastroenterología Pediátrica', 'Genética', 'Geriatría', 'Ginecología Oncológica', 'Ginecología y Obstetricia', 'Hematología', 'Hematología Pediátrica', 'Homeopatía', 'Infectología', 'Infectología Pediátrica', 'Inmunología', 'Laboratorios Análisis Clínicos', 'Logopedia', 'Terapia Complementaria', 'Medicina Crítica y Terapia Intensiva', 'Medicina del Deporte', 'Medicina del Trabajo', 'Medicina Estética', 'Medicina Familiar', 'Medicina General', 'Medicina Integrada', 'Medicina Interna', 'Medicina Nuclear', 'Naturismo', 'Nefrología', 'Nefrología pediátrica', 'Neonatología', 'Neumología', 'Neumología pediátrica', 'Neurocirugía', 'Neurofisiología', 'Neurología', 'Neurología pediátrica', 'Nutrición', 'Nutriología clínica', 'Obesidad y delgadez', 'Odontología', 'Oftalmología', 'Oftalmología pediátrica', 'Oncología', 'Oncología pediátrica', 'Optometrismo', 'Ortopedia', 'Ortopedia infantil', 'Otorrinolaringología', 'Patología clínica', 'Pediatría', 'Podiatría', 'Podología', 'Proctología', 'Psicoanálisis', 'Psicología', 'Psicopedagogía', 'Psiquiatría', 'Psiquiatría infantil', 'Quiropráctica', 'Radiología', 'Radioterapia', 'Rehabilitación y Medicina física', 'Reumatología', 'Sexología', 'Algología', 'Traumatología y Ortopedia', 'Urgenciología', 'Urología', 'Reumatología pediátrica', 'Urología pediátrica', 'Cirugía Torácica', 'Radiooncología', 'Epidemiología', 'Odontología pediátrica', 'Cirugía Bariátrica', 'Foniatría', 'Otorrinolaringología pediátrica', 'Patología bucal', 'Alergología Pediátrica', 'Alergología e Inmunología', 'Bariatría', 'Coloproctología', 'Gastroenterología Endoscópica', 'Radiología Intervencionista', 'Spa'],
        e1: 1,
      }
    },
  }
</script>
<style>
.fondo{
  height: 100%;
  color: white;
  background: white;
}
h2{
  color: #4f565f;
  font-family: MontserratBold;
}
h3{
   font-family: "MontserratLight";
      margin-top: 10px;
      font-size: 100%;
      margin-bottom: 10px;
      color: #9966ff;
}
p.code{
  font-family: MontserratMedium;
  color: #4f565f;
}
.label{
  color: #999999;
  font-family: Montserrat;
}
.btn{
  font-family: MontserratMedium;
  text-transform: unset !important;
}
</style>