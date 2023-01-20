<!-- Maquetación => Componente => Información básica | Genesis & Responsivo | Luis Reyes -->
<template>
  <v-container>
    <v-toolbar flat color="transparent">
      <v-toolbar-title>Información Básica</v-toolbar-title>
    </v-toolbar>
  <v-row no-gutters>
    <!-- telephone field -->
    <v-col
      cols="12"
      md="4"
      sm="4"
    >
      <v-text-field
        dense
        label="Télefono"
      >
      <template #prepend>
        <img 
          width="24"
          height="24"
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
                width="24"
                height="24"
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
          <v-text-field dense label="Tipo de sangre">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_bloodtype.svg')"
              />
            </template>
          </v-text-field>
        </v-col>

        <v-col cols="12" md="4" sm="4">
          <v-text-field dense label="Estatura">
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
          <v-text-field dense label="Género">
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_gender.svg')"
              />
            </template>
          </v-text-field>
        </v-col> 

        <v-col>
          <v-toolbar flat color="transparent">
      <v-toolbar-title>Signos vitales</v-toolbar-title>
    </v-toolbar>
        </v-col>

  </v-row>
</v-container>
</template>

<script>
export default {
  data(){
    return{

    }
  },
}
</script>

<!-- 




  
 -->