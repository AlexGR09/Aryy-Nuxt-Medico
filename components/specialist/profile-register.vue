<template>
    <div>
        <h2>Crea tu perfil gratuito como especialista</h2>
                  <v-col md="5" cols="12">
                    <p align="left" class="mb-1 label">Nombre*</p>
                    <v-text-field outlined placeholder="Nombre y apellidos (s)" dense></v-text-field>
                    <p align="left" class="mb-1 label">Especialidad*</p>
                    <v-autocomplete outlined dense placeholder="Selecciona una especialidad"></v-autocomplete>
                    <p align="left" class="mb-1 label">Cédula C1*</p>
                    <v-text-field outlined dense placeholder="Número de cédula"></v-text-field>
                    <p align="left" class="mb-1 label">Institución*</p>
                    <v-text-field outlined dense placeholder="Institución que otorgó la cédula"></v-text-field>
                    <v-col cols="20" md="9">
                      <div>
                        <v-checkbox  color="#7900ff" class="terms" v-model="check" label="He leído y aceptado los Términos y condiciones de uso de Aryy.">
                  </v-checkbox>

                      </div>
                    </v-col>
                  
                  <v-btn
                    v-on:click="create"
                    @click="e1 = 3"
                    block
                    large
                    class="white--text btn"
                    color="#7900FF"
                    :disabled="!check"
                    >Registrarme
                  </v-btn>
                
                  </v-col>
    </div>
</template>