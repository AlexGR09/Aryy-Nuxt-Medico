<template>
    <div class="template">
      <div class="container ml-2"  align="center" justify="end">
        <v-img :src="require('@/assets/logotipos/ISOLOGO_ARYY.svg')" class="mb-n5" max-width="150"></v-img>
      </div>
      <v-row
        no-gutters
        style="flex-wrap: nowrap;"
      >
        <v-col cols="3" sm="1" md="3" lg="3" xl="4" class="flex-grow-0 flex-shrink-0"></v-col>
        <v-col cols="1" xs="12" sm="12" md="3" lg="3" xl="4" style="min-width: 100px; max-width: 100%;" class="flex-grow-1 flex-shrink-0">
            <h2>Crea tu perfil gratuito como especialista</h2>
                <router-link
                          style="text-decoration: none
                          color: inherit;"
                          to="/auth/login"
                          ><h3 class="a"><v-icon color="#9966ff">mdi-arrow-left</v-icon>Registrarme como paciente</h3>
                        </router-link>
              <!--   <a href="/login"><h3 class="a"><v-icon color="#9966ff">mdi-arrow-left</v-icon>Registrarme como paciente</h3></a> -->
                <v-card-text >
                
                  <v-row> 
                  <v-col xs="12" sm="7" md="7" lg="8" xl="5">
                    <p class="label">Ciudad*</p>
                      <v-autocomplete outlined justify-right placeholder="Selecciona una ciudad" color="#b380ff" height="25" class="textfield"></v-autocomplete>
                    </v-col>
                    </v-row>
                  <v-row> 
                    <v-col  xs="3" sm="3" md="3" lg="3" xl="2"><p class="label">Teléfono*</p> 
                      <v-autocomplete outlined  :items="Countries" justify-right placeholder="Código país" color="#b380ff" height="25" > </v-autocomplete> 
               <!--        <li v-for="Country in Countries" :key="Country.name">
         {{Country.dial_code}}
       </li>  -->
                    </v-col>
                    <v-col xs="6" sm="5" md="6" lg="7" xl="6">
                    <v-text-field outlined placeholder="Número de teléfono (10 dígitos)" class="textfield mt-9 " color="#b380ff" ></v-text-field>
                    </v-col>
                    <v-input class="hint mt-n11 ml-2" hint="Éste número se utilizará para verificación del usuario (no aparecerá en su perfil)" persistent-hint>
                    </v-input></v-row>
                    <v-row>
                      <v-col xs="8" sm="7" md="9" lg="7" xl="5"><br/>
                        <p class="label mt-n9">Correo electrónico*</p>
                        <v-text-field outlined justify-right placeholder="Escriba su email" color="#b380ff" height="25" class="textfield"></v-text-field>
                          <br />
                          <p class="label">Contraseña*</p>
                          <v-text-field outlined
                            placeholder="Establece tu contraseña" color="#b380ff" class="textfield mb-7"    hint="Debe contener al menos 8 carácteres"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            @click:append="show1 = !show1"
                          ></v-text-field>
                         
                          <v-text-field outlined
                            placeholder="Confirma tu contraseña" class="textfield" color="#b380ff" name="input-10-1"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            hint="Debe contener mínimo 8 carácteres"
                            @click:append="show1 = !show1"
                          ></v-text-field>
                          <br/>
                          <codes-country />
                          <p class="label">Cédula*</p>
                          <v-text-field outlined justify-right placeholder="Número de cédula" color="#b380ff" height="25" class="textfield"></v-text-field>
                          <v-checkbox checked v-model="checkOne" color="#b380ff" on-icon="mdi-checkbox-blank">
                            <template v-slot:label>
                              <p class="checkbox">He leído y acepto los <b>Términos y Condiciones de uso.</b></p>
                            </template> 
                          </v-checkbox>
                          <v-btn class=" btnn" color="#7900ff" height="50">
                                Registrarme
                          </v-btn>
                          <br /> 
                         
                    </v-col>
                  </v-row>
                </v-card-text>
        </v-col>
        <v-col cols="3" sm="1" style="min-width: 100px;" class="flex-grow-0 flex-shrink-1" ></v-col>
      </v-row>
      </div>
</template>
<script>
/* import CountriesCodes from '~/assets/CountriesCodes.js'; */
export default {
    name: "formLogin",
    layout: "auth",
    data: () => ({}),
    code: codigosPaises,
    components: {  }
}
</script>
<style>
.template{
    background: white;
}
    .split-btn{
    display: inline-block;
  }
  .main-btn{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding-right: 2px !important;
  }
  .actions-btn{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding: 0 !important;
    min-width: 35px !important;
    margin-left: -3.5px;
  }
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
    font-size: 155%;
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
  p.item{
    font-family: MontserratMedium;
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
/*     estilos para elementos vuetify | Genesis */
    .boton{
    width: 155px;
    margin-left: -15px;
    margin-right: -15px;
  }
  .listitem{
    font-family: Montserrat;
  }
    .hint{
      margin-top: -15px;
      font-family: Montserrat;
    }
    .textfield{
      height: 50px;
      width: 100%;
      font-size: .9rem;
      font-family: Montserrat;
    }
    .label{
      margin-top: 35px;
      margin-left: -40px;
    }
    .v-messages__message {
      font-size: 10.5px;
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
      width: 100%;
  }
  .btnn {
      text-transform: unset !important;
      font-family: Montserrat;
      border: thin solid #CCCCCC;
      color: white !important;
      width: 100%;
  }
  .btnnn {
      text-transform: unset !important;
      font-family: Montserrat;
      border: thin solid #CCCCCC;
      color: white !important;
      width: 100%;
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
  .textfield input::placeholder {
  color: #999999 !important;
  opacity: 1;
}

</style>
