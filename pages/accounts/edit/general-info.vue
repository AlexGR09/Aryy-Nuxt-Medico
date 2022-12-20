<template>
  <div>
    <v-row>
      <v-card flat>
        <menuPersonal />
      </v-card>
      <v-col md="12" lg="11" xl="10">
        <v-card height="800px" flat class="pa-3">
          <v-col xl="12">
            <!-- alert para notificar error | Genesis -->
            <v-alert
              v-if="error"
              class="alert mt-n6 mb-9"
              v-model="errorphone"
              dense
              outlined
              type="error"
            >
              {{ errorphone }} <br />
              {{ passworderror }} <br />
              {{ erroremail }}
            </v-alert>
          </v-col>
          <!--  <v-card-subtitle
            ><H1 class="mb-5 mt-n8">FOTO DE PERFIL</H1></v-card-subtitle>
          {{ buttonText }}
          <v-card-text class="d-flex">
            <v-avatar class="me-6" size="80">
              <v-img
                v-if="!photo"
                v-bind:src="require('@/assets/icons/avatar.png')"
              ></v-img>
              <v-img v-else :src="imageUrl" />
            </v-avatar>
            <div>
              <v-btn
                height="50px"
                class="white--text save"
                style="text-transform: uppercase"
                :loading="isSelecting"
                @click="handleFileImport"
                color="#7900ff"
                large
              >
                Actualizar foto
              </v-btn>
              <input
                :v-model="selectedFile"
                ref="uploader"
                class="d-none"
                type="file"
                v-on:click="uploadfoto()"
                @change="onFileChanged"
              />
              <v-btn
                height="50px"
                class="restore ml-3"
                color="#999999"
                outlined
                large
                >Restaurar foto</v-btn
              >
              <p class="text-sm mt-5">
                Formatos permitidos: JPG o PNG. Tamaño máximo de archivo 2 MB, y
                512x512 píxeles.
              </p>
            </div>
          </v-card-text> -->
          <!-- formulario | Luis Reyes -->
          <v-card-text class="mt-n6">
            <v-card-subtitle
              ><H1 class="ml-n5 mt-n10"
                >INFORMACIÓN DE PERFIL</H1
              ></v-card-subtitle
            >
            <v-form ref="form" class="multi-col-validation">
              <v-row>
                <v-col xs="7" sm="11" md="7" lg="7" xl="7" cols="12">
                  <span>Nombre completo*</span>
                  <v-text-field
                    v-model="full_name"
                    color="#9966ff"
                    :disabled="!named"
                    class="textfield"
                    placeholder="Selecciona una especialidad"
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col xs="1" sm="1" md="1" lg="1" xl="1" cols="12">
                  <v-btn @click="named = !named" class="iconos mt-9" icon
                    ><v-img
                      :src="require('@/assets/icons/icon_edit.svg')"
                      max-width="25"
                    ></v-img> </v-btn
                ></v-col>

                <v-col xs="3" sm="5" md="3" lg="3" xl="3" cols="12">
                  <span>Género*</span>
                  <v-text-field
                    v-model="gender"
                    color="#9966ff"
                    :disabled="!genderd"
                    class="textfield"
                    placeholder="Selecciona una especialidad"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col xs="1" sm="1" md="1" lg="1" xl="1" cols="12">
                  <v-btn @click="genderd = !genderd" class="iconos mt-9" icon
                    ><v-img
                      :src="require('@/assets/icons/icon_edit.svg')"
                      max-width="25"
                    ></v-img> </v-btn
                ></v-col>

                <v-col xs="3" sm="5" md="3" lg="3" xl="3" cols="12">
                  <span>Teléfono personal*</span>
                  <v-text-field
                    v-model="phone_number"
                    color="#9966ff"
                    :disabled="!phoned"
                    class="textfield"
                    placeholder="Selecciona una especialidad"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col xs="1" sm="1" md="1" lg="1" xl="1" cols="12">
                  <v-btn @click="phoned = !phoned" class="iconos mt-9" icon
                    ><v-img
                      :src="require('@/assets/icons/icon_edit.svg')"
                      max-width="25"
                    ></v-img> </v-btn
                ></v-col>

                <v-col xs="3" sm="5" md="3" lg="3" xl="3" cols="12">
                  <span>Correo*</span>
                  <v-text-field
                    v-model="email"
                    :disabled="!emaild"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Selecciona una especialidad"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col xs="1" sm="1" md="1" lg="1" xl="1" cols="12">
                  <v-dialog
                    fullscreen
                    overlay-color="white"
                    transition="dialog-top-transition"
                    v-model="dialogg"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="emaild = !emaild" class="iconos mt-9" icon>
                        <v-img
                          v-bind="attrs"
                          v-on="on"
                          :src="require('@/assets/icons/icon_edit.svg')"
                          max-width="25"
                        ></v-img>
                      </v-btn>
                    </template>
                    <change-email />
                  </v-dialog>
                </v-col>

                <v-col xs="3" sm="5" md="3" lg="3" xl="3" cols="12">
                  <span>Fecha de nacimiento</span>
                  <v-dialog
                    ref="dialog"
                    v-model="modal"
                    :return-value.sync="date"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        color="#9966ff"
                        class="textfield"
                        outlined
                        :disabled="!dated"
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      locale="es-mx"
                      color="#9966ff"
                      v-model="date"
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="modal = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.dialog.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-col>
                <v-col xs="1" sm="1" md="1" lg="1" xl="1" cols="12">
                  <v-btn @click="dated = !dated" class="iconos mt-9" icon
                    ><v-img
                      :src="require('@/assets/icons/icon_edit.svg')"
                      max-width="25"
                    ></v-img> </v-btn
                ></v-col>
                <v-col xs="3" sm="5" md="3" lg="3" xl="3" cols="12">
                  <span>Contraseña*</span>
                  <v-text-field
                    v-model="password"
                    color="#9966ff"
                    :disabled="!passwordd"
                    class="textfield"
                    placeholder="********"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col xs="1" sm="1" md="1" lg="1" xl="1" cols="12">
                  <v-btn
                    @click="passwordd = !passwordd"
                    class="iconos mt-9"
                    icon
                    ><v-img
                      :src="require('@/assets/icons/icon_edit.svg')"
                      max-width="25"
                    ></v-img> </v-btn
                ></v-col>
                <v-col v-if="passwordd" md="3" cols="12">
                  <span>Confirmar contraseña*</span>
                  <v-text-field
                    v-model="password_confirmation"
                    color="#9966ff"
                    :disabled="!passwordd"
                    class="textfield"
                    placeholder="********"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
              <div class="mt-8">
                <v-btn
                  height="50px"
                  class="white--text save"
                  v-on:click="update"
                  color="#7900ff"
                  large
                  >Actualizar datos</v-btn
                >
                <v-overlay v-if="ok" v-model="overlay">
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
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import changeEmail from './PersonalProfile/changeEmail.vue'
import menuPersonal from '@/pages/accounts/edit/PersonalProfile/menuPersonal.vue'
export default {
  components: {
    menuPersonal,
    changeEmail,
  },

  data() {
    return {
      error: '',
      ok: '',
      errorphone: '',
      passworderror: '',
      erroremail: '',
      msg: '',
      photo: '',
      defaultButtonText: '',
      imageUrl: '',
      emaild: '',
      genderd: '',
      phoned: '',
      named: '',
      dated: '',
      passwordd: '',
      passwords: [],
      overlay: false,
      full_name: '',
      gender: '',
      email: '',
      phone_number: '',
      password: '',
      password_confirmation: '',
      password_confirmationerror: '',
      birthday: '',
      isSelecting: false,
      selectedFile: null,
      dialog: false,
      dialogg: false,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      modal: false,
      select: { state: 'Hombre', estado: 'chiapas' },
      items: [
        { state: 'Hombre', estado: 'Chiapas' },
        { state: 'Mujer', estado: 'Guerrero' },
        { state: 'No binario', estado: 'Puebla' },
      ],
      emailRules: [
        (v) => !!v || 'E-mail is necesario',
        (v) => /.+@.+/.test(v) || 'E-mail invalido',
      ],
    }
  },
  computed: {
    buttonText() {
      return this.selectedFile ? this.selectedFile.name : this.defaultButtonText
    },
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
    getinfoUser() {
      console.log('creando petición GET')
      this.$axios
        .get('/api/v1/user/profile', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          console.log(res)
          console.log('exito en GET')
          this.full_name = res.data.data.full_name
          this.gender = res.data.data.gender
          this.email = res.data.data.email
          this.phone_number = res.data.data.phone_number
          this.birthday = res.data.data.birthday
          this.password = res.data.data.password
          /*  this.password = res.data.data.password */
        })
        .catch(
          /* console.log(e); */
          console.log('error en GET')
        )
    },

    update() {
      this.$axios
        .put(
          '/api/v1/user/profile',
          {
            full_name: this.full_name,
            gender: this.gender,
            email: this.email,
            phone_number: this.phone_number,
            birthday: this.date,
            country_code: '52',
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

    reset() {
      this.$refs.form.reset()
    },
  },

  mounted() {
    console.log('verificando')
    this.getinfoUser()
  },
}
</script>
<style>
h1 {
  font-family: Montserrat;
}
p.reset {
  font-family: Montserrat;
  font-size: 90%;
}
.alert {
  font-family: Montserrat;
}
</style>

