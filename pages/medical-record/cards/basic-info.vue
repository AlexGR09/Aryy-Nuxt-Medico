<!-- Maquetación => Componente => Información básica | Genesis & Responsivo | Luis Reyes -->
<template>
  <v-card class="rounded-lg">
  <v-container>

    <v-toolbar flat color="transparent">
      <v-toolbar-title>Información Básica</v-toolbar-title>
    </v-toolbar>
  <v-row>
    <!-- telephone field -->
    <v-col
      cols="12"
      md="4"
      sm="4"
    >
      <v-text-field
        dense
        label="Télefono"
        prepend-icon="mdi-map-marker"
    
      >
      <template #prepend>
        <img 
          width="20"
          height="20"
          :src="require('@/assets/icons/icon_phone.svg')"
        />
      </template>
      </v-text-field>
    </v-col>
    <!-- Name field -->
    
    <v-col cols="12" md="4" sm="4">
          <v-text-field
          dense
          label="Nombre completo"
          >
            <template #prepend>
              <img
                width="20"
                height="20"
                :src="require('@/assets/icons/icon_user.svg')"
              />
            </template>
          </v-text-field>
    </v-col>

    <v-col cols="12" md="4" sm="4" >
          <v-text-field dense label="Fecha de nacimiento">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_birthday.svg')"
              />
            </template>
          </v-text-field>
        </v-col>

        <v-col cols="12" md="4" sm="4">
          <v-select dense label="Tipo de sangre" prepend-icon="mdi-map">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_bloodtype.svg')"
              />
            </template>
          </v-select>
        </v-col>

        <v-col cols="12" md="4" sm="4">   
          <v-text-field dense label="Estatura" suffix="M">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_height.svg')"
              />
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="12" md="4" sm="4">
          <v-select  dense label="Género">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_gender.svg')"
              />
            </template>
          </v-select >
        </v-col> 
  </v-row>

<!-- Signos vitales -->

 <!--  <v-row>
    

<v-toolbar flat color="transparent">
      <v-toolbar-title>Signos vitales</v-toolbar-title>
    </v-toolbar>

    <v-col cols="12" md="4" sm="4">
      <v-text-field
        dense
        label="Temperatura"
        prepend-icon="mdi-map-marker"
        suffix="°C"
      >
      <template #prepend>
        <img 
          width="20"
          height="20"
          :src="require('@/assets/icons/icon_temperature.svg')"
        />
      </template>
      </v-text-field>
    </v-col>


    <v-col cols="12" md="4" sm="4">
      <v-text-field
        dense
        label="Peso"
        prepend-icon="mdi-map-marker"
        suffix="Kg"
      >
      <template #prepend>
        <img 
          width="20"
          height="20"
          :src="require('@/assets/icons/icon_weight.svg')"
        />
      </template>
      </v-text-field>
    </v-col>
    


    <v-col cols="12" md="4" sm="4">
      <v-text-field
        dense
        label="Frecuencia respiratoria"
        suffix="R/M"
      >
      <template #prepend>
        <img 
          width="20"
          height="20"
          :src="require('@/assets/icons/icon_frequency.svg')"
        />
      </template>
      </v-text-field>
    </v-col>
    

    <v-col cols="12" md="4" sm="4">
      <v-text-field
        dense
        label="Sistolica"
        suffix="mmHg"
      >
      <template #prepend>
        <img 
          width="20"
          height="20"
          :src="require('@/assets/icons/icon_pressure.svg')"
        />
      </template>
      </v-text-field>
    </v-col>

    <v-col cols="12" md="4" sm="4">
      <v-text-field
        dense
        label="Diastolica"
        suffix="mmHg"
      >
      <template #prepend>
        <img 
          width="20"
          height="20"
          :src="require('@/assets/icons/icon_pressure.svg')"
        />
      </template>
      </v-text-field>
    </v-col>

    
    <v-col cols="12" md="4" sm="4">
      <v-text-field
        dense
        label="Frecuencia cardiaca"
        suffix="bpm"
      >
      <template #prepend>
        <img 
          width="20"
          height="20"
          :src="require('@/assets/icons/icon_pressureheart.svg')"
        />
      </template>
      </v-text-field>
    </v-col>


    <v-col cols="12" md="4" sm="4">
      <v-text-field
        dense
        label="Saturación de Oxigeno"
      >
      <template #prepend>
        <img 
          width="20"
          height="20"
          :src="require('@/assets/icons/icon_oxygen.svg')"
        />
      </template>
      </v-text-field>
    </v-col>



    <v-col cols="12" md="4" sm="4">
      <v-text-field
        dense
        label="Masa Muscular"
        suffix="%"
      >
      <template #prepend>
        <img 
          width="20"
          height="20"
          :src="require('@/assets/icons/icon_musculemass.svg')"
         
        />
      </template>
      </v-text-field>
    </v-col>


    <v-col cols="12" md="4" sm="4">
      <v-text-field
        dense
        label="Grasa corporal"
        suffix="%"
      >
      <template #prepend>
        <img 
          width="20"
          height="20"
          :src="require('@/assets/icons/icon_corporalfat.svg')"
         
        />
      </template>
      </v-text-field>
    </v-col>


  </v-row> -->

</v-container>
</v-card>
</template>

<script>
export default {
  data(){
    return{

    }
  },
}
</script>
