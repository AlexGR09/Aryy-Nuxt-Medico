<template>
    <div>
        <v-container>
            <component
                v-for="(date, index) in dates" :key="index"
                :is="date.etiqueta"
            >
            </component>
        </v-container>
    </div>
</template>
<script>

export default{
    data(){
        return{
            dates: [
                {
                    etiqueta:'v-cards',
                    title: 'holaaaa',
                    score:'time',
                    date:'',
                    icon:'mdi-bell'
                }
            ]
        }
    }
}

</script>