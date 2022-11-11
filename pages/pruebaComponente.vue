<template>
    <div id="demo">
  <div class="inputArea" v-for="input in inputs" :key="input.id">
    <span :for="input.id">{{input.label}}</span>
    <v-text-field outlined :id="input.id" v-model="input.value"></v-text-field>
  </div>
  <button @click="addInput">Add input</button>
  <maps/>
</div>

</template>

<script>
import Vue from 'vue';
import VueFileAgent from 'vue-file-agent';
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css';
import maps from '~/components/maps.vue';
Vue.use(VueFileAgent);
Vue.use(VueFileAgentStyles);
  export default {
  components: { maps },
    data: () => ({
      counter: 0,
    inputs: [{
      id: 'fruit0',
      label: 'Enter Fruit Name',
      value: '',
    }],
    }),
    
    methods: {
    addInput() {
      this.inputs.push({
        id: `fruit${++this.counter}`,
        label: 'Enter Fruit Name',
        value: '',
      });
    }
  }
  }
</script>