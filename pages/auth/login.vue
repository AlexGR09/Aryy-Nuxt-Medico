<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" md="6">
          here it video
        </v-col>
        <v-col cols="12" md="6">
          <form-login/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import formLogin from '~/components/login/form-Login.vue'
export default{
  components: { formLogin },
  layout: "layout",
  data(){
    return{

    }
  },
}
</script>