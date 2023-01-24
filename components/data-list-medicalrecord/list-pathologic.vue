<template>
 <div>
  <p v-if="this.msg">Sin datos registrados</p>
   <div v-else>
    <v-list-item v-if="this.previous_surgeries!='No'"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Cirugías previas</v-list-item-title>
        <v-list-item-subtitle
          >{{previous_surgeries}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item v-if="this.blood_transfusions!='No'"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Transfusiones</v-list-item-title>
        <v-list-item-subtitle
          >{{blood_transfusions}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.diabetes!='No'"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Diabetes</v-list-item-title>
        <v-list-item-subtitle
          >{{diabetes}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.heart_diseases=null"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Cardiopatías</v-list-item-title>
        <v-list-item-subtitle
          >{{heart_diseases}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.blood_pressure!='No'"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Presión arterial</v-list-item-title>
        <v-list-item-subtitle
          >{{blood_pressure}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.thyroid_diseases!='No'"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Enfermedades tiroideas</v-list-item-title>
        <v-list-item-subtitle
          >{{thyroid_diseases}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.cancer!='No'"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Cancer</v-list-item-title>
        <v-list-item-subtitle
          >{{cancer}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.blood_diseases!='No'"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Enfermedades de la sangre</v-list-item-title>
        <v-list-item-subtitle
          >{{blood_diseases}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.kidney_stones!='No'"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Cálculos renales</v-list-item-title>
        <v-list-item-subtitle
          >{{kidney_stones}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.hepatitis!='No'"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Hepatitis</v-list-item-title>
        <v-list-item-subtitle
          >{{hepatitis}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.trauma!='No'"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Traumatismos</v-list-item-title>
        <v-list-item-subtitle
          >{{trauma}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.respiratory_diseases!='No'"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Patologías respiratorias</v-list-item-title>
        <v-list-item-subtitle
          >{{respiratory_diseases}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.gastrointestinal_pathologies!='No'"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Patologías gastrointestinales</v-list-item-title>
        <v-list-item-subtitle
          >{{gastrointestinal_pathologies}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.ets!='No'"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Enfermedades de transmisión sexual</v-list-item-title>
        <v-list-item-subtitle
          >{{ets}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
   </div>
  
  </div>
</template>

<script>
export default {
  layout: 'medicalRecord',
  components: {},
  data() {
    return {
        blood_pressure:'',
        blood_diseases: '',
        blood_transfusions:'',
        cancer:'',
        diabetes:'',
        ets:'',
        gastrointestinal_pathologies:'',
        heart_diseases:'',
        hepatitis:'',
        kidney_stones:'',
        previous_surgeries:'',
        respiratory_diseases:'',
        thyroid_diseases:'',
        trauma:'',
        msg:'',
    }
  },
  mounted() {
    this.datos()
  },
  methods: {
    /* obtener informacion | Genesis */
    datos() {
      this.$axios
        .get(
          `api/v1/medical-history/physician/pathological-background/patient/${this.$route.params.medicalRecord}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.blood_pressure = res.data.data.blood_pressure
          this.blood_transfusions = res.data.data.blood_transfusions
          this.cancer = res.data.data.cancer
          this.diabetes = res.data.data.diabetes
          this.ets = res.data.data.ets
          this.blood_diseases = res.data.data.blood_diseases
          this.gastrointestinal_pathologies = res.data.data.gastrointestinal_pathologies
          this.heart_diseases = res.data.data.heart_diseases
          this.hepatitis = res.data.data.hepatitis
          this.kidney_stones = res.data.data.kidney_stones
          this.previous_surgeries = res.data.data.previous_surgeries
          this.respiratory_diseases = res.data.data.respiratory_diseases
          this.thyroid_diseases = res.data.data.thyroid_diseases
          this.trauma = res.data.data.trauma
        this.msg=res.data.msg
        })
    },
  },
}
</script>
<style>
p{
  font-family: MontserratMedium;
  color: #4f565f;
}</style>