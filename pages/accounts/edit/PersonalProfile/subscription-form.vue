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
        <v-card color="card" flat class="pa-3 mt-2">
          <v-card-subtitle class="pa-3 mt-n2 mb-n10">
            <H1 class="mb-5">DATOS DE LA SUSCRIPCIÓN</H1>
          </v-card-subtitle>
          <v-form ref="form" v-model="valid">
            <v-card-text class="pa-3 mt-5">
              <v-row>
                <!--  CAMPO TUPO DE PLAN| LUIS REYES -->
                <v-col md="4" cols="12">
                  <span>Tipo de plan</span>
                  <v-text-field
                    placeholder="Suscripción GOLD"
                    dense
                  ></v-text-field>
                </v-col>
                <!-- CAMPO NÚMERO DE USUARIO | LUIS REYES -->
                <v-col md="4" cols="12">
                  <span>Número de usuarios</span>
                  <v-text-field placeholder="1 usuario" dense></v-text-field>
                </v-col>
                <!-- CAMPO DATOS DE PAGOS | LUIS REYES -->
                <v-col md="4" cols="12">
                  <span>Datos de pagos</span>
                  <v-autocomplete dense placeholder="No hay datos de pago">
                  </v-autocomplete>
                </v-col>
              </v-row>
              <span class="input mt-5 mb-n4"
                >¿Quieres cancelar tu suscripción? Contacta a Soporte por el
                chat</span
              >
              <!-- botones -->
              <BR /><BR />
              <v-btn
                @click="overlay = !overlay"
                height="50px"
                class="white--text save mt-7"
                color="#7900ff"
                large
                >Editar suscripción</v-btn>
              <BR /><BR />

              <v-overlay :value="overlay">
                <v-alert
                  class="rounded-xl"
                  icon="mdi-check-circle"
                  color="green"
                  >Datos actualizados correctamente.</v-alert
                >
              </v-overlay>
                  <v-card-subtitle class="pa-3 mt-n2 mb-n10">
                    <H1 class="mb-5">MÉTODOS DE PAGO</H1>
                  </v-card-subtitle>
            </v-card-text>
            <br><br>
            <span>No hay método de pago guardado</span>
            <br><br>

            <v-btn class="btn " color="#9966ff" text><v-icon class="icon">mdi-plus-circle</v-icon>Agregar un método de pago</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
      <script>
          import account from '../account.vue';
          import menuPersonal from './menuPersonal.vue';
export default {
  components: {
  account, menuPersonal
  },
  data() {
    return {
      overlay: false,
      fileRecords: [],
      uploadUrl: 'https://example.com',
      selectedItem: 1,
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
          text: 'Subscripción',
          disabled: true,
          href: '/accounts/edit/personalprofile/subscription-form',
        },
      ],
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
    reset() {
      this.$refs.form.reset()
    },
  },
}
</script>
<style>
.v-input__icon--prepend .v-icon {
  color: #9966ff;
}
.input {
  margin-top: 5px;
  color: #9966ff !important;
  font-family: MontserratMedium;
  font-size: 15px;
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
span.breadcrumbs {
  font-family: Montserrat;
  color: #7900ff;
  font-size: 95%;
}
</style>