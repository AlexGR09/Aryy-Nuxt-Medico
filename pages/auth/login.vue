<template>
  <div>
    <v-container>
      <v-row align="stretch" no-gutters >
        <v-col class="ocultar-col" cols="12" md="6">
          here it video
        </v-col>
        <v-col cols="12" md="4" sm="8" class="align-center">
          
          <v-toolbar flat>
            <template v-slot:extension>
              <v-tabs
                v-model="tab"
                aling-with-title
                centered
              >
                <v-tabs-slider></v-tabs-slider>
                <v-tab
                  v-for="(item, title) in items"
                  :key="title"
                >{{ item.title }}</v-tab>
              </v-tabs>
            </template>
          </v-toolbar>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card flat>
                <form-auth/>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import formAuth from '~/components/auth/form-auth.vue'
export default{
  layout: 'auth',
  components: { formAuth },
  data(){
    return {
      tab:null,
      items :[
        {
          title: 'iniciar sesion',
        },
        {
          title: 'Registrarme'
        }
      ]
    }
  },
  
}
</script>

<style>
@media screen and (max-width: 1200px) {
  .ocultar-col{
    display: none;
  }
}
</style>


