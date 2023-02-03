<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" md="8">
                    <span>Informacion del paciente</span>
                    <v-card 
                        outlined  
                        class="greeting-card"
                        color="white"
                        rounded="lg" 
                    >Informacion del paciente</v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <span>Nueva Consulta</span>
                    <v-card
                        flat
                        rounded="lg" 
                    >
                    <v-container>
                        <div class="my-2">
                            <v-btn block color="primary" dark>iniciar consulta</v-btn>
                        </div>
                        <div class="my-2">
                            <v-btn block color="gray" outlined >Agendar cita nueva</v-btn>
                        </div>
                    </v-container>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="8">
                    <span>CONSULTA MÉDICA</span>
                    <v-card outlined class="greeting-card" color="white" rounded="lg" >
                        <v-container>
                            <prescription-medical/>
                        </v-container>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card >Citas anteriores</v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import prescriptionMedical from '~/components/medical_record/prescription-medical.vue'
export default {
  components: { prescriptionMedical },
    data(){
        return{

        }
    },
}
</script>

<style >
.greeting-card{
  box-shadow: 6px 11px 19px -1px rgba(235,225,252,0.93);
  -webkit-box-shadow: 6px 11px 19px -1px rgba(235,225,252,0.93);
  -moz-box-shadow: 6px 11px 19px -1px rgba(235,225,252,0.93);
}

</style>