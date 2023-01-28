<!-- EXPEDIENTE MÉDICO -->
<template>
    <v-container>
        <v-row >
    
            <v-col cols="6" md="8">
                <form-medical-consultation :components="components"/>
            </v-col>
            <v-col cols="6" md="4">
                <form-internal-notes/>
            </v-col>
            <v-col cols="6" md="4">
                <card-appointment/>
            </v-col>
        </v-row>

 
    </v-container>
</template>

<script>
import CardAppointment from '~/components/medical_record/CardAppointment.vue'
import FormInternalNotes from '~/components/medical_record/form-InternalNotes.vue'
import formMedicalConsultation from '~/components/medical_record/form-MedicalConsultation.vue'
export default{
  components: { formMedicalConsultation, FormInternalNotes, CardAppointment},
    data(){
        return{
            components: 
            [
                {
                    etiqueta: 'v-text-field',
                    label:'Temperatura',
                    suffix: '°C',
                    dense: 'dense',
                    src: require("@/assets/icons/icon_temperature.svg") 
                },
                {
                    etiqueta: 'v-text-field',
                    label:'Peso',
                    suffix: 'Kg',
                    dense: 'dense',
                    src: require("@/assets/icons/icon_weight.svg") 
    
                },
                {
                    etiqueta: 'v-text-field',
                    label:'Frecuencia respiratoria',
                    suffix: 'r/m',
                    dense: 'dense',
                    src: require("@/assets/icons/icon_frequency.svg") 
    
                },
                {
                    etiqueta: 'v-text-field',
                    label:'Sistólica',
                    dense: 'dense',
                    suffix: 'mmHg',
                    src: require("@/assets/icons/icon_pressure.svg") 
    
                },
                {
                    etiqueta: 'v-text-field',
                    label:'Diastólica',
                    suffix: 'mmHg',
                    dense: 'dense',
                    src: require("@/assets/icons/icon_pressure.svg") 
    
                },
                {
                    etiqueta: 'v-text-field',
                    label:'Frecuencia cardíaca',
                    dense: 'dense',
                    suffix: 'bpm',
                    src: require("@/assets/icons/icon_pressureheart.svg") 
    
                },
                {
                    etiqueta: 'v-text-field',
                    label:'Saturación de oxígeno',
                    dense: 'dense',
                    src: require("@/assets/icons/icon_oxygen.svg") 
    
                },
                {
                    etiqueta: 'v-text-field',
                    label:'Masa muscular',
                    dense: 'dense',
                    suffix: '%',
                    src: require("@/assets/icons/icon_musculemass.svg") 
    
                },
                {
                    etiqueta: 'v-text-field',
                    label:'Grasa corporal',
                    suffix: '%',
                    dense: 'dense',
                    src: require("@/assets/icons/icon_corporalfat.svg") 
    
                },
                {
                    etiqueta: 'v-text-field',
                    label:'Peso perdido',
                    dense: 'dense',
                    src: require("@/assets/icons/icon_corporalfat.svg") 
    
                },
                {
                    etiqueta: 'v-text-field',
                    label:'Grasa',
                    dense: 'dense',
                    src: require("@/assets/icons/icon_corporalfat.svg") 
    
                },
                {
                    etiqueta: 'v-text-field',
                    label:'Cintura',
                    dense: 'dense',
                    src: require("@/assets/icons/icon_corporalfat.svg") 
    
                },
                {
                    etiqueta: 'v-text-field',
                    label:'Agua',
                    dense: 'dense',
                    src: require("@/assets/icons/icon_corporalfat.svg") 
    
                },
                {
                    etiqueta: 'v-text-field',
                    label:'Muscúlo',
                    dense: 'dense',
                    src: require("@/assets/icons/icon_frequency.svg") 
    
                },
                {
                    etiqueta: 'v-text-field',
                    label:'Abdomen',
                    dense: 'dense',
                    src: require("@/assets/icons/icon_frequency.svg") 
    
                },
                {
                    etiqueta: 'v-btn',
                    text:'Guardar',
                    color:'primary',
                    elevation:'2'
                },
                {
                    etiqueta: 'v-btn',
                    text:'Guardar',
                    color:'primary',
                    elevation:'2',
                    dark:'dark'
                },
            ]

        }
    },
}

</script>

<style>

</style>