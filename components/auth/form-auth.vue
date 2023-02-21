/* componente de inicio de sesión */
<template>
    <v-container>
        <v-form
         ref="form"
         v-model="valid"
         lazy-validation
        >
            <v-text-field
                v-model="email"
                :rules="emailRules"
                outlined 
                label="Correo" 
                dense
                required
            ></v-text-field>
            <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                label="Contraseña"
                outlined
                dense
                @click:append="show1 = !show1"
            ></v-text-field>
            <div>
                <v-btn 
                    class="text-capitalize"     
                    color="purple" 
                    dark 
                    block
                    @click="validate(); login();"
                >Iniciar sesión</v-btn>
            </div>
        </v-form>
    </v-container>
</template>
<script>

import {api, setAuthToken } from '~/plugins/api'
export default{
    data(){
        return{
            show1: false,
            email:'',
            password: '',
            valid: true,
            rules: {
                required: value => !!value || 'contraseña es obligatorio.',
                min: v => v.length >= 8 || 'Min 8 characters',
            },
            emailRules: [
                v => !!v || 'correo electrónico es obligatorio',
                v => /.+@.+\..+/.test(v) || 'correo invalido',
            ],
        }
    },

    methods: {
        validate(){
            this.$refs.form.validate()
        },
        async login(){
            try {
                const response = await api.post('api/v1/login',{
                    email: this.email,
                    password:this.password
                })
                    const token = response.data.access_token
                    setAuthToken(token)    
                    this.$router.push('/')
            }catch (error) {
                console.error('error');
            }
        }
    }
}
</script>
