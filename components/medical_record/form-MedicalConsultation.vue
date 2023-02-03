<template>
    <v-card class="rounded-lg">
        <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Signos vitales</v-toolbar-title>
            <v-spacer/>
                <v-btn icon><v-icon>mdi-dots-horizontal</v-icon></v-btn>
        <v-divider></v-divider>
        </v-toolbar>
        <v-container>
            <v-row>
                <v-col v-for="(campo, index) in components" :key="index" cols="12" md="4" sm="4">
                        <component
                            :is="campo.etiqueta"
                            :label="campo.label"
                            :v-model="campo.vModel"
                            :suffix="campo.suffix"
                            :dense="campo.dense"
                            :text="campo.text"
                            :color="campo.color"
                            :elevation="campo.elevation"
                            :dark="campo.dark"
                        >
                            <template #prepend>
                                <img
                                width="20"
                                height="20"
                                :src="campo.src"
                                />
                            </template>
                        </component>
                </v-col>
            </v-row>

        </v-container>
    </v-card>
</template>

<script>
export default{

    props:['components'],
    data(){
        return{

        }
    },
}
</script>

<style>

</style>