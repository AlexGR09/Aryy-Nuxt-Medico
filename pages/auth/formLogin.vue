<template>
  <v-card flat>
    <div class="margen ">
      <v-img :src="require('@/assets/logotipos/ISOLOGO_ARYY.svg')" max-width="150"></v-img>
      <h1>Especialistas, medicinas y <br /> análisis clínicos en un solo lugar</h1>
      <p>Haz una cita, cotiza tus medicamentos y análisis <br /> clínicos o lleva control de tu tratamiento con <br /> ayuda de aryy.</p>
      
      <!-- ---- Sección de vista iniciar/registrar | Genesis ---- -->
            <v-tabs
            class="tabs"
            color="#7900ff"
              v-model="tabs"
            >
              <v-tab class="tabs" >
                Iniciar sesión
              </v-tab >
              <v-tab class="tabs">
                Registrarse
              </v-tab>
            </v-tabs>
        <v-tabs-items v-model="tabs">
         <!--  ----Iniciar sesión |Génesis---- -->
         <v-tab-item >
  
            <v-col xs="11" sm="11" md="11">
            <v-card flat>
              <v-card-text >
                <v-text-field justify-right placeholder="Usuario o telefono" rounded height="25" class="textfield"></v-text-field>
                <br />
                <v-text-field height="25" rounded  class="textfield" placeholder="Contraseña"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
              ></v-text-field>
                  <v-btn class="margen4 btnnn" color="#7900ff" height="50">
                    Iniciar sesión
                  </v-btn>
                  <br />
                  <p class="accede">O accede usando</p>
                  <div class="margen4"></div>
                  <v-btn outlined class="btn" height="50"><v-img :src="require('@/assets/icons/icon_facebook.svg')" max-width="35"></v-img>
                    Iniciar sesión con Facebook
                  </v-btn>
                  <v-btn class="margen4 btn" outlined height="50">
                    <v-img :src="require('@/assets/icons/icon_google.svg')" max-width="30"></v-img>
                    Iniciar sesión con Google
                  </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
          </v-tab-item>
          <!--  ----Tab de registro |Génesis---- -->
          <v-tab-item>
            <v-card flat>
              <h2>Crea tu perfil gratuito como especialista</h2>
              <a><h3><v-icon color="#9966ff">mdi-arrow-left</v-icon>Registrarme como paciente</h3></a>
              <v-card-text >
              
                <v-row> 
                <v-col xs="8" sm="8" md="9">
                  <p class="label">Ciudad*</p>
                    <v-autocomplete justify-right placeholder="Selecciona una ciudad" rounded height="25" class="textfield"></v-autocomplete>
                  </v-col>
                  </v-row>
                <v-row> 
                  <v-col md="4"><p class="label">Teléfono*</p><v-autocomplete width="15px" :items="codigos" justify-right placeholder="Código país" rounded height="25" class="textfield"></v-autocomplete></v-col>
                  <v-col md="7">
                  <v-text-field placeholder="Número de teléfono (10 dígitos)" class="textfield label" rounded ></v-text-field>
                  </v-col></v-row>
                  <v-input class="hint" hint="Éste número se utilizará para verificación del usuario (no aparecerá en su perfil)" persistent-hint>
                        </v-input>
                        <v-row>
        <v-col xs="8" sm="9" md="9"><br/>
          <p class="label">Correo electrónico*</p>
          <v-text-field justify-right placeholder="Escriba su email" rounded height="25" class="textfield"></v-text-field>
            <br />
            <p class="label">Contraseña*</p>
            <v-text-field
              placeholder="Establece tu contraseña" rounded class="textfield"    hint="Debe contener al menos 8 carácteres"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
            ></v-text-field>
            <br /> 
            
            <v-text-field
              placeholder="Confirma tu contraseña" class="textfield" rounded name="input-10-1"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              hint="Debe contener mínimo 8 carácteres"
              @click:append="show1 = !show1"
            ></v-text-field>
            <br/>
            <p class="label">Cédula*</p>
          <v-text-field justify-right placeholder="Número de cédula" rounded height="25" class="textfield"></v-text-field>
          <v-checkbox checked v-model="checkOne" color="#b380ff" on-icon="mdi-checkbox-blank"><template v-slot:label>
            <p class="checkbox">He leído y acepto los <b>Términos y Condiciones de uso.</b></p>
        </template> </v-checkbox>
            <v-btn class=" btnn" color="#7900ff" height="50">
                  Registrarme
            </v-btn>
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
    export default {
      name: "formLogin",
      layout: "auth",
      data: () => ({
        checkbox: false,
        codigos: ['+52'],
        tabs: null,
       /*  Reglas para el input de contraseña | Genesis */
        show1: false,
        hasVisiblePassword: false,
        rules: {
        min: v => v.length >= 8 || 'Debe contener mínimo 8 carácteres',
      },
      }),
      myFunction: function () {		
		if(this.enableDisable){
			this.enableDisable = false;
		}else{
			this.enableDisable = true;
		}
    }   
    }
  </script>
  <style>
  /*estilos para tipos de letra | Genesis*/
  h1{
    font-family: "MontserratBold";
    font-size: 155%;
    margin-top: -30px;
    margin-bottom: 10px;
    color: #4f565f;
  }
  h2{
    font-family: "MontserratBold";
    font-size: 150%;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #4f565f;
  }
  h3{
    font-family: "MontserratLight";
    margin-top: 10px;
    font-size: 105%;
    margin-bottom: 10px;
    color: #9966ff;
  }
  p{
    font-family: "MontserratLight";
    color: #999999;
    font-size: 16px;
  }
  p.accede{
      font-size: 15px;
      font-family: 'Montserrat', sans-serif;
    }
    p.label{
      font-family: "MontserratLight";
    color: #999999;
    font-size: 120%;
    margin-top: -1px;
    margin-left: 1px;
    margin-bottom: 15px;
    }
    a.accede{
      margin-top: 16px;
      font-size: 15px;
      font-family: 'MontserratBold';
    }
    p.checkbox{
      font-family: Montserrat;
      font-size: 11px;
      color: black;
    }
    r{
      text-transform: unset !important;
      font-family: MontserratMedium;
      color: #7900ff;
    }
    .hint{
      margin-top: -15px;
      font-family: Montserrat;
    }
    .textfield{
      box-shadow: 0 0 10pt 2pt #f4edff;
      height: 50px;
      width: 85%;
      margin-left: -8px;
      font-size: .9rem;
      font-family: Montserrat;
    }
    .label{
      margin-top: 35px;
      margin-left: -40px;
    }
    .v-messages__message {
      font-size: 11px;
      color: #7900ff;
  }
  .checkbox{
    margin-top: 15px;
  }
  .tabs{
    color: #7900ff;
    text-transform: unset !important;
    font-family: MontserratMedium;
  }
    /*degradado icono de google | Genesis */
    .fa-google {
    background: conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }
  /*estilos botones | Genesis */
  .btn {
      text-transform: unset !important;
      font-family: Montserrat;
      border: thin solid #CCCCCC;
      
      width: 85%;
  }
  .btnn {
      margin-left: 15%;
      text-transform: unset !important;
      font-family: Montserrat;
      border: thin solid #CCCCCC;
      color: white !important;
      width: 65%;
  }
  .btnnn {
      text-transform: unset !important;
      font-family: Montserrat;
      border: thin solid #CCCCCC;
      color: white !important;
      width: 85%;
  }
  .color{
    text-transform: unset !important;
    font-family: MontserratMedium;
    background-color: #ea4335;
    fill:#ea4335;
  }
  /*Margenes generales | Genesis */
  .margen{
    margin: 34px;
  }
  .margen4{
    margin-top: 16px;
  }
  </style>