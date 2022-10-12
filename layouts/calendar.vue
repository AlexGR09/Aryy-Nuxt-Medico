<template>
    <v-app dark>
      <!--código de lista de elementos del SideBar | Luis Reyes-->
      <v-navigation-drawer absolute v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
        <h1>dasd</h1>
      </v-navigation-drawer>
      
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
                      to: "/calendario/calendario",
                  },
                  {
                      url: require("@/assets/icons/icon_paciente.svg"),
                      title: "Pacientes",
                      to: "/pacientes/lista",
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
      methods: {
        toggleRightMenu() {
        this.rightMenu = !this.rightMenu;
      }
      }
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
    background-color: var(--v-background-base, #f4edff) !important;
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
  
  </style>