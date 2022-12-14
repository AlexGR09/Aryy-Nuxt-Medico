<template>
  <div>
    <v-row>
      <v-card flat>
        <menuPersonal />
      </v-card>
      <v-col md="12" lg="10" xl="10">
        <v-card flat class="pa-3 mt-2">
          <v-card-subtitle
            ><H1 class="mb-5">FOTO DE PERFIL</H1></v-card-subtitle
          >
          {{ buttonText }}
          <v-card-text class="d-flex">
            
            <v-avatar class="me-6" size="80">
              <!-- <v-img v-bind:src="require('@/assets/icons/avatar.png')"></v-img> -->
              <v-img :src="imageUrl"  />
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
          </v-card-text>
          <!-- formulario | Luis Reyes -->

          <v-card-text>
            <v-card-subtitle
              ><H1 class="ml-n5">INFORMACIÓN DE PERFIL</H1></v-card-subtitle
            >
            <v-form ref="form" class="multi-col-validation mt-6">
              <v-row>
                <v-col xs="7" sm="7" md="7" lg="7" xl="7" cols="12">
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
                      :src="require('@/assets/icons/Iconos_EDITAR.svg')"
                      max-width="25"
                    ></v-img> </v-btn
                ></v-col>

                <v-col xs="3" sm="3" md="3" lg="3" xl="3" cols="12">
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
                      :src="require('@/assets/icons/Iconos_EDITAR.svg')"
                      max-width="25"
                    ></v-img> </v-btn
                ></v-col>

                <v-col xs="3" sm="3" md="3" lg="3" xl="3" cols="12">
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
                      :src="require('@/assets/icons/Iconos_EDITAR.svg')"
                      max-width="25"
                    ></v-img> </v-btn
                ></v-col>

                <v-col xs="3" sm="3" md="3" lg="3" xl="3" cols="12">
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
                  <v-btn @click="emaild = !emaild" class="iconos mt-9" icon>
                    <v-img
                      :src="require('@/assets/icons/Iconos_EDITAR.svg')"
                      max-width="25"
                    ></v-img>
                  </v-btn>
                </v-col>

                <v-col xs="3" sm="3" md="3" lg="3" xl="3" cols="12">
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
                      :src="require('@/assets/icons/Iconos_EDITAR.svg')"
                      max-width="25"
                    ></v-img> </v-btn
                ></v-col>
                <v-col xs="3" sm="3" md="3" lg="3" xl="3" cols="12">
                  <span>Contraseña*</span>
                  <v-text-field
                    v-model="password"
                    color="#9966ff"
                    :disabled="!passwordd"
                    class="textfield"
                    placeholder="Selecciona una especialidad"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col xs="1" sm="1" md="1" lg="1" xl="1" cols="12">
                  <v-btn
                    @click="passwordd = !passwordd"
                    class="iconos mt-9"
                    icon
                    ><v-img
                      :src="require('@/assets/icons/Iconos_EDITAR.svg')"
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
                    placeholder="Selecciona una especialidad"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
              <div class="mt-8">
                <v-btn
                  height="50px"
                  @click="overlay = !overlay"
                  class="white--text save"
                  v-on:click="update"
                  color="#7900ff"
                  large
                  >Actualizar datos</v-btn
                >
                <v-overlay :value="overlay">
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
import menuPersonal from '@/pages/accounts/edit/PersonalProfile/menuPersonal.vue'
export default {
  components: {
    menuPersonal,
  },

  data() {
    return {
      defaultButtonText: '',
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
      birthday: '',
      isSelecting: false,
      selectedFile: null,
      dialog: false,
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
    }
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
    uploadfoto() {
      const formData = new FormData()
      formData.append('photo', this.selectedFile)

      this.$axios.post('/api/v1/user/uploadprofilephoto', formData, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'multipart/form-data',
        },
      })
    },
    handleFileImport() {
      this.isSelecting = true

      // After obtaining the focus when closing the FilePicker, return the button state to normal
      window.addEventListener(
        'focus',
        () => {
          this.isSelecting = false
        },
        { once: true }
      )

      // Trigger click on the FileInput
      this.$refs.uploader.click()
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0]

      // Do whatever you need with the file, liek reading it with FileReader
    },
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

    getPhoto(a) {
      this.$axios
        .get('/api/v1/user/getprofilephoto')
        .then(({ data }) => {
          this.img = data.data.profile_photo
        })
    },
    
    avatar() {
      console.log('creando petición GET')
      this.$axios
        .get('/api/v1/user/getprofilephoto', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          this.avatar = res.data.data.profile_photo
        })
    },

    update() {
      this.$axios.put(
        '/api/v1/user/profile',
        {
          full_name: 'dra Ana',
          gender: 'femenino',
          email: this.email,
          phone_number: this.phone_number,
          birthday: '2000-02-15',
          country_code: '52',
          password: this.password,
          password_confirmation: this.password_confirmation,
        },
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        }
      )
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
p.reset {
  font-family: Montserrat;
  font-size: 90%;
}
</style>

