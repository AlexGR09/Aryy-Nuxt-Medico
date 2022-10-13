<template>
     <v-app-bar :clipped-left="clipped" fixed app>
     
     </v-app-bar>
</template>

<script>
export default {
    name: "DefaultLayout",
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: "Vuetify.js",
        };
    },

}
</script>