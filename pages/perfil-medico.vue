<template>
  <div>
    <v-container>
      <v-card>
        <v-toolbar color="cyan" dark flat>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Your Dashboard</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>

          <template v-slot:extension>
            <v-tabs v-model="tab" align-with-title>
              <v-tabs-slider color="yellow"></v-tabs-slider>

              <v-tab v-for="item in items" :key="item">
                {{ item }}
              </v-tab>
            </v-tabs>
          </template>
        </v-toolbar>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item">
            <v-card flat>
              <v-card-text></v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
      <v-row>
        <v-col cols="12" md="2" sm="6">
          <v-autocomplete
            label="Titulo"
            outlined
            dense
            :items="titulo"
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <v-text-field
            label="Nombre del médico* "
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" sm="4">
          <v-autocomplete
            label="Especialidad * "
            outlined
            dense
            v-model="select"
            :value.sync="specialties.name"
            :options="specialties"
          >
            <span slot=""></span>
          </v-autocomplete>
        </v-col>
        <v-col cols="12" md="2" sm="4">
          <v-text-field 
            label="No. de Cédula" 
            outlined 
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" sm="6">
            <v-text-field 
                outlined 
                dense 
                label="Institución quien lo otorga"
            ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" sm="6">
            <v-text-field 
                outlined 
                dense 
                label="Institución quien lo otorga"
            ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: ['Prof.', 'Profa.', 'Dr.', 'Dra.', 'Lic.', 'Mtro.', 'Mtra.'],
      specialties: [],
      select: '',
      tab: null,
        items: [
          'web', 'shopping', 'videos', 'images', 'news',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
  computed: {
    specialtie() {
      return Object.values(this.specialties)
    },
  },

  mounted() {
    this.GET_SPECIALTIES()
  },

  methods: {
    /* get specialties */
    GET_SPECIALTIES() {
      this.$axios
        .get('/api/v1/catalogue/specialties', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          this.specialties = res.data.data
        })
    },
  },
}
</script>

<style>
.temario{
    height: auto;
    
}
</style>
