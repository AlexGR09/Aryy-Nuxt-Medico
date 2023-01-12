


<template>
<div id="app">
  <h2>Todos:</h2>
  <input type="checkbox" id="vehicle1"  value="primera" v-model="selection">primera<br>
  <input type="checkbox" id="vehicle2"  value="subsecuente" v-model="selection">subsecuente<br>
  <ul>
    <v-card v-for="todo in filtered" :key="todo">
      {{todo.appointment_type}}
    </v-card>
  </ul>
</div>
</template>
<script>
export default {
  data() {
    return {
      selection:[],
      filtered: [],
      todos: '',
    }
  },
  mounted(){
    this.citas()
  },
  methods: {
    citas() {
      this.$axios
        .get('api/v1/calendar/appointments', {
          params: {
            type: 'all',
          },
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          this.todos = res.data.data
          console.log(res)
        })
    },
  },
  watch: {
    selection: {
      handler() {
        this.filtered= []

        
        if (this.selection.length) {
          this.todos.forEach(t => {
            this.selection.forEach(s => {
              if (t.appointment_type.split(/\s/).find(w => w === s.toLowerCase())) {
                if (!this.filtered.find(f => f.appointment_type === t.appointment_type)) this.filtered = [ ...this.filtered, t]
              }
            })
          })
        } else {
          this.filtered = [...this.todos]
        }
      },
      deep: true,
      immediate: true
    }
  },
 
}
</script> 