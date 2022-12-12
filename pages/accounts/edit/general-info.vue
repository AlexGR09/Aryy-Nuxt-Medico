<template>
  <v-card flat class="pa-3 mt-2">
    <v-card-subtitle
      ><H1 class="mb-5">DETALLES DE LA CUENTA</H1></v-card-subtitle
    >
    <v-card-text class="d-flex">
      <v-avatar class="me-6" size="80">
        <v-img v-bind:src="require('@/assets/icons/avatar.png')"></v-img>
      </v-avatar>
      <div>
        <v-btn height="50px" class="white--text save" color="#7900ff" large
          >Actualizar foto</v-btn
        >
        <v-btn height="50px" class="restore ml-3" color="#999999" outlined large
          >Restaurar foto</v-btn
        >
        <p class="text-sm mt-5">
          Formatos permitidos: JPG o PNG. Tamaño máximo de archivo 2 MB, y
          512x512 píxeles.
        </p>
      </div>
    </v-card-text>
    <!-- formulario | Luis Reyes -->
    <v-col md="10" lg="10" xl="10">
      <v-card-text>
        <v-card-subtitle>
          <H1 class="ml-n5">INFORMACIÓN DE PERFIL</H1></v-card-subtitle
        >
        <v-form class="multi-col-validation mt-6">
          <v-row>
            <v-col md="12" lg="12" xl="4" cols="12">
              <span>Nombre*</span>
              <v-text-field
                v-model="name"
                color="#9966ff"
                class="textfield"
                placeholder="Selecciona una especialidad"
                outlined
              ></v-text-field>
            </v-col>
            <v-col md="6" lg="6" xl="4" cols="12">
              <span>Apellidos*</span>
              <v-text-field
                v-model="lastname"
                color="#9966ff"
                class="textfield"
                placeholder="Selecciona una especialidad"
                outlined
              ></v-text-field>
            </v-col>
            <v-col md="6" lg="6" xl="4" cols="12">
              <span>Género</span>
              <v-autocomplete
                v-model="gender"
                color="#9966ff"
                class="textfield"
                placeholder="Añadir"
                outlined
              ></v-autocomplete>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="12" lg="12" xl="4" cols="12">
              <span>Correo*</span> 
              <v-text-field
                v-model="email"
                color="#9966ff"
                class="textfield"
                placeholder="Selecciona una especialidad"
                outlined
              ></v-text-field>
            </v-col>
            <v-col md="6" lg="6" xl="4" cols="12">
              <span>Teléfono personal*</span>
              <v-text-field
                v-model="phoneNumber"
                color="#9966ff"
                class="textfield"
                placeholder="Selecciona una especialidad"
                outlined
              ></v-text-field>
            </v-col>
            <v-col md="6" lg="6" xl="4" cols="12">
              <span>Contraseña</span>
              <v-autocomplete
                v-model="password"
                color="#9966ff"
                class="textfield"
                placeholder="Añadir"
                outlined
              ></v-autocomplete>
            </v-col>
            <v-col md="6" lg="6" xl="4" cols="12">
              <span>Fecha de nacimiento*</span>
              <v-autocomplete
                v-model="birthday"
                color="#9966ff"
                class="textfield"
                placeholder="Añadir"
                outlined
              ></v-autocomplete>
            </v-col>
          </v-row>
          <v-row class="mt-5 ml-0">
            <v-btn
              @click="overlay = !overlay"
              height="50px"
              class="white--text save mt-7"
              color="#7900ff"
              large
              >Guardar cambios</v-btn
            >
            <v-btn
              height="50px"
              class="restore ml-3 mt-7"
              color="#999999"
              outlined
              large
              >Restaurar todo</v-btn
            >
            <v-overlay :value="overlay">
              <v-alert class="rounded-xl" icon="mdi-check-circle" color="green"
                >Datos actualizados correctamente.</v-alert
              >
            </v-overlay>
          </v-row>
        </v-form>
      </v-card-text>
    </v-col>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      name: '',
      lastname: '',
      gender: '',
      email: '',
      phoneNumber: '',
      password: '',
      birthday: '',
      select: { state: 'Hombre', estado: 'chiapas' },
      overlay: false,
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

  methods: {
    getinfoUser() {
              console.log('creando petición GET');
              this.$axios
              .get('/api/v1/user/profile',
              { 
                headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
              })
              .then(res => {
                       console.log(res)
                       console.log("exito en GET")
                       this.name = res.data.data.user.name
                       this.lastname = res.data.data.user.lastname
                       this.gender = res.data.data.user.gender
                       this.email = res.data.data.user.email
                       this.phoneNumber = res.data.data.user.phone_number
                       this.birthday = res.data.data.user.birthday
                      })
                  .catch(
                      /* console.log(e); */
                      console.log("error en GET")
                  )
          },
  },

  mounted() {
          console.log('verificando');
          this.getinfoUser();
      },
}
</script>