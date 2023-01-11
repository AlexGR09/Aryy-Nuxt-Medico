<!-- seccion de alergias dentro de medical record | Genesis -->
<template>
  <v-card-text>
    <p class="titulo">Alergias</p>
    <div class="mb-2 mt-n11 d-flex justify-end">
      <v-dialog scrollable v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <img
              width="24"
              height="24"
              :src="require('@/assets/icons/icon_edit.svg')"
            />
          </v-btn>
        </template>
        <v-card  max-height="600px">
          <v-card-title>
            <span>ALERGIAS</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4" xl="12">
                  <p class="cuestion mb-n3">Alimentarias</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="alimentarias"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="alimYes"
                    ></v-radio>
                    <v-radio
                      color="#b380ff"
                      label="No"
                      value="alimNo"
                    ></v-radio>
                  </v-radio-group>
                  <v-text-field
                  color="#7900ff"
                    v-model="food"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="alimentarias == 'alimYes'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n4 mb-n3">Fármacos</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="farmacos"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="farmYes"
                    ></v-radio>
                    <v-radio
                      color="#b380ff"
                      label="No"
                      value="farmNo"
                    ></v-radio>
                  </v-radio-group>
                  <v-text-field
                  color="#7900ff"
                    v-model="drugs"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="farmacos == 'farmYes'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n4 mb-n3">Factores ambientales</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="ambientales"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="ambYes"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" value="ambNo"></v-radio>
                  </v-radio-group>
                  <v-text-field
                  color="#7900ff"
                    v-model="environmental"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="ambientales == 'ambYes'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="mt-n10 ml-5 mr-5">
            <v-btn
            block
            @click="overlay = !overlay"
              height="50px"
              class="white--text save mb-5"
              color="#7900ff"
              large
              >Guardar cambios</v-btn
            >
            <v-overlay :value="overlay">
                <v-alert
                  class="rounded-xl"
                  icon="mdi-check-circle"
                  color="green"
                  >Datos actualizados correctamente.</v-alert
                >
              </v-overlay>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-divider class="mt-n1"></v-divider>
    <p v-if="!alergias[0]">Sin alergías conocidas</p>
    <v-list-item
      v-for="alergia in alergias"
      :key="alergia"
      v-else
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Cirugias previas</v-list-item-title>
        <v-list-item-subtitle
          >{{ alergia.name }} en {{ alergia.date }}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
    <p class="ml-3">
      <img
        class="mr-3"
        width="20"
        :src="require('@/assets/icons/icon_timestamp.svg')"
      />Editado el 25 de diciembre de 2022
    </p>
  </v-card-text>
</template>
  <script>
export default {
  layout: 'medicalRecord',
  components: {},
  data() {
    return {
      overlay: false,
      dialog: false,
      alimentarias: '',
      farmacos: '',
      ambientales: '',
      alergias: [
      ]
    }
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false
        }, 2000)
    },
  },
}
</script>
  <style scoped>
p.titulo {
  font-family: MontserratMedium;
  color: #7900ff;
  font-size: 130%;
}
p {
  font-family: MontserratMedium;
  color: #999999;
}
p.cuestion {
  font-size: 115%;
}
span {
  color: #4f565f;
  font-family: MontserratBold;
}
.save {
  font-family: Montserrat;
  text-transform: unset !important;
}
.restore {
  font-family: Montserrat;
  text-transform: unset !important;
}
</style>