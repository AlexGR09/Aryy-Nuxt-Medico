<template>
  <div>
    <account/>
    <v-row>
       <v-row>
          <menu-med />
        </v-row>
      <v-col cols="12" md="10" lg="10" xl="11">
        <v-card flat height="100%" class="pa-3 mt-2">
          <v-card-subtitle class="pa-3 mt-n2 mb-n10"
            ><H1 class="mb-5">IDENTIDAD MÉDICA</H1></v-card-subtitle
          >
          <v-card-text class="pa-3 mt-5">
            <v-form ref="form" v-model="valid">
              <v-row>
                <v-col xl="6">
                  <span>Logotipo propio*</span>
                  <v-file-input
                    chips
                    color="#9966ff"
                    class="textfield"
                    placeholder="Adjunta tu logotipo"
                    outlined
                  ></v-file-input>
                  <v-input class="input mb-n4"
                    >Formatos pemitidos: JPG o PNG. Tamaño máximo de archivo 5
                    MB</v-input
                  >
                </v-col>
              </v-row>
              <H1 class="mb-5 mt-5">FOTOGRAFÍAS</H1>
              <span>Fotografías del especialista</span>
              <VueFileAgent
                :multiple="true"
                :deletable="true"
                :helpText="'Selecciona o arrastra tus archivos aquí'"
                :uploadUrl="uploadUrl"
                v-model="files"
              ></VueFileAgent>

              <div>
                <v-tooltip color="transparent" bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <span class="input" v-bind="attrs" v-on="on"
                      ><v-icon color="#9966ff" small> mdi-information </v-icon
                      >Más información sobre las fotos</span
                    >
                  </template>
                  <v-alert shaped color="#7900ff"
                    ><p class="alertDi mb-n2 mt-n2">
                      ∙En su escritorio <br />
                      ∙En su consultorio (preferentemente usando bata) <br />
                      ∙Utilizando algún aparato dentro del consultorio <br />
                      ∙Realizando algún procedimiento a algun paciente <br />
                      ∙De cuerpo completo <br />
                      ∙Medio cuerpo (preferentemente usando bata)
                    </p>
                  </v-alert>
                </v-tooltip>
              </div>
              <div class="mt-5">
                <span>Fotografías del especialista</span>
                <VueFileAgent
                  :multiple="true"
                  :deletable="true"
                  :helpText="'Selecciona o arrastra tus archivos aquí'"
                  :uploadUrl="uploadUrl"
                  v-model="fileRecords"
                ></VueFileAgent>
                <div>
                  <v-tooltip color="transparent" bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <span class="input" v-bind="attrs" v-on="on"
                        ><v-icon color="#9966ff" small> mdi-information </v-icon
                        >Más información sobre las fotos</span
                      >
                    </template>
                    <v-alert shaped color="#7900ff"
                      ><p class="alertDi mb-n2 mt-n2">
                        ∙Del interior de su consultorio <br />
                        ∙De la sala de espera o del lobby <br />
                        ∙Fachada exterior del consultorio
                      </p>
                    </v-alert>
                  </v-tooltip>
                </div>
              </div>
              <v-btn
                @click="overlay = !overlay"
                height="50px"
                class="white--text save mt-7"
                color="#7900ff"
                large
                >Guardar cambios</v-btn
              >
              <v-btn
                @click="reset"
                height="50px"
                class="restore ml-3 mt-7"
                color="#999999"
                outlined
                large
                >Restaurar todo</v-btn
              >
              <v-overlay :value="overlay">
                <v-alert
                  class="rounded-xl"
                  icon="mdi-check-circle"
                  color="green"
                  >Datos actualizados correctamente.</v-alert
                >
              </v-overlay>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Vue from 'vue'
import VueFileAgent from 'vue-file-agent'
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css'
import Account from '../account.vue';
import MenuMed from './menuMed.vue';
Vue.use(VueFileAgent)
Vue.use(VueFileAgentStyles)
export default {
  components: {Account, MenuMed},
  data() {
    return {
      overlay: false,
      alert: false,
      fileRecords: [],
      uploadUrl: 'https://example.com',
      hover: false,
      hover2: false,
      selectedItem: 1,
    }
  },
  created() {
    setTimeout(() => {
      this.alert = false
    }, 5000)
  },

  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false
        }, 3000)
    },
  },
  methods: {
    reset() {
      this.$refs.form.reset()
    },
  },
}
</script>


<style>
p.alertDi {
  font-family: Montserrat;
  color: white;
  font-size: 0.89rem;
}
.v-input__icon--prepend .v-icon {
  color: #9966ff;
}
.input {
  margin-top: 5px;
  color: #9966ff !important;
  font-family: MontserratMedium;
  font-size: 100%;
}
.bgactive {
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
a {
  text-decoration: none !important;
}
.save {
  font-family: Montserrat;
  text-transform: unset !important;
}
.restore {
  font-family: Montserrat;
  text-transform: unset !important;
}
.btn {
  font-family: Montserrat;
  text-transform: unset !important;
  color: #9966ff;
}
.textfield {
  height: 50px;
  width: 100%;
  font-size: 0.9rem;
  font-family: Montserrat;
}
h1 {
  font-family: MontserratMedium;
  font-size: 120%;
  color: #4f565f;
}
span {
  font-family: Montserrat;
  font-size: 120%;
}
p {
  font-family: MontserratMedium;
  color: gray;
  font-size: 110%;
}
</style>