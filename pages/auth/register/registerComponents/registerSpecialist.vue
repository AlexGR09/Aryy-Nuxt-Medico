<template>
         <v-card flat>
                <h2>Crea tu perfil gratuito como especialista</h2>
                <router-link
                          style="text-decoration: none;
                          color: inherit;"
                          to="/auth/login"
                          ><h3 class="a"><v-icon color="#9966ff">mdi-arrow-left</v-icon>Registrarme como paciente</h3>
                        </router-link>
              <!--   <a href="/login"><h3 class="a"><v-icon color="#9966ff">mdi-arrow-left</v-icon>Registrarme como paciente</h3></a> -->
                <v-card-text >
                
                  <v-row> 
                  <v-col xs="8" sm="9" md="9" lg="12" xl="9">
                    <p class="label">Ciudad*</p>
                      <v-autocomplete justify-right placeholder="Selecciona una ciudad" rounded height="25" class="textfield"></v-autocomplete>
                    </v-col>
                    </v-row>
                  <v-row> 
                    <v-col  xs="5" sm="5" md="5" lg="5" xl="5"><p class="label">Teléfono*</p> 
                      <v-autocomplete width="15px" :items="Countries" justify-right placeholder="Código país" rounded height="25" class="textfield"> </v-autocomplete> 
               <!--        <li v-for="Country in Countries" :key="Country.name">
         {{Country.dial_code}}
       </li>  -->
                    </v-col>
                    <v-col xs="6" sm="6" md="6" lg="6" xl="6">
                    <v-text-field placeholder="Número de teléfono (10 dígitos)" class="textfield label" rounded ></v-text-field>
                    </v-col>
                    <v-input class="hint" hint="Éste número se utilizará para verificación del usuario (no aparecerá en su perfil)" persistent-hint>
                    </v-input></v-row>
                    
                    <v-row>
                      <v-col xs="8" sm="9" md="9" lg="12" xl="9"><br/>
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
              </v-card>
</template>

<script>
import CountriesCodes from '~/components/CountriesCodes.json';
      export default {
        name: "formLogin",
        layout: "auth",
        data: () => ({
          tabs: 1,
          Countries: CountriesCodes,
          items: [
        { title: 'Especialista', to: 'register' },
        { title: 'Paciente' },
      ],
          checkbox: false,
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