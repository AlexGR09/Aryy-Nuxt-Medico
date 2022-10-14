<template>
  <v-app dark>
    <!--código de lista de elementos del SideBar | Luis Reyes-->
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-avatar class="icon-logo">
        <img src="@/assets/logotipos/ISOTIPO_ARYY.svg" alt="logo Aryy">
      </v-avatar  >
      <v-list class="list-item">
        <!-- renderizado de lista del SideBar | Luis Reyes -->
        <v-list-item  v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <!--pintamos el objeto img en el SideBar | Luis Reyes-->
            <img :src="item.url" alt="">
          </v-list-item-action>
          <v-list-item-content>
            <!--pintamos el objeto titulo en el SideBar | Luis Reyes-->
            <v-list-item-title class="v-list-item-title">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <div class="container-icon">
          <v-btn class="btn-sidebar" icon @click.stop="miniVariant = !miniVariant">
            <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
          </v-btn>
        </div>
      </v-list>
    </v-navigation-drawer>
   
    
    
    <!-- código de NavBar | Luis Reyes-->
<!-- <v-app-bar :clipped-left="clipped" fixed app> 
    
      </v-app-bar> -->
    <!-- pintamos los componetes | Luis Reyes-->

    <v-main>
      <v-container>
        <!-- componente que utiliza para mostrar los componentes de las páginas | Luis Reyes-->
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span> Aryy en construcción | &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
  
</template>

<script>

export default {
    name: "DefaultLayout",
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            /* Lista de elementos basada en una matriz para el SideBar | Luis Reyes */
            items: [
                {
                    url: require("@/assets/icons/icon_inicio.svg"),
                    title: "Inicio",
                    to: "/",
                },
                {
                    url: require("@/assets/icons/icon_calendario.svg"),
                    title: "Calendario",
                    to: "/calendario/month",
                },
                {
                    url: require("@/assets/icons/icon_paciente.svg"),
                    title: "Pacientes",
                    to: "/patients/list",
                },
                /* =======
                          to: '/patient/patientView'
                >>>>>>> 381e908a9a8cdf4a36e1abeb7da88d5030f1702f
                        }, */
                {
                    url: require("@/assets/icons/icon_mensaje.svg"),
                    title: "Mensajes",
                    to: "/mensajes",
                },
                {
                    url: require("@/assets/icons/icon_finanzas.svg"),
                    title: "Finanzas",
                    to: "/finanzas",
                },
                {
                    url: require("@/assets/icons/icon_estadisticas.svg"),
                    title: "Estadísticas",
                    to: "/estadisticas",
                },
                {
                    url: require("@/assets/icons/icon_marketing.svg"),
                    title: "Marketing",
                    to: "/marketing",
                },
                {
                    url: require("@/assets/icons/icon_noticias.svg"),
                    title: "Noticias",
                    to: "/noticias",
                },
                {
                    url: require("@/assets/icons/icon_compra.svg"),
                    title: "Compras",
                    to: "/compras",
                },
                {
                    url: require("@/assets/icons/icon_asistente.svg"),
                    title: "Asistente",
                    to: "/asistente",
                },
                {
                    url: require("@/assets/icons/icon_ajustes.svg"),
                    title: "Ajustes",
                    to: "/ajustes",
                },
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: "Vuetify.js",
        };
    },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

/*logos | Luis Reyes*/
.icon-logo{
  margin: 1em;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.img{
  width: 30%;
}



/*renderizado de lista | Luis Reyes */
.list-item {
  margin-top: 1em;
}
.v-list-item-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  color: #999999;
}
.v-list-item:hover {
  background: #7900ff;
  color: azure;
}
.item-active {
  background-color: #7900ff;
  color: white !important;
}


/*contenedor div => icono | Luis Reyes */
.container-icon {
  margin-top: 3em;
  text-align: center;
}
.btn-sidebar {
  background-color: #f4edff;
}
/* <<<<<<< HEAD
=======
/*color de fondo en las vistas con tema claro | Genesis */
.theme--light.v-application {
 /*  background-color: var(--v-background-base, #f4edff) !important; */
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(50deg, rgba(255, 255, 255, 1) 35%, rgba(244, 237, 255, 1) 90%);
  background: -webkit-linear-gradient(50deg, rgba(255, 255, 255, 1) 35%, rgba(244, 237, 255, 1) 90%);
  background: linear-gradient(50deg, rgba(255, 255, 255, 1) 35%, rgba(244, 237, 255, 1) 90%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff", endColorstr="#f4edff", GradientType=1);
} 

v-navigation-drawer{
/*   height: 150px;
  left: 50px; */
 
  text-align: right;
  position: relative;
  overflow: auto;
  height: calc(0px + 100vh); 
  top: 0px;

/*   top: -50px;
  width: 150px; */
}

div .theme--light.v-calendar .v-event-timed {
  font-family: MontserratMedium;
  font-size: 15px;
  border-radius: 1em/5em;
} 
</style>