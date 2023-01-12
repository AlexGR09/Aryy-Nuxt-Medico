<template>
  <div>
    <v-card height="800px" flat class="pa-3 montserrat">
      <v-card-title> AJUSTES DE CUENTA </v-card-title>
      <v-card-subtitle>
        Edita tu correo, tu contraseña o tu teléfono. Esta información es
        privada y no aparecerá en tu perfil público.
      </v-card-subtitle>
      <v-card-text class="mt-8">
        <v-row>
          <v-col cols="11" xs="11" sm="8" md="8" lg="8" xl="8">
            <p>Correo</p>
            <v-text-field
              color="#7900ff"
              :disabled="!correo"
              filled
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="1" xl="1">
            <v-btn @click="correo = !correo" class="iconos mt-9" icon
              ><v-img
                :src="require('@/assets/icons/icon_edit.svg')"
                max-width="25"
              ></v-img>
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="mt-n6" cols="11" xs="11" sm="8" md="8" lg="8" xl="8">
            <p>Contraseña</p>
            <v-text-field
              color="#7900ff"
              :disabled="!password"
              filled
              outlined
            ></v-text-field>
          </v-col>
          <v-col class="mt-n6" cols="1" xl="1">
            <v-btn @click="password = !password" class="iconos mt-9" icon
              ><v-img
                :src="require('@/assets/icons/icon_edit.svg')"
                max-width="25"
              ></v-img>
            </v-btn>
          </v-col>
          <v-col class="mt-n6" cols="11" xs="11" sm="8" md="8" lg="8" xl="8">
            <p>Teléfono</p>
          
              <v-text-field
              :disabled="!tel"
                v-model="phone"
                color="#7900ff"
                filled
                outlined
                placeholder="XXX XXX XXXX"
              >
              </v-text-field>
          </v-col>
          <v-col class="mt-n6" cols="1" xl="1">
            <v-btn @click="tel = !tel" class="iconos mt-9" icon
              ><v-img
                :src="require('@/assets/icons/icon_edit.svg')"
                max-width="25"
              ></v-img>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      correo: '',
      password: '',
      tel: '',
    }
  },
}
</script>
<style>
p {
  font-size: 1.7vh;
  margin-bottom: 0px !important;
}
.montserrat {
  font-family: Montserrat;
}
.v-card__title {
  font-family: MontserratBold;
  color: #4f565f;
}
.v-card__subtitle {
  font-size: 1.7vh;
}
</style>