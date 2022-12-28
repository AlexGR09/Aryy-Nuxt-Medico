<template>
  <v-container>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-row>
      <v-col cols="12" md="8">
        <p class="subtitle">EXPEDIENTE DEL PACIENTE</p>
        <v-card class="rounded-lg" :elevation="2">
          <div class="banner-text">INFORMACIÓN DEL PACIENTE</div>
          <!-- INFORMACION BASICA -->
          <p class="subtitle">INFORMACIÓN BÁSICA</p>
          <v-row no-gutters >
            <v-col cols="12"  md="4" >
                <v-spacer></v-spacer>
                <div >
                  <p class="d-flex align-center mb-6">
                    <img width="25vh" src="@/assets/icons/icon_perfil.svg"/>
                    <span class="information-basic ms-3">Fulanito Detal</span>
                  </p>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div >
                  <p class="d-flex align-center mb-6">
                    <img width="25vh" src="@/assets/icons/icon_phone_dark_.svg"/>
                    <span class="information-basic ms-3">+52 963 258 4521</span>
                  </p>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div >
                  <p class="d-flex align-center mb-6">
                    <img width="25vh" class="greeting-card-trophy" src="@/assets/icons/icon_cumpleaños_dark_.svg"/>
                    <span class="information-basic ms-3">31 años (01 Enero 1991)</span>
                  </p>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div >
                  <p class="d-flex align-center mb-6">
                    <img width="25vh" class="greeting-card-trophy" src="@/assets/icons/icon_sanguineo_dark_.svg"/>
                    <span class="information-basic ms-3">Grupo Sanguíneo B+</span>
                  </p>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div >
                  <p class="d-flex align-center mb-6">
                    <img width="25vh" class="greeting-card-trophy" src="@/assets/icons/icon_estatura_dark_.svg"/>
                    <span class="information-basic ms-3">1.80 mts</span>
                  </p>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div >
                  <p class="d-flex align-center mb-6">
                    <img width="25vh" class="greeting-card-trophy" src="@/assets/icons/icon_genero_dark_.svg"/>
                    <span class="information-basic ms-3">Hombre</span>
                  </p>
                </div>
            </v-col>
          </v-row>

          <!-- Signos vitales -->
          <p class="subtitle">SIGNOS VITALES</p>
          <v-row no-gutters >
            <v-col cols="12"  md="4" >
                <div >
                  <p class="d-flex align-center mb-6">
                    <img width="25vh" src="@/assets/icons/icon_perfil.svg"/>
                    <span class="information-basic ms-3">37.5°</span>
                    <span class="text-xs text-no-wrap">hola</span>
                  </p>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div >
                  <p class="d-flex align-center mb-6">
                    <img width="25vh" src="@/assets/icons/icon_phone_dark_.svg"/>
                    <span class="information-basic ms-3">95 kg</span>
                  </p>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div >
                  <p class="d-flex align-center mb-6">
                    <img width="25vh" class="greeting-card-trophy" src="@/assets/icons/icon_cumpleaños_dark_.svg"/>
                    <span class="information-basic ms-3">31 años (01 Enero 1991)</span>
                  </p>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div >
                  <p class="d-flex align-center mb-6">
                    <img width="25vh" class="greeting-card-trophy" src="@/assets/icons/icon_sanguineo_dark_.svg"/>
                    <span class="information-basic ms-3">Grupo Sanguíneo B+</span>
                  </p>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div >
                  <p class="d-flex align-center mb-6">
                    <img width="25vh" class="greeting-card-trophy" src="@/assets/icons/icon_estatura_dark_.svg"/>
                    <span class="information-basic ms-3">1.80 mts</span>
                  </p>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div >
                  <p class="d-flex align-center mb-6">
                    <img width="25vh" class="greeting-card-trophy" src="@/assets/icons/icon_genero_dark_.svg"/>
                    <span class="information-basic ms-3">Hombre</span>
                  </p>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div >
                  <p class="d-flex align-center mb-6">
                    <img width="25vh" class="greeting-card-trophy" src="@/assets/icons/icon_genero_dark_.svg"/>
                    <span class="information-basic ms-3">Hombre</span>
                  </p>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div >
                  <p class="d-flex align-center mb-6">
                    <img width="25vh" class="greeting-card-trophy" src="@/assets/icons/icon_genero_dark_.svg"/>
                    <span class="information-basic ms-3">Hombre</span>
                  </p>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div >
                  <p class="d-flex align-center mb-6">
                    <img width="25vh" class="greeting-card-trophy" src="@/assets/icons/icon_genero_dark_.svg"/>
                    <span class="information-basic ms-3">Hombre</span>
                  </p>
                </div>
            </v-col>
          </v-row>
     
          <div class="banner-text" icon="mdi-material-design">EXPEDIENTE MÉDICO</div>
            <v-col>
                    <p class="subtitle">ALERGIAS</p>
                    <div>
                        <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Single-line item</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
                    </div>
            </v-col>
          <p class="subtitle">ANTECEDENTES PATOLÓGICOS</p>
          <p class="subtitle">ANTECEDENTES NO PATOLÓGICOS</p>
          <p class="subtitle">ANTECEDENTES HEREDOFAMILIARES</p>
          <p class="subtitle">MEDICAMENTO ACTIVO</p>
          <p class="subtitle">MEDICAMENTO ANTERIOR</p>
          <p class="subtitle">VACUNACIÓN RECIENTE</p>
        </v-card>
      </v-col>
      <!-- NOTAS INTERNAS -->
      <v-col cols="12" md="4">
        <p>Notas Internas</p>
        <v-card>
          <v-textarea solo name="input-7-4" label="Solo textarea"></v-textarea>
        </v-card>
      </v-col>


      <!-- CITAS ANTERIORES -->
      <p class="subtitle">CITAS ANTERIORES</p>
      <v-col cols="12" md="4">
        <div>
            <v-card
                v-for="date in dates"
                :key="date"
                outlined
            >
                hola
            </v-card>


        </div>
      </v-col>

      <v-col cols="12" md="4">
        <div>
            <v-card
                v-for="date in dates"
                :key="date"
                class="mx-auto montserrat mb-5"
                max-width="100%"
                outlined
            >
                <v-list-item class="lista" two-line>
                <v-list-item-avatar tile size="70">
                    <v-row>
                    <v-col>
                        <b style="font-size: 150%">{{date.day}}</b> <br />{{date.month}} <BR /> {{date.year}}</v-col
                    >
                    </v-row>
                </v-list-item-avatar>
                <v-sheet class="mr-3" :color="date.status" height="100" width="3"></v-sheet>
                <v-list-item-content>
                    <v-list-item-title class="text-h5 mb-1">
                    <p class="montserrat mb-0">{{date.diagnosis}}</p>
                    </v-list-item-title>
                    <v-list-item-subtitle v-if="date.name"
                    >{{date.name}} • {{date.medicine}} • {{date.mg }} <br />
                    {{date.presentation}}</v-list-item-subtitle
                    >
                </v-list-item-content>
                <v-list-item-avatar
                    ><v-icon :color="date.status"
                    >{{date.icon}}</v-icon
                    ></v-list-item-avatar
                >
                </v-list-item>
            </v-card>
    </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Lista de pacientes',
        disabled: false,
        href: 'http://localhost:3000/patients/list',
      },
      {
        text: 'Expediente',
        disabled: true,
        href: 'http://localhost:3000/',
      },
    ],
    dates: [
          {
              day: '12', month: 'OCT', year: '2022',
              diagnosis: 'Gastroenteritis y colitis nerviosa',
              name: 'Peptobismol',
              medicine: 'Subsalicilato de Bismuto',
              mg: '',
              presentation: 'Tabletas',
              status: 'green',
              icon: 'mdi-checkbox-marked-circle',
          },
          {
              day: '5', month: 'SEPT', year: '2022',
              diagnosis: 'Diarrea infecciosa',
              name: 'Topron',
              medicine: 'Nifuroxsazida',
              mg: '400 mg',
              presentation: 'Capsula',
              status: 'green',
              icon: 'mdi-checkbox-marked-circle',
          },
          /*  ejemplo cita cancelada | Genesis */
          {
              day: '19', month: 'AGO', year: '2022',
              diagnosis: 'CITA CANCELADA',
              name: '',
              medicine: '',
              mg: '',
              presentation: '',
              status: 'red',
              icon: 'mdi-alert',
          },
           /*  ejemplo cita pospuesta | Genesis */
          {
              day: '5', month: 'JUN', year: '2022',
              diagnosis: 'CITA POSPUESTA',
              name: '',
              medicine: '',
              mg: '',
              presentation: '',
              status: 'amber',
               icon: 'mdi-alert',
          },
          {
              day: '1', month: 'ABR', year: '2022',
              diagnosis: 'CITA POSPUESTA',
              name: '',
              medicine: '',
              mg: '',
              presentation: '',
              status: 'amber',
               icon: 'mdi-alert',
          },
      ],
  }),
}
</script>


<style>
.banner-text {
  color: white;
  background: blue;
  font-size: 2.5vh;
  font-family: 'Montserrat', sans-serif;
  padding: 5px;
  height: 5vh;
}
.title {
  font-size: 12px;
}

.subtitle {
  font-size: 1.8vh;
  padding: 1.3vh;
  font-family: 'MontserratBold';
  color: #5b5e63;

}
.information-basic{
    color: #a6a6a6;
    font-family: 'Montserrat', sans-serif;
    font-size: 2vh;
}



		
</style>