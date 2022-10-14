<!--Maquetación de Cards de Mensajes | Luis Reyes-->
<template>
    <div>
        <h3 class="title-card">CITAS</h3>
        <!--diseño de cards | Luis Reyes-->
        <v-card loading outlined elevation="8" class="v-card rounded-xl" >
            <v-row class="ma-0 pa-0">
                <v-col cols="8">
                    <v-card-title class="v-card-title text-no-wrap pt-1 ps-2">{{title}}</v-card-title>
                    <v-card-title class="v-card-subtitle text-no-wrap ps-2">{{name}}</v-card-title>
                    <v-card-subtitle class="d-flex align-center mt-2 pb-2 ps-2">
                        <div>
                            <p class="v-card-text">{{date}}</p>
                            <p class="v-card-text">{{time}}</p>
                        </div>
                    </v-card-subtitle>
                </v-col>
                <v-col  class="col-4" cols="4">
                    <v-img contain height="108" max-width="123" 
                        :src="require('@/assets/icons/icon_appointments.svg')">
                    </v-img>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>
<script>
export default{
    data(){
        return{
            title:"CITA PROXIMA",
            name:"Fulanito Detal",
            date: "05/ Diciembre / 2022",
            time:"10:00 HRS",  
        }
    }

}
</script>
<style>
/*importamos fuentes | Luis Reyes */
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

/* titulo H3| Luis Reyes */
.title-card {
    margin: 1rem;
    font-family: 'MontserratMedium';
    color: #4f565f;
}
.v-card-title{
    margin-top: 2em;
    font-family: 'MontserratMedium';
    font-size: 15px;
    color: #4f565f;
}
.v-card-subtitle{
    font-family: 'MontserratBold';
    font-size: 30px;
    color: #a563fe;
}
.v-card-text{
    font-family: 'MontserratBold';
    color: #4f565f;
    font-size: 15px;
}
.col-4{
    margin-top: 8vh;
}
</style> 


