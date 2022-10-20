<!-- maquetación | Luis Reyes-->
<template>
    <div class="container">
        <!-- <Navbar color="transparent"></Navbar> -->
        <v-list-item-title class="title-name mb-1"> Bienvenido, Dr {{name}}</v-list-item-title>
        <v-card-subtitle class="subtitle d-flex align-center mt-2 pb-2 ps-2">Tiene {{ appointment }} <strong> citas </strong> el día de hoy</v-card-subtitle>
        
        <v-row class="row ">
            <v-col cols="12" md="4">
                <DashboardCitas />
            </v-col>
            <v-col cols="12" md="4">
                <DashboardCitas />
            </v-col>
            <v-col cols="12" md="4">
                <DashboardCitas />
            </v-col>
            <v-col cols="12" md="8">
<!--                 <v-row >
                    <v-col cols="12" md1="4">
                        <DashboardMarketing />
                    </v-col>
                    <v-col cols="12" md="4">
                        <DashboardAssistant/>
                    </v-col>
                </v-row> -->
            </v-col>
<!--             <v-col cols="12" sm="6" md="4">
                <DashboardMensajes />
            </v-col>
            <v-col cols="12" md="8">
                 <DashboardNoticias /> 
            </v-col> -->
        </v-row>
    </div>
</template>

<script>

import DashboardAssistant from '~/components/dashboard/DashboardAssistant.vue';

export default {
    name: "IndexPage",
    components: {  DashboardAssistant },
    data(){
        return{
            name:"Armando Bronca Segura",
            appointment:"4",  
        }
    }
}
</script>


<style>
/*importamos fuentes | Luis Reyes */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');

.title-name{
    font-family: 'MontserratBold';
    font-size: 25px;
    color: #6c0bfe;
}
.subtitle {
    font-family: 'MontserratBold';
    font-size: 15px;
    color: #4f565f;
}

.caja{
    text-align: center;
}


</style>