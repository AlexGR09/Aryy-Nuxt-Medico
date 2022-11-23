<template>
  <v-app dark>
    <v-app-bar flat color="transparent" height="100" :clipped-left="clipped" fixed absolute app>
      <v-spacer></v-spacer>
             <!-- iconos para notificacion y cuenta | Genesis -->
             <v-btn icon v-on:click="logout" class="btnnn" color="black" small >
                    <v-icon>mdi-account</v-icon>
                  </v-btn>
             <v-btn class="ml-4" icon small>
            <v-img :src="require('@/assets/icons/icon_notification.svg')" max-width="23"></v-img>
        </v-btn>
     <!--    <v-chip  class="mr-n9 ml-2" style=" background: rgb(179,128,255);
            background: linear-gradient(0deg, rgba(179,128,255,1) 2%, rgba(121,0,255,1) 48%, rgba(81,1,204,1) 98%);">
        <p class="white--text mr-4 mt-4" style="font-size: .9rem">214 pts</p>
      </v-chip> -->
        <v-btn class="ml-5 mr-7" fab href="/accounts/edit/account/"  color="#7900ff">
        <v-avatar class="avata" size="56">
        <img
          src="https://doctorslist.info/wp-content/uploads/2022/08/10-Best-Doctors-in-Bangladesh-1.png">
      </v-avatar></v-btn>
        </v-app-bar>
    <!--código de lista de elementos del SideBar | Luis Reyes-->
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-avatar class="icon-logo">
        <img class="img-logo" src="@/assets/logotipos/ISOLOGO_ARYY.svg" alt="logo Aryy">
      </v-avatar  >
      <v-list class="list-item" active-class="bg-active">
        <!-- renderizado de lista del SideBar | Luis Reyes -->
        <v-list-item  v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action  active-class="bg-active" >
            <!--pintamos el objeto img en el SideBar | Luis Reyes-->
            <img class="icons" :src="item.url" alt="">
          </v-list-item-action>
          <v-list-item-content  active-class="bg-active">
            <!--pintamos el objeto titulo en el SideBar | Luis Reyes-->
            <v-list-item-title class="v-list-item-titlee">{{ item.title }}</v-list-item-title>
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
<!--  <v-app-bar :clipped-left="clipped" fixed app> 
    
      </v-app-bar> -->
    <!-- pintamos los componetes | Luis Reyes-->

    <v-main>
      <v-container>
        <!-- componente que utiliza para mostrar los componentes de las páginas | Luis Reyes-->
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
  
</template>

<script>

export default {
    name: "DefaultLayout",
    data() {
      
        return {
          activeColor: '#7900ff',
         
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
                {
                    url: require("@/assets/icons/MessageIcon.svg"),
                    title: "Mensajes",
                    to: "/mensajes",
                },
                {
                    url: require("@/assets/icons/FinanceIcon.svg"),
                    title: "Finanzas",
                    to: "/finanzas",
                },
                {
                    url: require("@/assets/icons/StatisticsIcon.svg"),
                    title: "Estadísticas",
                    to: "/estadisticas",
                },
                {
                    url: require("@/assets/icons/MarketingIcon.svg"),
                    title: "Marketing",
                    to: "/marketing",
                },
                {
                    url: require("@/assets/icons/NewIcon.svg"),
                    title: "Noticias",
                    to: "/noticias",
                },
                {
                    url: require("@/assets/icons/ShoppingIcon.svg"),
                    title: "Compras",
                    to: "/compras",
                },
                {
                    url: require("@/assets/icons/AssistantIcon.svg"),
                    title: "Asistente",
                    to: "/asistente",
                },
                {
                    url: require("@/assets/icons/SettingsIcon.svg"),
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
    methods:{
      /* matar token y redireccionar al login | Genesis */
         logout () {
            localStorage.setItem("token",false)
            this.$router.push('/auth/login');
    }
    },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
.avata{
  border: 2px solid #7900ff;
                  border-radius:50%;
                  height: 56px;
                  width: 56px;
}
/* /logos | Luis Reyes/ */
.icon-logo{
  margin: 1em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40vh;
}

.img{
  width: 30%;
}

/*renderizado de lista | Luis Reyes */
.list-item {
  margin-top: 1em;
}
.v-list-item-titlee {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  color: #7900ff;
}
.v-list-item-titlee:hover {

  color: #ffffff;
}
.v-list-item:hover {
  background: #7900ff;
}

.item-active {
  background-color: #7900ff;
  color: white !important;
}
s
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
/*color de fondo en las vistas con tema claro */
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
  font-family: Montserrat;
  font-size: 15px;
}


.theme--light.v-divider {
   color: #f4edff;
}

.vtoolbar{
    border: thin solid #cccccc;
    height: 30px;
    width: 2rem;
  }
  .search{
    
    font-family: Montserrat;
  }

.bg-active{
  background: #7900ff;
  color: white !important;
  fill: white !important;
}
img:hover{
  color: white !important;
  fill: white !important;
}
</style>