<template>
    <div>
        <p v-if="this.name===''">Sin datos registrssados</p>

      <v-list-item v-for="medication in medications" :key="medication"
      v-else
      style="font-family: Montserrat"
      class="ml-n7 mt-n5 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="mt-2">{{medication}}
        </v-list-item-title>
        <v-list-item-subtitle>
          1 comprimido cada 24 horas • 17/NOV/22 a 31/DIC/22
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    </div>
</template>

<script>
export default {
  layout: 'medicalRecord',
  components: {},
  data() {
    return {
      dialog: false,
      alimentarias: '',
      farmacos: '',
      ambientales: '',
      idif: '',
      medications: '',
      name: '',
    }
  },

  mounted() {
  this.medicine()
  this.medicineVer()
},
methods: {
  medicineVer() {
    this.$axios
      .get(
        `api/v1/physician/medical-history/previous-medication/${this.$route.params.medicalRecord}`,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      )
      .then((res) => {
        this.idif = res.data.data.id
        this.medications = res.data.data.previous_medication
        this.name = res.data.data.previous_medication[0]
      })
  },
  medicine() {
    this.$axios
      .get(
        `api/v1/physician/medical-history/previous-medication/${this.$route.params.patient}`,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      )
      .then((res) => {
        this.idif = res.data.data.id
        this.medications = res.data.data.previous_medication
        this.name = res.data.data.previous_medication[0]
      })
  },
}
}
</script>