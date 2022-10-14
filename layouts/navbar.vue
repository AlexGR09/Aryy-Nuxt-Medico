<template>
    <v-app-bar  fixed app color="transparent">
    </v-app-bar>
</template>

<script>
export default {
    name: "navbar",
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