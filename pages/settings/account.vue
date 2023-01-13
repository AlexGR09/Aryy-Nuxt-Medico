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
              v-model="email"
              color="#7900ff"
              :disabled="!correo"
              filled
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="1" xl="1">
            <v-btn
              v-on:click="
                $router.push('/accounts/edit/personalprofile/changeemail/')
              "
              @click="correo = !correo"
              class="iconos mt-9"
              icon
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
              v-model="password"
              color="#7900ff"
              :disabled="!pass"
              placeholder="********"
              filled
              outlined
            ></v-text-field>
          </v-col>
          <v-col class="mt-n6" cols="1" xl="1">
            <v-btn @click="pass = !pass" class="iconos mt-9" icon
              ><v-img
                :src="require('@/assets/icons/icon_edit.svg')"
                max-width="25"
              ></v-img>
            </v-btn>
          </v-col>
          <v-col
            v-if="pass"
            class="mt-n6"
            cols="11"
            xs="11"
            sm="8"
            md="8"
            lg="8"
            xl="8"
          >
            <span>Confirmar contraseña*</span>
            <v-text-field
              v-model="password_confirmation"
              color="#7900ff"
              :disabled="!pass"
              placeholder="********"
              outlined
              filled
            ></v-text-field>
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
      email: '',
      password: '',
      phone: '',

      correo: false,
      pass: false,
      tel: false,
    }
  },
  methods: {
    getinfoUser() {
      console.log('creando petición GET')
      this.$axios
        .get('/api/v1/user/profile', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          console.log(res)
          console.log('exito en GET')
          this.email = res.data.data.email
          this.phone = res.data.data.phone_number
        })
        .catch(
          console.log('error en GET')
        )
    },
    update() {
      this.$axios
        .put(
          '/api/v1/user/profile',
          {
            email: this.email,
            phone_number: this.phone_number,
            password: this.password,
            password_confirmation: this.password_confirmation,
          },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then(() => {
          this.overlay = true
          this.ok = 'ok'
          if (this.password_confirmation === '') {
            this.$router.go(this.$router.currentRoute)
          } else {
            localStorage.removeItem('token')
            console.log('cierre de sesión')
            this.$router.replace('/auth/login')
          }
        })
        .catch((error) => {
          this.error = 'error'
          this.errorphone = error.response.data.errors.phone_number[0]
          this.passworderror = error.response.data.errors.password[0]
          this.erroremail = error.response.data.errors.email[0]
        })
    },

  },
  mounted() {
    this.getinfoUser()
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