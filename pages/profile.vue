<template>
    <v-container>
        <v-card class="greeting-card" outlined rounded="lg" >
            <v-col cols="12">
                <v-toolbar flat>
                    <template #v-slot:extension>
                        <v-tabs v-model="tab" centered fixed-tabs >
                            <v-tab v-for="item in items" :key="item" :value="'mobile-tabs-5-' + i">
                                {{ item.title }}
                            </v-tab>
                        </v-tabs>
                    </template>
                </v-toolbar>
                <v-tabs-items v-model="tab">
                    <v-tab-item>
                        <v-card flat>
                            <form-personal/>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-col>
        </v-card>
    </v-container>
</template>

<script>
import formPersonal from '~/components/profile/form-personal.vue'
export default{
  components: { formPersonal },
    data(){
        return{
            tab: null,
            items: [
                {
                    title: 'Perfil personal'
                },
                {
                    title: 'perfil médico'
                },
                {
                    title:'Agenda'
                }
            ]

        }
    }
}
</script>

<style>
.greeting-card{
  box-shadow: 6px 11px 19px -1px rgba(235,225,252,0.93);
  -webkit-box-shadow: 6px 11px 19px -1px rgba(235,225,252,0.93);
  -moz-box-shadow: 6px 11px 19px -1px rgba(235,225,252,0.93);
}
</style>

