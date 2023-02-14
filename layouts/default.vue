<template>
  <v-app dark>
    <v-app-bar
      flat
      color="transparent"
      height="100"
      :clipped-left="clipped"
      fixed
      absolute
      app
    >
    <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click.stop="drawer = !drawer " />
      <v-spacer></v-spacer>
      <!-- iconos para notificacion y cuenta | Genesis -->
      <v-btn class="ml-4" icon small>
        <v-img
          :src="require('@/assets/icons/icon_notification.svg')"
          max-width="23"
        ></v-img>
      </v-btn>
      <v-btn
        class="ml-5 mr-7"
        fab
        href="/accounts/edit/general-info/"
        color="#7900ff"
      >
        <v-avatar class="avata" size="56">
          <img
            src="https://doctorslist.info/wp-content/uploads/2022/08/10-Best-Doctors-in-Bangladesh-1.png"
          /> </v-avatar
      ></v-btn>
    </v-app-bar>
    <!--código de lista de elementos del SideBar | Luis Reyes-->
    <v-navigation-drawer
    :expand-on-hover="$vuetify.breakpoint.mdAndUp && drawer"
      v-model="drawer"
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-avatar class="icon-logo">
        <img
          class="img-logo"
          src="@/assets/logotipos/ISOLOGO_ARYY.svg"
          alt="logo Aryy"
        />
      </v-avatar>
      <v-list class="list-item mb-n6" active-class="bg-active">
        <!-- renderizado de lista del SideBar | Luis Reyes -->
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action active-class="bg-active">
            <!--pintamos el objeto img en el SideBar | Luis Reyes-->
            <img class="icons" :src="item.url" alt="" />
          </v-list-item-action>
          <v-list-item-content active-class="bg-active">
            <!--pintamos el objeto titulo en el SideBar | Luis Reyes-->
            <v-list-item-title class="v-list-item-titlee">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

   <!--    lista de los elementos bloqueados | Genesis -->
      <v-list disabled class="list-item disabledItem">
        <v-list-item
          v-for="(blockedItem, i) in blockedItems"
          :key="i"
          :to="blockedItem.to"
          router
          exact
        >
          <v-list-item-action active-class="bg-active">
            <img class="icons" :src="blockedItem.url" alt="" />
          </v-list-item-action>
          <v-list-item-content active-class="bg-active">
            <v-list-item-title class="v-list-item-titlee">{{
              blockedItem.title
            }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action active-class="bg-active">
            <img
              class="icons"
              :src="require('@/assets/icons/icon_lock.svg')"
              alt=""
            />
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-list class="list-item mt-n1" active-class="bg-active">
        <v-list-item class="mt-n1" to="/settings/account">
          <v-list-item-icon>
            <img
              class="icons"
              :src="require('@/assets/icons/SettingsIcon.svg')"
              alt=""
            />
          </v-list-item-icon>

          <v-list-item-content active-class="bg-active">
            <v-list-item-title class="v-list-item-titlee"
              >Ajustes</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="mt-n1" @click="logout">
          <v-list-item-icon>
            <v-icon size="23" color="#7900ff">mdi-logout-variant</v-icon>
          </v-list-item-icon>

          <v-list-item-content active-class="bg-active">
            <v-list-item-title class="v-list-item-titlee"
              >Cerrar sesión</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

       <!--  <div class="container-icon">
          <v-btn
            class="btn-sidebar"
            icon
            @click.stop="miniVariant = !miniVariant"
          >
            <v-icon
              >mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon
            >
          </v-btn>
        </div> -->
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          url: require("@/assets/icons/icon_inicio.svg"),
          title: 'Dashboard',
          to: '/'
        },
        {
          url: require("@/assets/icons/icon_calendario.svg"),
          title: 'Calendario',
          to: '/Calendar'
        },
        {
          url: require("@/assets/icons/icon_paciente.svg"),
          title:'Pacientes',
          to: '/patients'
        },
        {
          url: require("@/assets/icons/MessageIcon.svg"),
          title:'Opiniones',
          padlock:'mdi-lock-outline'
        },
        {
          url: require("@/assets/icons/FinanceIcon.svg"),
          title:'Finanzas',
          padlock:'mdi-lock-outline'
        },
        {
          url: require("@/assets/icons/StatisticsIcon.svg"),
          title:'Estadisticas',
          padlock:'mdi-lock-outline'
        },
        {
          url: require("@/assets/icons/MarketingIcon.svg"),
          title:'Marketing',
          padlock:'mdi-lock-outline'
        },
        {
          url: require("@/assets/icons/NewIcon.svg"),
          title:'Noticias',
          padlock:'mdi-lock-outline'
        },
        {
          url: require("@/assets/icons/ShoppingIcon.svg"),
          title:'Compras',
          padlock:'mdi-lock-outline'
        },
        {
          url: require("@/assets/icons/AssistantIcon.svg"),
          title:'Asistente',
          padlock:'mdi-lock-outline'
        },
        {
          url: require("@/assets/icons/SettingsIcon.svg"),
          title:'Ajustes'
        },
        {
          icon: 'mdi-login',
          title:'Cerrar sesión',
        }
      ],
      
      btn:[
        {
          icon: 'mdi-login',
          title: 'Cerrar sesión',
          

        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },

}
</script>