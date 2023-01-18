<template>
  <div>
    <v-breadcrumbs class="breadcrumbs ml-n7" :items="breadcrumbs">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
              <v-icon size="22" color="#7900ff">{{ item.icon }}</v-icon>
              <span class="breadcrumbs">{{ item.text }}</span>
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
    <account/>
    <v-row>
       <v-row>
          <menu-personal />
        </v-row>
      <v-col cols="12" md="10" lg="10" xl="11">
        <v-card height="800px" flat class="pa-3 mt-2">
          <v-col xl="12">
                  <!-- alert para notificar error | Genesis -->
                  <v-alert
                   v-if="error"
                    class="alert"
                    v-model="errorConstancy"
                    dense
                    outlined
                    type="error"
                  >
                    {{ errorConstancy }}
                  </v-alert>
                </v-col>
          <v-card-subtitle class="pa-3 mt-n2 mb-n10">
            <H1 class="mb-5 mt-n6">MIS DATOS FISCALES</H1>
          </v-card-subtitle>
           <v-form ref="form" class="multi-col-validation mt-6">
            <v-card-text class="pa-3 mt-5">
              <v-row>
                <!-- CAMPO DE RFC | LUIS REYES -->
                <v-col sm="6" md="4" lg="4" xl="4" cols="12">
                  <span>RFC</span>
                  <v-text-field
                    v-model="rfc"
                    color="#9966ff"
                    class="textfield mt-1"
                    placeholder="Escribe tu RFC"
                    outlined
                  ></v-text-field>
                </v-col>
                <!-- CAMPO DEl CONTRIBUYENTE | LUIS REYES -->
                <v-col sm="6" md="4" lg="4" xl="4" cols="12">
                  <span>Nombre completo</span>
                  <v-text-field
                  v-model="taxpayer_name"
                    class="textfield mt-1"
                    color="#9966ff"
                    placeholder="Nombre del contribuyente"
                    outlined
                  ></v-text-field>
                </v-col>
                <!-- REGIMEN FISCAL | LUIS REYES -->
                <v-col sm="6" md="4" lg="4" xl="4"  cols="12">
                  <span>Régimen fiscal</span>
                  <v-autocomplete
                  v-model="tax_regime"
                    class="textfield mt-1"
                    color="#9966ff"
                    outlined
                    placeholder="Selecciona un régimen físcal"
                  >
                  </v-autocomplete>
                </v-col>
                <!-- CAMPO DEl CORREO DEL CONTRIBUYENTE | LUIS REYES -->
                <v-col sm="6" md="4" lg="4" xl="4"  cols="12">
                  <span>Correo electrónico</span> <br />
                  <v-text-field
                    v-model="tax_email"
                    class="textfield mt-1"
                    color="#9966ff"
                    outlined
                    placeholder="Escribe tu Email"
                    required
                  >
                  </v-text-field>
                </v-col>
                <!-- CAMPO DOMICILIO FISCAL | LUIS REYES -->
                <v-col md="8" cols="12">
                  <span>Domicilio fiscal</span> <br />
                  <v-text-field
                    v-model="tax_residence"
                    class="textfield mt-1"
                    color="#9966ff"
                    outlined
                    placeholder="Escribe la dirección"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-card-subtitle class="mt-2">
                  <H1 class="mb-5">CONSTACIA DE SITUACIÓN FISCAL</H1>
                </v-card-subtitle>
                <v-card-text>
                  <v-row>
                    <v-col md="6" lg="6" xl="6" cols="12">
                      <p class="cedu mt-n2 mb-1">
                        Constacia de situación físcal
                      </p>
                      <v-file-input
                        v-model="constancy"
                        chips
                        @click="handleFileImport"
                        :loading="isSelecting"
                        color="#9966ff"
                        class="textfield"
                        placeholder="Adjunta tu constancia físcal"
                        outlined
                        accept="image/png, image/jpeg" 
                      ></v-file-input>
                      <v-input class="input mt-3 mb-n4"
                        >Formatos pemitidos: JPG o PNG. Tamaño máximo de archivo
                        2 MB</v-input
                      > </v-col>
                
                  </v-row>
                </v-card-text>
              </v-row>

              <!-- botones -->
             <div class="mt-8">
                <v-btn
                  height="50px"
                  class="white--text save"
                  v-on:click="actualizar"
                  color="#7900ff"
                  large
                  >Actualizar datos</v-btn
                >
                <v-overlay v-model="overlay">
                  <v-alert
                    class="rounded-xl"
                    icon="mdi-check-circle"
                    color="green"
                    >Datos actualizados correctamente.</v-alert
                  >
                </v-overlay>
                <v-dialog v-model="dialog" persistent max-width="450">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      height="50px"
                      class="restore ml-3"
                      color="#999999"
                      outlined
                      large
                      >Restaurar todo</v-btn
                    >
                  </template>
                  <v-card>
                    <v-card-title class="text-h5 justify-center">
                      <p class="reset">¿Está seguro de restaurar los datos?</p>
                    </v-card-title>
                    <v-card-actions>
                      <v-btn color="#9966ff" text @click="dialog = false">
                        No
                      </v-btn>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="#9966ff"
                        text
                        v-on:click="reset"
                        @click="dialog = false"
                      >
                        si
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </v-card-text>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
    <menu-personal />
  </div>
</template>
    <script>
    import account from '../account.vue';
import menuPersonal from './menuPersonal.vue'

export default {
  components: {
    menuPersonal, account
  },
  data() {
    return {
      error: '',
      rfc: '',
      errorConstancy: [],
      taxpayer_name: '',
      tax_regime: '',
      tax_email: '',
      tax_residence: '',
      constancy: null,
      overlay: false,
      fileRecords: [],
      isSelecting: false,
      uploadUrl: 'https://example.com',
      selectedItem: 1,
      dialog: false,
      breadcrumbs: [
        {
          icon: 'mdi-home-outline',
          disabled: false,
          href: '/',
        },
        {
          text: 'Perfil personal',
          disabled: false,
          href: '/accounts/edit/general-info',
        },
        {
          text: 'Datos fiscales',
          disabled: true,
          href: '/accounts/edit/personalprofile/tax-data',
        },
      ],
    }
  },
  watch: {
  },
  methods: {
/*     método para barra de carga en file input | Genesis */
    handleFileImport() {
                this.isSelecting = true;
                window.addEventListener('focus', () => {
                    this.isSelecting = false
                },);
            },
   /*  metodo para mostrar la informacion en los campos | Genesis */
    showData() {
      this.$axios
        .get('api/v1/physician/tax_data', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          console.log(res)
          console.log('exito en GET')
          this.rfc = res.data.data.rfc
          this.taxpayer_name = res.data.data.taxpayer_name
          this.tax_regime = res.data.data.tax_regime
          this.tax_email = res.data.data.tax_email
          this.tax_residence = res.data.data.tax_residence
          this.constancy = res.data.data.constancy
        })
    },
   /*  metodo para subir la informacion al servidor | Genesis */
   /*  upload(){
      const formData = new FormData();
      formData.append('constancy',this.constancy);
      formData.append('rfc',this.rfc);
      formData.append('taxpayer_name',this.taxpayer_name);
      formData.append('tax_regime',"ddd");
      formData.append('tax_email',this.tax_email);
      formData.append('tax_residence',this.tax_residence);
      this.$axios
      .post('api/v1/physician/tax_data', formData,
      {
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token"),
        "Content-Type": "multipart/form-data"} 
      })
      .then(() => {
        this.overlay = true
        this.$router.go(this.$router.currentRoute)
      })
    },
  }, */
 /*  metodo para actualizar la informacion en el servidor | Genesis */
 actualizar(){
      const formData = new FormData();
      formData.append('constancy',this.constancy);
      formData.append('rfc',this.rfc);
      formData.append('taxpayer_name',this.taxpayer_name);
      formData.append('tax_regime',"ddd");
      formData.append('tax_email',this.tax_email);
      formData.append('tax_residence',this.tax_residence);
      formData.append('_method',"put");
      this.$axios
      .post('api/v1/physician/tax_data', formData,
      {
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token"),
        "Content-Type": "multipart/form-data"} 
      })
      .then(() => {
        console.log("Cambios actualizados correctamente")
        this.overlay = true
         this.$router.go(this.$router.currentRoute)
      })
      .catch(error =>{
        console.log(error)
        this.error = 'error'
          this.errorConstancy = error.response.data.errors.constancy[0]
      })
    },

    /*  metodo para restaurar la informacion de los campos | Genesis */
    reset() {
      this.$refs.form.reset()
    },
   
  }, mounted() {
    console.log('verificando')
    this.showData()
  },
}
</script> 

<style>
span.breadcrumbs {
  font-family: Montserrat;
  color: #7900ff;
  font-size: 95%;
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
  color: #999999;
  font-family: Montserrat;
  font-size: 120%;
}
p {
  font-family: MontserratMedium;
  color: gray;
  font-size: 110%;
}
p.cedu {
  font-family: Montserrat;
  font-size: 120%;
  color: #999999;
}
.v-input__icon--append .v-icon {
  font-size: 50px;
  color: #999999;
}
</style>