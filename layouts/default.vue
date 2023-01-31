<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        max-height="100"
        max-width="200"
        src="https://picsum.photos/id/11/500/300"
      ></v-img>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <img :src="item.url"/>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon color="purple">{{ item.padlock }}</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      flat
      color="white"
    >
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click.stop="drawer = !drawer , fixed = !fixed" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn icon color="primary">
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>
      <v-avatar>
      <img
        src="https://cdn-icons-png.flaticon.com/512/194/194915.png"
      />
    </v-avatar>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
          to: '/inspire'
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
  methods:{

    /* cerrar sesión */
    signOff(){
      alert("SALIR")

    }


  },

}
</script>