<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="2">
          <v-select
            v-model="sortBy"
            flat
            outlined
            dense
            solo-inverted
            hide-details
            :items="keys"
            placeholder="Ordenar por"
            class="hide-element"
          ></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="search"
            class="search"
            color="grey"
            dense
            background-color="white"
            outlined
            label="Búsqueda   "
            prepend-inner-icon="mdi-magnify"
          >
          </v-text-field>
        </v-col>
        <v-spacer></v-spacer>

        <!-- BOTONES  DE IMPORTAR Y EXPORTAR -->
        <v-col cols="12" md="2" class="hide-element">
          <v-btn outlined>
            <v-icon left dark>
              mdi-import
            </v-icon>
            Importar
          </v-btn>
        </v-col>
        <v-col cols="12" md="2" class="hide-element">
          <v-btn outlined>
            <v-icon left dark>
              mdi-export
            </v-icon>
            Exportar
            herramientas
            los nuevo en nuestro procesos de nuestros acadamicos
            ¿comó es que sabemos en nuestro?
          </v-btn>
        </v-col>
      </v-row>
      <!-- TABLA DINAMICA-->
      <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        hide-default-footer
        no-data-text="No hay pacientes disponibles"
        default-sort="somefield:desc"
      >
        <template v-slot:[`item.status`]="{ item }">
          <v-chip :color="getColor(item.status)" dark>
            {{ item.status }}
          </v-chip>
        </template>

        <!-- ACCIONES POR ITEMS -->
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn color="purple" dark x-small @click="editItem(item)">
            <v-icon small dark> mdi-eye </v-icon>
          </v-btn>
          <v-btn color="red" dark x-small @click="deleteItem(item)">
            <v-icon small dark> mdi-delete </v-icon>
          </v-btn>
        </template>
      </v-data-table>

      <!--paginación -->
      <v-row class="ma-4 d-flex justify-end" wrap>
        <v-col class="ma-4 d-flex justify-end" cols="12" md="6">
          <v-pagination
            v-model="page"
            color="#7900ff"
            :length="pageCount"
            :total-visible="5"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      filter: {},
      sortBy: 'name',
      sortDesc: false,
      
      dialog: false,
      dialogDelete: false,
      
      headers: [
        {
          text: 'Nombre completo',
          value: 'name',
          align: 'start',
          sortable: false,
        },
        {
          text: 'Teléfono',
          value: 'phone_number',
          align: 'start',
        },
        {
          text: 'Ultima cita',
          value: 'last_appointment',
        },
        {
          text: 'Status',
          value: 'status',
        },
        {
          text: 'Acciones',
          value: 'actions',
        },
      ],
      items: [],
      /* Opciones para el select de sort by | Genesis */

      keys: ['Nombre', 'Teléfono', 'Última cita'],
      search: '',
    }
  },
  computed: {
    filteredKeys() {
      return this.keys.filter((key) => key !== 'Nombre')
    },
  },



  mounted() {
    this.GET_DATA()
  },

  methods: {
  /* OBTENEMOS LISTA DE PACIENTES DE PARTE DEL ESPECIALISTA */
    GET_DATA() {
      this.$axios
        .get('/api/v1/physician/list-patients/', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((response) => {
          const obj = response.data.data
          const tamano = obj.length
          for (let i = 0; i < tamano; i++) {
            const objeto = {
              name: obj[i].patient.full_name,
              phone_number: obj[i].patient.user_info.phone_number,
              last_appointment: obj[i].last_appointment,
              status: obj[i].status,
            }
            this.items.push(objeto)
          }
        })
    },

    /* PINTA DE COLOR EL STATUS DE LA CITA */
    getColor(status) {
      const notassisted = 'not-assisted'
      const cancelled = 'cancelled'
      if (status === notassisted) return 'grey'
      else if (status === cancelled) return 'red'
      else return 'green'
    },


  },
}
</script>

<style>
@media screen and (max-width: 810px) {

  .hide-element {
    display: none;
  }
}
.select {
  font-family: MontserratMedium;
  font-size: 15px;
}
.select input::placeholder {
  color: #7900ff !important;
  opacity: 1;
}
</style>