<template>
<v-row>

    <v-card-text>hola a los nuevos cambios</v-card-text>
   <!--  <p  v-for="(restaurant, index) in restaurants" :key="index">{{restaurant.name}}</p> -->
    <v-col
        cols="12"
        md="4"
    >
        <dashboard-citas/>
    </v-col>
    <v-col
        cols="12"
        md="4"
    >
        <dashboard-marketing/>
    </v-col>
    <v-col
        cols="12"
        md="4"
    >
        <dashboard-assistant/>
    </v-col>
</v-row>
    
</template>

<script>
/* import axios from 'axios'; */
import api from '~/services/api';
export default{

    async created(){
        const response = await api.getRestaurants()
        if(response.status === 200) {
            this.restaurants = response.data
        }
    },
    data(){
        return{
            characters: [],
            restaurants: []
        }
    },
    mounted() {
          console.log('verificando');
        /*   this.getTodos(); */
  
      },
    methods: {
       /*  getTodos() {
              console.log('peticion GET');
              axios.get('https://app.aryymd.com/api/v1/searchphy')
                  .then(res => {
                       console.log(res)
                      this.characters = res.data.results
                  })
                  .catch(e => {
                      console.log(e);
                  })
          }, */
}
};



</script>

<style>

</style>