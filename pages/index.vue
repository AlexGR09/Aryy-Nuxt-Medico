<!--Maquetación de componentes al Dashboard | Luis Reyes-->
<template>
    <div class="container">
        <Navbar color="transparents"></Navbar>
        <v-row class="row">
            <v-col cols="12" md="4">
                <h4>CITAS</h4>
                <DashboardCitas />
            </v-col>
            <v-col cols="12" md="8">
                <v-row class="match-height">
                    <v-col cols="12" sm="4">
                        <DashboardMarketing />
                    </v-col>
                    <v-col cols="12" sm="4">
                        <DashboardAsistente />
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" sm="6" md="4">
                <h4>MENSAJES</h4>
                <DashboardMensajes />
            </v-col>
            <v-col cols="12" md="8">
                <h4>NOTICIAS</h4>
                <DashboardNoticias />
            </v-col>
        </v-row>
    </div>
</template>
<script>
import DashboardCitas from '~/components/dashboard/DashboardCitas.vue';
import Navbar from '~/layouts/navbar.vue';
export default {
    name: "IndexPage",
    components: { DashboardCitas, Navbar }
}
</script>
