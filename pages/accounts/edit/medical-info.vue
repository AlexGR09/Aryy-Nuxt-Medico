<template>
<<<<<<< HEAD
  <div>
    <v-row>
      <v-card>
        <menuPersonal/>
      </v-card>
      <v-col md="10" lg="10" xl="10">
        <v-card flat class="pa-3 mt-2">
          <v-card-subtitle>PERFIL MÉDICO</v-card-subtitle>

        </v-card>

      </v-col>
    </v-row>
  </div>
       
       

=======
  <v-card flat class="pa-3 mt-2">
    <!-- formulario | Luis Reyes -->
    <v-card-subtitle>PERFIL MÉDICO</v-card-subtitle>
    <v-card-text>
      <v-form class="multi-col-validation mt-6">
        <v-row>
          <v-col md="4" cols="12">
            <v-text>Especialidad*</v-text>
            <v-select
              dense
              outlined
              v-model="select"
              :items="items"
              item-text="state"
              label="Select"
              persistent-hint
              return-object
              single-line
            >
            </v-select>
          </v-col>
          <v-col md="4" cols="12">
            <span>Cédula C1*</span>
            <v-text-field placeholder="12345678" dense outlined></v-text-field>
          </v-col>
          <v-col md="4" cols="12">
            <span>Foto del documento*</span>
            <v-file-input
              dense
              outline
              v-model="files"
              color="deep-purple accent-4"
              counter
              multiple
              filled
              placeholder="Seleciona el documento"
              outlined
              :show-size="1000"
            >
              <template v-slot:selection="{ index, text }">
                <v-chip v-if="index < 2">
                  {{ text }}
                </v-chip>

                <span
                  v-else-if="index === 2"
                  class="text-overline grey--text text--darken-3 mx-2"
                >
                  +{{ files.length - 2 }} File(s)
                </span>
              </template>
            </v-file-input>
          </v-col>
          <v-col md="6" cols="12">
            <v-text>Institución que otorgó la cédula</v-text>
            <v-select
              dense
              outlined
              v-model="select"
              :items="items"
              item-text="institution"
              label="Select"
              persistent-hint
              return-object
              single-line
            >
            </v-select>
          </v-col>
          <!-- alerta de chebox -->

          <v-col md="6" cols="12">
            <v-checkbox v-model="checkbox">
              <template v-slot:label>
                <div>
                  Confirmo que los datos proporcionados son correctos, y pueden
                  ser utillizados para elaborar mis recetas médicas,
                </div>
              </template>
            </v-checkbox>
          </v-col>
        </v-row>
        <v-btn class="mr-4" color="#9353ff" @click="submit">
          Guardar Cambios
        </v-btn>
        <v-btn @click="clear" outlined color="grey"> Restaurar todo </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
>>>>>>> Genesis
</template>

<script>
export default {
  data: () => ({
    files: [],
    select: { institution: 'Unach' },
    items: [
      { institution: 'UVG' },
      { institution: 'Salazar' },
      { institution: 'Universidad del sur' },
    ],
  }),
}
</script>