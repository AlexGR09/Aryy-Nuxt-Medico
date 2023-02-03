<template>
    <v-container>
        <div>
            <v-toolbar flat>
            <v-toolbar-title>Signos vitales</v-toolbar-title>
            <v-spacer/>
                <v-btn icon><v-icon>mdi-dots-horizontal</v-icon></v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <br>
        </div>
        <v-row>
                <v-col v-for="(campo, index) in components" :key="index" cols="12" md="4" sm="4">
                        <component
                            :is="campo.etiqueta"
                            :label="campo.label"
                            :v-model="campo.vModel"
                            :suffix="campo.suffix"
                            :dense="campo.dense"
                            :text="campo.text"
                            :color="campo.color"
                            :elevation="campo.elevation"
                            :dark="campo.dark"
                        >
                            <template #prepend>
                                <img
                                width="20"
                                height="20"
                                :src="campo.src"
                                />
                            </template>
                        </component>
                </v-col>
                <v-col cols="12" >
                    <p>Descripción</p>
                    <v-text-field label="Descripción de síntomas" placeholder="Escribe los síntomas del paciente" outlined></v-text-field>
                    <p>Exploración medica</p>
                <v-radio-group v-model="radiogroup_2" row>
                  <v-radio  label="Si" v-bind:value="true"></v-radio>
                  <v-radio label="No" v-bind:value="false"></v-radio>
                </v-radio-group>
                <v-text-field
                  v-if="radiogroup_2"
                  v-model="family_support_group"
                  outlined
                  dense
                  placeholder="Escribe aqui"
                >
                </v-text-field>
                </v-col>
            </v-row>
    </v-container>
</template>

<script>
export default{
    data(){
        return{
            radiogroup_2: null,
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
            ]
 

        }
    },
}
</script>