<!--Maquetación de Cards de Mensajes | Luis Reyes-->
<template>
    <v-card
        outlined
        elevation="2"
        class="rounded-xl d-flex justify-center mb-6"
    >
        <v-row class="ma-0 pa-0 d-flex justify-center mb-6"  >
            <v-col cols="8">
                <v-card-title class="title-marketing pt-1 ps-2">{{title}}</v-card-title>
                <v-card-subtitle class="subtitle-marketing ps-2">{{subtitle}}</v-card-subtitle>
                    <v-img contain height="100" max-width="80" 
                        :src="require('@/assets/icons/icon_cards_marketing.svg')">
                    </v-img>
                <v-card-text class="text-marketing d-flex align-center mt-2 pb-2 ps-2">{{text}}</v-card-text>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default{
    data(){
        return{
            title:'MARKETING',
            subtitle:"Todavía no has hecho ninguna campaña",
            text:"Realiza tu primera campaña aqui"
        }
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');

.title-marketing{
    font-family: 'MontserratBold';
    color: #4f565f;
    text-transform: uppercase; 
}
.subtitle-marketing{
    color: #999999;
    font-family: 'MontserratMedium';
    text-transform: uppercase; 
}
.text-marketing {
    color: #999999;
    font-family: 'MontserratMedium';
    text-transform: uppercase; 
}
</style> 