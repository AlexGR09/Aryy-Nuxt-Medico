<template>
    <div><v-row>
            <v-card flat>
    <v-list class="list-item" active-class="bgactive">
        <v-list-item-group
          v-model="selectedItem"
          color="#7900ff"
        >
          <v-list-item to="/accounts/edit/medicalProfile-info">
            <v-list-item-content active-class="bgactive">
              <v-list-item-title  class="titlee" >FORMACIÓN</v-list-item-title>
            </v-list-item-content >
          </v-list-item>
          <v-list-item to="/accounts/edit/MedicalProfileComponents/services">
            <v-list-item-content active-class="bgactive">
              <v-list-item-title  class="titlee">SERVICIOS</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/accounts/edit/MedicalProfileComponents/illnes">
            <v-list-item-content active-class="bgactive">
              <v-list-item-title  class="titlee">ENFERMEDADES</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
        <v-col md="10" lg="9" xl="10">
                
  <v-card flat height="800px" class="pa-3 mt-2">
    <v-card-subtitle class="pa-3  mt-n2 mb-n10"><H1 class="mb-5">SERVICIOS</H1></v-card-subtitle>
    <v-card-text class="pa-3 ">
  
    </v-card-text>
   </v-card>
        </v-col>
    </v-row>
  
  </div>
  </template>
  <script>
  export default {
    components: {
  },
    data () {
      return {
        selectedItem: 1,
      }
    },
  }
  </script>
  
  <style>
  
  .bgactive{
  background: #7900ff;
  color: white !important;
  fill: white !important;
  }
  .list-item {
  margin-top: 1em;
  }
  .titlee {
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  text-transform: unset !important;
  color: black;
  }
  .titlee:hover {
  
  color: #ffffff;
  }
  .v-list-item:hover {
  background: #7900ff;
  }
  
  .item-active {
  background-color: #7900ff;
  color: white !important;
  }
  a{
      text-decoration: none !important;
    }
  .save{
    font-family: Montserrat;
    text-transform: unset !important;
  }
  .restore{
    font-family: Montserrat;
    text-transform: unset !important;
  }
  .btn{
    font-family: Montserrat;
    text-transform: unset !important;
    color: #9966ff;
  }
  .textfield{
      height: 50px;
      width: 100%;
      font-size: .9rem;
      font-family: Montserrat;
    }
  H1{
    font-family: MontserratBold;
    font-size: 120%;
  }  
  span{
    font-family: Montserrat;
    font-size: 120%;
  }
  p{
    font-family: MontserratMedium;
    color: gray;
    font-size: 110%;
  }
  </style>