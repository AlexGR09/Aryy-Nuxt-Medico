<template>
  <div>
    <v-tabs fixed-tabs>
    <v-tab to="/settings/account">Foo</v-tab>
    <v-tab to="/settings/notifications">Bar</v-tab>
  </v-tabs>
  <router-view></router-view>
  </div>
</template>
<script>
import VueRouter from 'vue-router'
export default {
  data() {
    return {}
    
  },
  created(){
    const Foo = {
  template: '<div>  <account/>!</div>'
};

const Bar = {
  template: '<div>   <notifications/></div>'
};

const routes = [
  { path: '/settings/account', component: Foo },
  { path: '/settings/notifications', component: Bar },
];

const router = new VueRouter({ routes });
return router
  }
  
}
</script>