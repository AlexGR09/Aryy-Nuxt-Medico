<template>
  <div>
    <v-row>
      <v-card flat>
        <menuPersonal />
      </v-card>
      <v-col cols="12" md="4" lg="10" xl="10">
        <v-card flat class="pa-3 mt-2">
          <v-card-subtitle>PERFIL MÉDICO</v-card-subtitle>
          <v-card-text class="d-flex">
            <v-avatar rounded size="80" class="me-6">
              <v-img v-bind:src="require('@/assets/icons/avatar.png')"></v-img>
            </v-avatar>
            <div>
              <v-btn color="#9353ff" class="me-3 mt-5">
                <span>Actualizar foto</span>
              </v-btn>
              <input accept=".png, .jpg" :hidden="true" />
              <v-btn class="mt-5" outlined color="gray">Restaurar foto</v-btn>
              <p class="text-sm mt-5">
                formatos permitidos: JPG o PNG. Tamaño máximo de archivo 2 MB, y
                512x512 píxeles.
              </p>
            </div>
          </v-card-text>
          <!-- formulario | Luis Reyes -->

          <v-card-text>
            <v-card-subtitle>INFORMACIÓN DEL PERFIL</v-card-subtitle>
            <v-form class="multi-col-validation mt-6">
              <v-row>
                <v-col md="4" cols="12" sm="6">
                  <v-text-field
                    label="Nombre(s)*"
                    placeholder="Luis Ángel"
                    dense
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col md="4" cols="12" sm="6">
                  <span>Apellido(s)*</span>
                  <v-text-field
                    placeholder="Bronca Segura"
                    dense
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col md="4" cols="12">
                  <span>Género</span>
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
                  <v-text>Correo*</v-text> <br />
                  <v-text-field
                    v-model="email"
                    dense
                    outlined
                    :rules="emailRules"
                    placeholder="Armandobs@gmail.com"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-col md="4" cols="12">
                  <v-text>Teléfono*</v-text> <br />
                  <v-text-field
                    v-model="phoneNumber"
                    dense
                    append-outer-icon="mdi-map-marker"
                    outlined
                    placeholder="+52 xxx xxx xxxx"
                    required
                  >
                    <v-icon slot="append" color="red"> mdi-plus </v-icon>
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text>Sobre mí</v-text>
                  <v-textarea
                    dense
                    outlined
                    color="teal"
                    placeholder="Escribe arcerca de ti."
                    counter
                    maxlength="1200"
                  >
                  </v-textarea>
                </v-col>

                <v-col md="4" cols="12">
                  <span>Estado*</span>
                  <v-select
                    dense
                    outlined
                    v-model="select"
                    :items="items"
                    item-text="estado"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                  >
                  </v-select>
                </v-col>
                <v-col md="4" cols="12">
                  <span>Ciudad o Municipio</span>
                  <v-select
                    dense
                    outlined
                    v-model="select"
                    :items="items"
                    item-text="estado"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                  >
                  </v-select>
                </v-col>
                <v-col md="4" cols="12">
                  <span>Código postal</span>
                  <v-text-field
                    ref="zip"
                    dense
                    outlined
                    v-model="zip"
                    :rules="[() => !!zip || 'es necesario']"
                    required
                    placeholder="29000"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-btn class="mr-4" color="#9353ff" @click="submit">
                Guardar Cambios
              </v-btn>
              <v-btn @click="clear" outlined color="grey">
                Restaurar todo
              </v-btn>
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
      select: { state: 'Hombre', estado: 'chiapas' },
      items: [
        { state: 'Hombre', estado: 'Chiapas' },
        { state: 'Mujer', estado: 'Guerrero' },
        { state: 'No binario', estado: 'Puebla' },
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is necesario',
        (v) => /.+@.+/.test(v) || 'E-mail invalido',
      ],
    }
  },
}
</script>
