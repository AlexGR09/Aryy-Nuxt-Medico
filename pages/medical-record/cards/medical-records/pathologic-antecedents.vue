<template>
  <v-card-text class="mt-n7">
    <p class="titulo">Antecedentes patológicos</p>
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
            <span>ANTECEDENTES PATOLÓGICOS</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4" xl="12">
                  <p class="mb-n3">Cirugías previas</p>

                  <v-radio-group v-model="surgery" row>
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="surYes"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" value="surNo"></v-radio>
                  </v-radio-group>
                  <v-text-field
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="surgery == 'surYes'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                  <p class="mt-n4 mb-n3">Transfusiones</p>

                  <v-radio-group v-model="transfusion" row>
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="tranYes"
                    ></v-radio>
                    <v-radio
                      color="#b380ff"
                      label="No"
                      value="tranNo"
                    ></v-radio>
                  </v-radio-group>
                  <v-text-field
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="transfusion == 'tranYes'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                  <p class="mt-n4 mb-n3">Diabetes</p>

                  <v-radio-group v-model="diabetes" row>
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="diabYes"
                    ></v-radio>
                    <v-radio
                      color="#b380ff"
                      label="No"
                      value="diabNo"
                    ></v-radio>
                  </v-radio-group>
                  <v-text-field
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="diabetes == 'diabYes'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                  <p class="mt-n4 mb-n3">Cardiopatías</p>

                  <v-radio-group v-model="disease" row>
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="disYes"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" value="disNo"></v-radio>
                  </v-radio-group>
                  <v-text-field
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="disease == 'disYes'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="mt-n10 ml-5">
            <v-btn
              height="50px"
              class="white--text save mb-5"
              v-on:click="update"
              color="#7900ff"
              large
              >Guardar cambios</v-btn
            >
            <v-btn
              v-bind="attrs"
              v-on="on"
              height="50px"
              class="restore ml-3 mb-5"
              color="#999999"
              outlined
              large
              >Restaurar todo</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-divider class="mt-n1"></v-divider>
    <p>Sin antecedentes registrados</p>
    <p class="ml-3">
      <img
        class="mr-3"
        width="20"
        :src="require('@/assets/icons/iconos_hora.svg')"
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
      dialog: false,
      surgery: 'surNo',
      transfusion: 'tranNo',
      diabetes: 'diabNo',
      disease: 'disNo'
    }
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