<template>
  <v-card flat>
    <div class="margen mt-16">
      <v-img
        :src="require('@/assets/logotipos/ISOLOGO_ARYY.svg')"
        max-width="150"
      ></v-img>
      <h1>
        Especialistas, medicinas y <br />
        análisis clínicos en un solo lugar
      </h1>
      <p>
        Haz una cita, cotiza tus medicamentos y análisis <br />
        clínicos o lleva control de tu tratamiento con <br />
        ayuda de aryy.
      </p>
      <!-- ---- Sección de vista iniciar/registrar | Genesis ---- -->
      <v-tabs class="tabs" color="#7900ff" v-model="tabs">
        <v-tab to="/auth/login" id="1" class="tabs">Iniciar sesión</v-tab>
        <v-tab id="2" class="tabs">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-on="on"
                v-bin="attrs"
                large
                text
                class="tabs boton gray--text"
              >
                <span class="tabs">Registrarse</span>
                <v-icon>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list class="listitem">
              <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tabs">
        <v-tab-item> <!--  ----Iniciar sesión |Génesis---- --> </v-tab-item>
        <!--  ----Tab de registro |Génesis---- -->
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-row>
                <v-col xs="11" sm="11" md="11" lg="11" xl="9">
                  <v-row>
                    <v-col xs="11" sm="11" md="11" lg="11" xl="10">
                      <v-text-field
                        outlined
                        v-model="email"
                        placeholder="Correo electrónico"
                        class="textfield mb-2"
                        color="#b380ff"
                      ></v-text-field>
                      <br />
                      <v-text-field
                        v-model="password"
                        height="25"
                        outlined
                        class="textfield mb-2"
                        color="#b380ff"
                        placeholder="Establece tu contraseña"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password'"
                        @click:append="show1 = !show1"
                      ></v-text-field>
                      <p class="hint"> {{ error }}</p>
                      <v-text-field
                      v-model="password2"
                        height="25"
                        outlined
                        class="textfield mt-8 mb-2"
                        color="#b380ff"
                        placeholder="Confirma tu contraseña"
                        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show2 ? 'text' : 'password'"
                        @click:append="show2 = !show2"
                      ></v-text-field>
                      <p class="hint"> {{ msg }}</p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col lg="5">
                      <v-autocomplete
                        outlined
                        placeholder="Código país"
                        class="textfield"
                        color="#b380ff"
                      ></v-autocomplete>
                    </v-col>
                    <v-col lg="7">
                      <v-autocomplete
                        outlined
                        placeholder="Número de teléfono (10 dígitos)"
                        class="textfield"
                        color="#b380ff"
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                  <br />
                  <v-row>
                    <v-col xs="11" sm="11" md="11" lg="11" xl="10">
                      <v-btn
                        class="btnn"
                        href="/auth/register/registerViews/specialistRegister"
                        color="#7900ff"
                        block
                        height="50"
                      >
                        Registrarme</v-btn
                      >

                      <p class="accede mt-5 mb-5">O registrate usando</p>

                      <v-btn outlined class="btn" color="#999999" height="50"
                        ><v-img
                          class="mr-3"
                          :src="require('@/assets/icons/icon_facebook.svg')"
                          max-width="35"
                        ></v-img>
                        Registrarse con Facebook
                      </v-btn>
                      <v-btn
                        class="margen4 btn"
                        color="#999999"
                        outlined
                        height="50"
                      >
                        <v-img
                          class="mr-8"
                          :src="require('@/assets/icons/icon_google.svg')"
                          max-width="30"
                        ></v-img>
                        Registrarse con Google
                      </v-btn>
                    </v-col>
                  </v-row>
                  <br />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-card>
</template>
<script>
/* import CountriesCodes from '~/components/CountriesCodes.json'; */

export default {
  name: 'formLogin',
  layout: 'auth',
  data () {
    return{
    error: '',
    msg: '',
    tabs: 1,
    email: '',
    password: '',
    password2: '',
    checkbox: false,
    /*  Reglas para el input de contraseña | Genesis */
    show1: false,
    show2: false,
    hasVisiblePassword: false,
    rules: {
      min: (v) => v.length >= 8 || 'Debe contener mínimo 8 carácteres',
    },
    items: [
      {
        title: 'COMO PACIENTE',
        to: '/auth/register/registerViews/registerPatient',
      },
      { title: 'COMO ESPECIALISTA', to: '' },
      { title: 'COMO LABORATORIO', to: '/auth/register/register' },
      { title: 'COMO FARMACIA', to: '/auth/register/register' },
    ],
    }
  
  },
     watch: {
          password(){
            if(this.password.length < 5){
              this.error = "Debe contener al menos 8 carácteres"
            }else {
              this.error = ''
            }
          },
          password2(){
            if(this.password === this.password2){
              this.msg = ""
            }else {
              this.msg = "Las contraseñas no coinciden"
            }
          }
        }, 
  myFunction: function () {
    if (this.enableDisable) {
      this.enableDisable = false
    } else {
      this.enableDisable = true
    }
  },
}
</script>
    <style>
/*estilos para tipos de letra | Genesis*/
a {
  text-decoration: none !important;
}
h1 {
  font-family: 'MontserratBold';
  font-size: 155%;
  margin-top: -30px;
  margin-bottom: 10px;
  color: #4f565f;
}
h2 {
  font-family: 'MontserratBold';
  font-size: 150%;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #4f565f;
}
h3 {
  font-family: 'MontserratLight';
  margin-top: 10px;
  font-size: 105%;
  margin-bottom: 10px;
  color: #9966ff;
}
p {
  font-family: 'MontserratMedium';
  color: #999999;
  font-size: 16px;
}
p.accede {
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
}
p.label {
  font-family: 'MontserratLight';
  color: #999999;
  font-size: 120%;
  margin-top: -1px;
  margin-left: 1px;
  margin-bottom: 15px;
}
p.registro {
  color: #7900ff;
  text-transform: unset !important;
  font-family: MontserratMedium;
  margin-top: 15%;
  font-size: 100%;
}
a.accede {
  margin-top: 16px;
  font-size: 15px;
  font-family: 'MontserratBold';
}
p.checkbox {
  font-family: Montserrat;
  font-size: 11px;
  color: black;
}
r {
  text-transform: unset !important;
  font-family: MontserratMedium;
  color: #7900ff;
}
.listitem {
  font-family: Montserrat;
}
.hint {
  margin-top: -15px;
  font-family: Montserrat;
}
.textfield {
  height: 50px;
  width: 100%;
  font-size: 0.9rem;
  font-family: Montserrat;
}
.v-messages__message {
  font-size: 11px;
  color: #7900ff;
}
p.hint{
  font-size: 13px;
  color: #7900ff;
  margin-top: 5px;
  margin-bottom: -3px;
}
.checkbox {
  margin-top: 15px;
}
.tabs {
  color: #7900ff;
  text-transform: unset !important;
  font-family: MontserratMedium;
}
/*degradado icono de google | Genesis */
.fa-google {
  background: conic-gradient(
      from -45deg,
      #ea4335 110deg,
      #4285f4 90deg 180deg,
      #34a853 180deg 270deg,
      #fbbc05 270deg
    )
    73% 55%/150% 150% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
/*estilos botones | Genesis */
.btn {
  text-transform: unset !important;
  font-family: Montserrat;
  border: thin solid #cccccc;
  width: 100%;
}
.btnn {
  text-transform: unset !important;
  font-family: Montserrat;
  border: thin solid #cccccc;
  margin-left: 1px;
  left: 0;
  color: white !important;
  width: 100%;
}
.btnnn {
  text-transform: unset !important;
  font-family: Montserrat;
  border: thin solid #cccccc;
  color: white !important;
  width: 100%;
} /* 
    .prueb{
      width: 100%;
    } */
.color {
  text-transform: unset !important;
  font-family: MontserratMedium;
  background-color: #ea4335;
  fill: #ea4335;
}
/*Margenes generales | Genesis */
.margen {
  margin: 34px;
}
.margen4 {
  margin-top: 16px;
}
</style>