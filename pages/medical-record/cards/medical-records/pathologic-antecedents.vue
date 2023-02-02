<!-- seccion de antecedentes patologicos dentro de medical record | Genesis -->
<template>
  <v-card-text class="mb-6">
    <p class="titulo">Antecedentes patológicos</p>
    <div class="mb-2 mt-n11 d-flex justify-end">
      <!--   agregar informacion | Genesis -->
      <v-dialog persistent v-if="this.msg" scrollable v-model="editt" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon color="#9966ff">mdi-plus-circle</v-icon>
          </v-btn>
        </template>
        <v-card max-height="600px">
          <v-card-title class="d-flex justify-space-between flex-wrap">
             <!--  span a mostrar en pantallas md/lg | Genesis -->
             <div class="hidden-sm-and-down">
            <span >ANTECEDENTES PATOLÓGICOS</span><br/> </div>
            <div class="hidden-md-and-up">
           <!--    span a mostrar en pantallas xs/sm | Genesis -->
            <span >ANTECEDENTES <br/> PATOLÓGICOS</span><br/> </div>
                  <v-btn
                    dark
                    icon
                    color="grey"
                    @click="reloadPage"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4" xl="12">
                  <p class="cuestion mb-n3">Cirugías previas</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="surgery"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" value="No" @click="surgeriesStatus"></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-model="previous_surgeries"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="surgery == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n4 mb-n3">Transfusiones</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="transfusion"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                      color="#b380ff"
                      label="No"
                      value="No"
                      @click="transfusionsStatus"
                    ></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-model="blood_transfusions"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="transfusion == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n4 mb-n3">Diabetes</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="diabetesradio"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="diabetesStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-model="diabetes"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="diabetesradio == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n4 mb-n3">Cardiopatías</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="disease"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" value="No" @click="diseaseStatus"></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-model="heart_diseases"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="disease == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                  <p class="cuestion mt-n4 mb-n3">
                    Presión arterial alta o baja
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="blood_pressure"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Hipertensión"
                      value="Hipertension"
                    ></v-radio>
                    <v-radio
                      color="#b380ff"
                      label="Hipotensión"
                      value="Hipotension"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" value="No"></v-radio>
                  </v-radio-group>

                  <p class="cuestion mt-n4 mb-n3">
                    Enfermedades tiroideas
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="thyroid"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                      color="#b380ff"
                      label="No"
                      value="No"
                      @click="thyroidStatus"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="thyroid_diseases"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="thyroid == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                    <p class="cuestion mt-n4 mb-n3">
                    Cáncer
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="cancerradio"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                      color="#b380ff"
                      label="No"
                      value="No"
                      @click="cancerStatus"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="cancer"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="cancerradio == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                    <p class="cuestion mt-n4 mb-n3">
                    Enfermedades de la sangre
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="blood"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="bloodStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="blood_diseases"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="blood == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                    <p class="cuestion mt-n4 mb-n3">
                    Cálculos renales
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="kidney"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="kidneyStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="kidney_stones"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="kidney == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                    <p class="cuestion mt-n4 mb-n3">
                    Hepatitis
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="hepatitisRadio"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="hepatitisStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="hepatitis"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="hepatitisRadio == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                    <p class="cuestion mt-n4 mb-n3">
                    Traumatismos
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="traumaRadio"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="traumaStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="trauma"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="traumaRadio == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                    <p class="cuestion mt-n4 mb-n3">
                    Patologías respiratorias
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="respiratory"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="respiratoryStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="respiratory_diseases"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="respiratory == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                    <p class="cuestion mt-n4 mb-n3">
                    Patologías gastrointestinales
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="gastrointestinal"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="gastrointestinalStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="gastrointestinal_pathologies"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="gastrointestinal == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n4 mb-n3">
                    Enfermedades de transmisión sexual
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="etsRadio"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="etsStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="ets"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="etsRadio == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="mt-n10 ml-5 mr-5">
            <v-row>
             
              <v-col cols="12">
                <v-btn
              block
              @click="add"
              height="50px"
              class="white--text save"
              color="#7900ff"
              large
              >Guardar cambios</v-btn
            > </v-col>
            <v-col  cols="12">
               <v-alert v-model="incompleto" class="mt-n4"
                style="font-family: Montserrat; background-color: white !important"
                dense
                outlined
                type="error"
              >
                Datos incompletos, <strong>vuelva a intentarlo.</strong>
              </v-alert>
             </v-col>
             <v-overlay :value="overlay">
                <v-alert
                  class="rounded-xl"
                  icon="mdi-check-circle"
                  color="green"
                  >Datos actualizados correctamente.</v-alert
                >
              </v-overlay>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!--   editar informacion | Genesis -->
      <v-dialog persistent v-else scrollable v-model="editt" max-height="600px" max-width="600px">
       
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <img
              width="24"
              height="24"
              :src="require('@/assets/icons/icon_edit.svg')"
            />
          </v-btn>
        </template>
        <v-card max-height="600px">
          <v-card-title class="d-flex justify-space-between flex-wrap">
               <!--  span a mostrar en pantallas md/lg | Genesis -->
            <div class="hidden-sm-and-down">
            <span >ANTECEDENTES PATOLÓGICOS</span><br/> </div>
            <div class="hidden-md-and-up">
           <!--    span a mostrar en pantallas xs/sm | Genesis -->
            <span >ANTECEDENTES <br/> PATOLÓGICOS</span><br/> </div>
                  <v-btn
                    dark
                    icon
                    color="grey"
                    @click="reloadPage"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4" xl="12">
                  <p class="cuestion mb-n3">Cirugías previas</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="surgery"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio @click="surgeriesStatus" color="#b380ff" label="No" value="No"></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-model="previous_surgeries"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="surgery == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n4 mb-n3">Transfusiones </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="transfusion"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="transfusionsStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-model="blood_transfusions"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="transfusion == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n4 mb-n3">Diabetes</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="diabetesradio"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="diabetesStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-model="diabetes"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="diabetesradio == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n4 mb-n3">Cardiopatías</p>
             <v-radio-group
                    style="font-family: Montserrat"
                    v-model="disease"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio @click="diseaseStatus" color="#b380ff" label="No" value="No"></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-model="heart_diseases"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="disease == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                  <p class="cuestion mt-n4 mb-n3">
                    Presión arterial alta o baja
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="blood_pressure"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Hipertensión"
                      value="Hipertension"
                    ></v-radio>
                    <v-radio
                      color="#b380ff"
                      label="Hipotensión"
                      value="Hipotension"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" value="No"></v-radio>
                  </v-radio-group>

                  <p class="cuestion mt-n4 mb-n3">
                    Enfermedades tiroideas
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="thyroid"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="thyroidStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="thyroid_diseases"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="thyroid == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                    <p class="cuestion mt-n4 mb-n3">
                    Cáncer
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="cancerradio"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="cancerStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="cancer"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="cancerradio == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                    <p class="cuestion mt-n4 mb-n3">
                    Enfermedades de la sangre
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="blood"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="bloodStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="blood_diseases"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="blood == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                    <p class="cuestion mt-n4 mb-n3">
                    Cálculos renales
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="kidney"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="kidneyStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="kidney_stones"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="kidney == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                    <p class="cuestion mt-n4 mb-n3">
                    Hepatitis
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="hepatitisRadio"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="hepatitisStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="hepatitis"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="hepatitisRadio == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                    <p class="cuestion mt-n4 mb-n3">
                    Traumatismos
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="traumaRadio"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="traumaStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="trauma"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="traumaRadio == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                    <p class="cuestion mt-n4 mb-n3">
                    Patologías respiratorias
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="respiratory"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="respiratoryStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="respiratory_diseases"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="respiratory == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                    <p class="cuestion mt-n4 mb-n3">
                    Patologías gastrointestinales
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="gastrointestinal"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="gastrointestinalStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="gastrointestinal_pathologies"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="gastrointestinal == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n4 mb-n3">
                    Enfermedades de transmisión sexual
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="etsRadio"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="etsStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="ets"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="etsRadio == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                </v-col>

               
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="mt-n10 ml-5 mr-5">
            <v-row>
             
              <v-col cols="12">
                <v-btn
              block
              v-on:click="update"
              height="50px"
              class="white--text save"
              color="#7900ff"
              large
              >Guardar cambios</v-btn
            > </v-col>
            <v-col  cols="12">
               <v-alert v-model="incompleto" class="mt-n4"
                style="font-family: Montserrat; background-color: white !important"
                dense
                outlined
                type="error"
              >
                Datos incompletos, <strong>vuelva a intentarlo.</strong>
              </v-alert>
             </v-col>
             <v-overlay    :value="overlay">
                <v-alert
            
                  class="rounded-xl"
                  icon="mdi-check-circle"
                  color="green"
                  >Datos actualizados correctamente.</v-alert
                >
              </v-overlay>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-divider class="mt-n1"></v-divider>
    <list-pathologic/>
    <p class="ml-3 mb-n1 mt-n1 d-flex justify-end">
      <img
        class="mr-3"
        width="20"
        :src="require('@/assets/icons/icon_timestamp.svg')"
      />Editado el 25 de diciembre de 2022
    </p>
  </v-card-text>
</template>
<script>
import listPathologic from '~/components/data-list-medicalrecord/list-pathologic.vue'
export default {
  layout: 'medicalRecord',
  components: {listPathologic},
  data() {
    return {
      blood_diseases: '',
      incompleto: false,
      overlay: false,
      dialog: false,
      editt: false,
      surgery: '',
      blood:'',
      diabetesradio: '',
      cancerradio: '',
      transfusion: '',
      thyroid: '',
      respiratory: '',
      gastrointestinal: '',
      disease: '',
      kidney: '',
      msg:'',
      blood_pressure:'',
      hepatitisRadio: '',
      etsRadio: '',
        blood_transfusions:'',
        cancer:'',
        traumaRadio:'',
        diabetes:'',
        ets:'',
        gastrointestinal_pathologies:'',
        heart_diseases:'',
        hepatitis:'',
        kidney_stones:'',
        previous_surgeries:'',
        respiratory_diseases:'',
        thyroid_diseases:'',
        trauma:'',
        errordata:'',
    }
  },
  mounted() {
    this.datos()
  },
  methods: {
    /* actualizar informacion | Genesis */
    datos() {
      this.$axios
        .get(
          `api/v1/medical-history/physician/pathological-background/patient/${this.$route.params.medicalRecord}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.blood_pressure = res.data.data.blood_pressure
          this.blood_transfusions = res.data.data.blood_transfusions
          this.cancer = res.data.data.cancer
          this.blood_diseases = res.data.data.blood_diseases
          this.diabetes = res.data.data.diabetes
          this.ets = res.data.data.ets
          this.gastrointestinal_pathologies = res.data.data.gastrointestinal_pathologies
          this.heart_diseases = res.data.data.heart_diseases
          this.hepatitis = res.data.data.hepatitis
          this.kidney_stones = res.data.data.kidney_stones
          this.previous_surgeries = res.data.data.previous_surgeries
          this.respiratory_diseases = res.data.data.respiratory_diseases
          this.thyroid_diseases = res.data.data.thyroid_diseases
          this.trauma = res.data.data.trauma
          this.msg=res.data.msg
          


          /* metodos de status para los radio groups | Genesis */
          this.surgeriesStatus()
          this.transfusionsStatus()
          this.diabetesStatus()
          this.diseaseStatus()
          this.cancerStatus()
          this.thyroidStatus()
          this.kidneyStatus()
          this.hepatitisStatus()
          this.traumaStatus()
          this.respiratoryStatus()
          this.gastrointestinalStatus()
          this.etsStatus()
          this.bloodStatus()
        })
    }, 

      add() {
      this.$axios
        .post(
          'api/v1/medical-history/physician/pathological-background/', {
            patient_id: this.$route.params.medicalRecord,
          previous_surgeries: this.previous_surgeries,
          blood_transfusions: this.blood_transfusions,
          diabetes: this.diabetes,
          heart_diseases: this.heart_diseases,
          blood_pressure: this.blood_pressure,
          thyroid_diseases: this.thyroid_diseases,
          cancer: this.cancer,
          blood_diseases: this.blood_diseases,
          kidney_stones: this.kidney_stones,
          hepatitis: this.hepatitis,
          trauma: this.trauma,
          respiratory_diseases: this.respiratory_diseases,
          ets: this.ets,
          gastrointestinal_pathologies: this.gastrointestinal_pathologies,
          
      
        },
        {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          })
          .then(
            this.surgeriesStatus(),
          this.transfusionsStatus(),
          this.diabetesStatus(),
          this.diseaseStatus(),
          this.cancerStatus(),
          this.thyroidStatus(),
          this.kidneyStatus(),
          this.hepatitisStatus(),
          this.traumaStatus(),
          this.respiratoryStatus(),
          this.gastrointestinalStatus(),
          this.etsStatus(),
          this.bloodStatus(),
          this.overlay = true,
          this.incompleto=false,
      )
      .catch((error)=>{
          this.errordata = ''
          this.errordata = error.response.data.errors
          this.incompleto=true
        })
    },
    reloadPage(){
        this.$router.go()
    },
    update() {
      this.$axios
        .put(
          `api/v1/medical-history/physician/pathological-background/patient/${this.$route.params.medicalRecord}`, {
       
          previous_surgeries: this.previous_surgeries,
          blood_transfusions: this.blood_transfusions,
          diabetes: this.diabetes,
          heart_diseases: this.heart_diseases,
          blood_pressure: this.blood_pressure,
          thyroid_diseases: this.thyroid_diseases,
          cancer: this.cancer,
          blood_diseases: this.blood_diseases,
          kidney_stones: this.kidney_stones,
          hepatitis: this.hepatitis,
          trauma: this.trauma,
          respiratory_diseases: this.respiratory_diseases,
          ets: this.ets,
          gastrointestinal_pathologies: this.gastrointestinal_pathologies,
      
        },
        {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          })
          .then(
          this.incompleto=false,

            this.surgeriesStatus(),
          this.transfusionsStatus(),
          this.diabetesStatus(),
          this.diseaseStatus(),
          this.cancerStatus(),
          this.thyroidStatus(),
          this.kidneyStatus(),
          this.hepatitisStatus(),
          this.traumaStatus(),
          this.respiratoryStatus(),
          this.gastrointestinalStatus(),
          this.etsStatus(),
          this.bloodStatus(),
          this.overlay = true,
      ) .catch((error)=>{
          this.errordata = ''
          this.errordata = error.response.data.errors
          this.incompleto=true
        })
    },

 /*    metodos de status para los radio groups | Genesis */
    surgeriesStatus(){
      if(this.previous_surgeries === "No"){
        this.surgery="No"
      }else if(this.surgery==="No"){
        this.previous_surgeries="No"
      }
      else if(this.msg){
        this.surgery=""
      }
      else{
        this.surgery="Si"
      }
    },
    transfusionsStatus(){
      if(this.blood_transfusions === "No"){
        this.transfusion = "No"
      }else if(this.transfusion==="No"){
        this.blood_transfusions="No"
      }else if(this.msg){
        this.transfusion=""
      }
      else{
        this.transfusion = "Si"
      }
    },
    diabetesStatus(){
      if(this.diabetes === "No"){
        this.diabetesradio="No"
      }else if(this.diabetesradio==="No"){
        this.diabetes="No"
      }else if(this.msg){
        this.diabetes=""
      }
      else{
        this.diabetesradio="Si"
      }
    },
    diseaseStatus(){
      if(this.heart_diseases === "No"){
        this.disease="No"
      }else if(this.disease==="No"){
        this.heart_diseases="No"
      }else if(this.msg){
        this.disease=""
      }
      else{
        this.disease="Si"
      }
    },
    bloodStatus(){
      if(this.blood_diseases === "No"){
        this.blood="No"
      }else if(this.blood==="No"){
        this.blood_diseases="No"
      }else if(this.msg){
        this.blood=""
      }
      else{
        this.blood="Si"
      }
    },
    cancerStatus(){
      if(this.cancer ==="No"){
        this.cancerradio="No"
      }else if(this.cancerradio==="No"){
        this.cancer="No"
      }else if(this.msg){
        this.cancer=""
      }
      else{
        this.cancerradio="Si"
      }
    },
    thyroidStatus(){
      if(this.thyroid_diseases==="No"){
        this.thyroid="No"
      }else if(this.thyroid==="No"){
        this.thyroid_diseases="No"
      }else if(this.msg){
        this.thyroid=""
      }
      else{
        this.thyroid="Si"
      }
    },
    kidneyStatus(){
      if(this.kidney_stones==="No"){
        this.kidney="No"
      }else if(this.kidney==="No"){
        this.kidney_stones="No"
      }else if(this.msg){
        this.kidney=""
      }
      else{
        this.kidney="Si"
      }
    },
    hepatitisStatus(){
      if(this.hepatitis==="No"){
        this.hepatitisRadio="No"
      }else if(this.hepatitisRadio==="No"){
        this.hepatitis="No"
      }else if(this.msg){
        this.hepatitis=""
      }
      else{
        this.hepatitisRadio="Si"
      }
    },
    traumaStatus(){
      if(this.trauma==="No"){
        this.traumaRadio="No"
      }else if(this.traumaRadio==="No"){
        this.trauma="No"
      }else if(this.msg){
        this.trauma=""
      }
      else{
        this.traumaRadio="Si"
      }
    },
    respiratoryStatus(){
      if(this.respiratory_diseases==="No"){
        this.respiratory="No"
      }else if(this.respiratory==="No"){
        this.respiratory_diseases="No"
      }else if(this.msg){
        this.respiratory=""
      }
      else{
        this.respiratory="Si"
      }
    },
    gastrointestinalStatus(){
      if(this.gastrointestinal_pathologies==="No"){
        this.gastrointestinal="No"
      }else if(this.gastrointestinal==="No"){
        this.gastrointestinal_pathologies="No"
      }else if(this.msg){
        this.gastrointestinal=""
      }
      else{
        this.gastrointestinal="Si"
      }
    },
    etsStatus(){
      if(this.ets==="No"){
        this.etsRadio="No"
      } else if(this.etsRadio==="No"){
        this.ets="No"
      }else if(this.msg){
        this.ets=""
      }
      else{
        this.etsRadio="Si"
      }
    },
    refresh(){
      this.$router.go(0)
    }
    
  },
  
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false
        }, 2000)
    },
   
  },
}
</script>
<style scoped>
p.titulo {
  font-family: MontserratMedium;
  color: #7900ff;
  font-size: 130%;
}
p {
  font-family: MontserratMedium;
  color: #4f565f;
}
p.cuestion {
  font-size: 115%;
}
span {
  color: #4f565f;
  font-family: MontserratBold;
}
.save {
  font-family: Montserrat;
  text-transform: unset !important;
}
.restore {
  background-color: white;
  font-family: Montserrat;
  text-transform: unset !important;
}
</style>