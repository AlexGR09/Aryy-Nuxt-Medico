<!-- seccion de medicamento activo dentro de medical record | Genesis -->
<template>
  <v-card-text class="mt-n7">
    <p class="titulo">Medicamento activo</p>
    <div class="mb-2 mt-n11 d-flex justify-end">
      <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <img
              width="24"
              height="24"
              :src="require('@/assets/icons/icon_edit.svg')"
            />
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span>HISTORIAL DE MEDICAMENTOS</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col v-for="medicamento in medicamentos" :key="medicamento.name" cols="12" sm="6" md="4" xl="12">
                  <p >{{medicamento.name}} • {{medicamento.mg}} • {{medicamento.presentation}}</p>
                  <p class="sub mt-n5">
                    {{medicamento.indication}} • {{medicamento.date}}
                  </p>
                  <v-row class="mt-n8">
                    <v-col cols="3">
                      <v-checkbox
                        class="checkbox"
                        color="#7900ff"
                        label="Completado"
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="4">
                      <v-checkbox
                        class="checkbox"
                        color="#7900ff"
                        label="No completado"
                      ></v-checkbox>
                    </v-col>
                  </v-row>
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
    <p>Sin datos registrados</p>
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
        medicamentos: [
                {
                    name: 'Enalapril',
                    mg: "10 mg",
                    presentation: 'Tabletas',
                    indication: "1 tableta cada 24 horas",
                    date:'25/DIC/22 a 25/ENE/2023',
                },
                {
                    name: 'Losartán',
                    mg: "50 mg",
                    presentation: 'Comprimido',
                    indication: "1 comprimido cada 24 horas",
                    date:'25/DIC/22 a 25/ENE/2023',
                },
               
            ],
      dialog: false,
      alimentarias: '',
      farmacos: '',
      ambientales: '',
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
  color: #4f565f;
}
p.sub {
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
.checkbox {
  font-family: Montserrat;
}
</style>