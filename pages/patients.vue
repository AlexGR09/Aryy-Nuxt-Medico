<template>
    <v-container>
        <v-card class="rounded-xg">
            <table-list/>
        </v-card>
    </v-container>
</template>

<script>
import tableList from '~/components/table/table-list.vue'
export default{
  components: { tableList },
    data(){
        return{

        }
    },
}
</script>