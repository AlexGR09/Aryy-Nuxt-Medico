<template>
  <v-container>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-row>
      <v-col cols="12" md="8">
        <p class="subtitle">EXPEDIENTE DEL PACIENTE</p>
        <v-card class="rounded-lg" :elevation="2" scrollable>
          <div class="banner-text">INFORMACIÓN DEL PACIENTE</div>
          <!-- INFORMACION BASICA -->
          <p class="subtitle-p">INFORMACIÓN BÁSICA</p>
          <v-row class="row-icon" no-gutters>
            <v-col cols="12" md="4">
              <v-spacer></v-spacer>
              <div>
                <p class="d-flex align-center mb-6">
                  <img width="25vh" src="@/assets/icons/icon_perfil.svg" />
                  <span class="information-basic ms-3">Fulanito Detal</span>
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center mb-6">
                  <img width="25vh" src="@/assets/icons/icon_phone_dark_.svg" />
                  <span class="information-basic ms-3">+52 963 258 4521</span>
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center mb-6">
                  <img
                    width="25vh"
                    class="greeting-card-trophy"
                    src="@/assets/icons/icon_cumpleaños_dark_.svg"
                  />
                  <span class="information-basic ms-3"
                    >31 años (01 Enero 1991)</span
                  >
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center mb-6">
                  <img
                    width="25vh"
                    class="greeting-card-trophy"
                    src="@/assets/icons/icon_sanguineo_dark_.svg"
                  />
                  <span class="information-basic ms-3">Grupo Sanguíneo B+</span>
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center mb-6">
                  <img
                    width="25vh"
                    class="greeting-card-trophy"
                    src="@/assets/icons/icon_estatura_dark_.svg"
                  />
                  <span class="information-basic ms-3">1.80 mts</span>
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center mb-6">
                  <img
                    width="25vh"
                    class="greeting-card-trophy"
                    src="@/assets/icons/icon_genero_dark_.svg"
                  />
                  <span class="information-basic ms-3">Hombre</span>
                </p>
              </div>
            </v-col>
          </v-row>

          <!-- Signos vitales -->
          <p class="subtitle-p">SIGNOS VITALES</p>
          <v-row class="row-icon" no-gutters>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center mb-6">
                  <img width="25vh" src="@/assets/icons/icon_perfil.svg" />
                  <span class="information-basic ms-3">37.5°</span>
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center mb-6">
                  <img width="25vh" src="@/assets/icons/icon_phone_dark_.svg" />
                  <span class="information-basic ms-3">95 kg</span>
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center mb-6">
                  <img
                    width="25vh"
                    class="greeting-card-trophy"
                    src="@/assets/icons/icon_cumpleaños_dark_.svg"
                  />
                  <span class="information-basic ms-3"
                    >31 años (01 Enero 1991)</span
                  >
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center mb-6">
                  <img
                    width="25vh"
                    class="greeting-card-trophy"
                    src="@/assets/icons/icon_sanguineo_dark_.svg"
                  />
                  <span class="information-basic ms-3">Grupo Sanguíneo B+</span>
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center mb-6">
                  <img
                    width="25vh"
                    class="greeting-card-trophy"
                    src="@/assets/icons/icon_estatura_dark_.svg"
                  />
                  <span class="information-basic ms-3">1.80 mts</span>
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center mb-6">
                  <img
                    width="25vh"
                    class="greeting-card-trophy"
                    src="@/assets/icons/icon_genero_dark_.svg"
                  />
                  <span class="information-basic ms-3">Hombre</span>
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center mb-6">
                  <img
                    width="25vh"
                    class="greeting-card-trophy"
                    src="@/assets/icons/icon_genero_dark_.svg"
                  />
                  <span class="information-basic ms-3">Hombre</span>
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center mb-6">
                  <img
                    width="25vh"
                    class="greeting-card-trophy"
                    src="@/assets/icons/icon_genero_dark_.svg"
                  />
                  <span class="information-basic ms-3">Hombre</span>
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center mb-6">
                  <img
                    width="25vh"
                    class="greeting-card-trophy"
                    src="@/assets/icons/icon_genero_dark_.svg"
                  />
                  <span class="information-basic ms-3">Hombre</span>
                </p>
              </div>
            </v-col>
          </v-row>

          <div class="banner-text" icon="mdi-material-design">
            EXPEDIENTE MÉDICO
          </div>

          <!-- ALERGIAS -->
          <v-col cols="12" md="6">
            <p class="titulo mb-n2">Alergias</p>
        
              <list-alergies/>
          </v-col>
          <!-- ALERGIAS -->

          <!-- ANTECENDETES PATOLOGICOS -->
          <v-col cols="12" md="6">
            <p class="titulo mb-n2">ANTECEDENTES PATOLÓGICOS</p>
          <list-pathologic/>
          </v-col>
          <!-- ANTECENDETES PATOLOGICOS -->

            <!-- ANTECENDETES NO PATOLOGICOS -->
            <v-col cols="12" md="6">
            <p class="titulo mb-n2">ANTECEDENTES NO PATOLÓGICOS</p>
          <listnonPathologic/>
          </v-col>
          <!-- ANTECENDETES NO PATOLOGICOS -->

          <!-- ANTECENDETES ANTECEDENTES HEREDOFAMILIARES -->
          <v-col cols="12" md="6">
            <p class="titulo mb-n2">ANTECEDENTES HEREDOFAMILIARES</p>
           <listFamilyhistory/>
          </v-col>

          <!-- ANTECENDETES ANTECEDENTES HEREDOFAMILIARES -->

          <!-- ANTECENDETES MEDICAMENTO ACTIVO-->
          <v-col cols="12" md="6">
            <p class="titulo mb-n2">MEDICAMENTO ACTIVO</p>
           <listMedicine/>
          </v-col>

          <!-- ANTECENDETES MEDICAMENTO ACTIVO-->

          <!-- ANTECENDETES MEDICAMENTO MEDICAMENTO ANTERIOR-->
          <v-col cols="12" md="6">
            <p class="titulo mb-n2">MEDICAMENTO ANTERIOR</p>
            <ListPreviousMedicine/>
          </v-col>

          <!-- ANTECENDETES MEDICAMENTO ANTERIOR -->
          <!-- VACUNACION RECIENTE-->
          <v-col cols="12" md="6">
            <p class="titulo mb-n2">VACUNACIÓN RECIENTE</p>
            <list-vaccination/>
          </v-col>

          <!-- VACUNACION RECIENTER -->
        </v-card>
      </v-col>

      <!-- SEGUNDA COLUMNA -->
      <v-col cols="12" md="4">
        <p class="subtitle">NOTAS INTERNAS</p>
        <v-card class="greeting-card" elevation="5">
          <v-row class="ma-0 pa-0">
            <v-col cols="12">
              <div>
                <p class="information-note">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dignissimos nulla dolorem doloremque quae consequatur neque dicta, quaerat quasi animi consequuntur eaque deserunt esse et exercitationem, blanditiis molestiae, dolore quod!
                </p>
              </div>
            </v-col>
          </v-row>
        </v-card>

        <!-- NUEVA CONSULTA -->

        <v-col >
        <p class="subtitle">NUEVA CONSULTA</p>
          <v-row >
            <v-col cols="12">
              <div>
                <v-btn  elevation="0" class="btn_detail" block small color="#7900ff" dark> Iniciar nueva consulta</v-btn>
              </div>
      
            </v-col>
            <v-col cols="12">
              <div>
                <v-btn  elevation="0" class="btn_detail" block small  color="#a6a6a6" outlined>Agendar cita nueva</v-btn>
              </div>
            </v-col>



                  <!-- CITAS ANTERIORES -->
      <p class="subtitle">CITAS ANTERIORES</p>
      <v-col >
        <div>
    <v-card
      v-for="date in dates"
      :key="date"
      class="mx-auto montserrat mb-5"
     
      outlined
    >
      <v-list-item class="lista" two-line>
        <v-list-item-avatar tile size="80">
          <v-row>
            <v-col>
              <b style="font-size: 150%">{{date.day}}</b> <br />{{date.month}} <BR /> {{date.year}}</v-col
            >
          </v-row>
        </v-list-item-avatar>
        <v-sheet class="mr-3" :color="date.status" height="100" width="2"></v-sheet>
        <v-list-item-content>
          <v-list-item-title >
            <p class="montserrat">{{date.diagnosis}}</p>
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
        </v-col>
      </v-col>




    </v-row>
  </v-container>
</template>

<script>
import listAlergies from '~/components/data-list-medicalrecord/list-allergies.vue'
import listPathologic from '~/components/data-list-medicalrecord/list-pathologic.vue'
import listnonPathologic from '~/components/data-list-medicalrecord/list-nonpathologic.vue'
import listFamilyhistory from '~/components/data-list-medicalrecord/list-familyhistory.vue'
import listMedicine from '~/components/data-list-medicalrecord/list-medicine.vue'
import listPreviousMedicine from '~/components/data-list-medicalrecord/list-previousMedicine.vue'
import ListPreviousMedicine from '~/components/data-list-medicalrecord/list-previousMedicine.vue'
import listVaccination from '~/components/data-list-medicalrecord/list-vaccination.vue'
export default {
  layout: 'medicalRecord',
  components: { listAlergies, listPathologic, listnonPathologic, listFamilyhistory, listMedicine, listPreviousMedicine, ListPreviousMedicine,listVaccination },
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
            day: '19', month: 'AGO', year: '2022',
            diagnosis: 'CITA CANCELADA',
            name: '',
            medicine: '',
            mg: '',
            presentation: '',
            status: 'red',
            icon: 'mdi-alert',
        },
    ],
  }),
  mounted(){
  },
  methods: {
    updateMessage: function () {
      this.message = 'updated'
      console.log(this.$el.textContent) // => 'no actualiza'
      this.$nextTick(function () {
        console.log(this.$el.textContent) // => 'actualzia'
      })
    },
  }
  
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&display=swap');
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
  /*   font-size: 1.8vh;
  padding: 1.3vh;
  margin: 1vh; */
  font-size: 1.8vh;
  font-family: 'MontserratBold';
  color: #5b5e63;
}
.information-note{
  font-size: 1.8vh;
  font-family: 'Montserrat';
  color: #a6a6a6;
}
.description {
  font-family: 'Montserrat', sans-serif;
}
.information-description {
  color: #a6a6a6;
  font-size: 1.8vh;
}
.information-basic {
  color: #a6a6a6;
  font-family: 'Montserrat', sans-serif;
  font-size: 2vh;
}
.container {
  margin-top: 2px;
}
.greeting-card {
  position: relative;
  border-radius: 50px;
  height: 25vh;
  width: 50vh;
}
.btn_detail{
    text-transform: capitalize ;
    font-family: 'Montserrat', sans-serif;
    font-size: 2vh;
}
.row-icon{
  margin-top: 2vh;
  padding: 3vh;
}
.subtitle-p{
  margin-left: 2vh;
  margin-block-start: 2vh;
  font-size: 1.8vh;
  font-family: 'MontserratBold';
  color: #5b5e63;
}
.titulo{
  font-size: 2vh;
  font-family: MontserratBold;
}
</style>