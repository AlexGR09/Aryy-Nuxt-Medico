<template>
<v-row>

    <v-card-text>hola a los nuevos cambios</v-card-text>
    <v-btn 
                  @click="logout"
                  class="btnnn" color="#7900ff" height="50">
                    cerrar sesión
                  </v-btn>
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
export default{

    data(){
        return{
        }
    },
    methods:{
         logout () {
            localStorage.setItem("token",false)
    }
    },
};


</script>

<style>

</style>