/* componente de registro de especialista */
<template>
    <v-container>
       
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
                v-model="email"
                outlined
                label="Correo electrónico"
                dense
                :error-count="emailErrors"
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
            <v-text-field
                v-model="password_confirmation"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                label="Confirmar contraseña"
                outlined
                dense
                @click:append="show1 = !show1"
            ></v-text-field>
            <v-row>
                <v-col cols="12" md="4" sm="4">
                <v-select
                    v-model="country_code"
                    :items="opciones"
                    outlined
                    dense
                    label="Código"
                    prefix="+"
                ></v-select>

                </v-col>
                <v-col cols="12" md="8" sm="8">
                    <v-text-field
                        v-model="phone_number"
                        outlined
                        dense
                        label="Número de teléfono"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
            
                <div>
                    <v-btn 
                        class="text-capitalize" 
                        color="purple" 
                        dark 
                        block
                        @click="post_register(); validate();" 
                    >Registrarme</v-btn>
                </div>
        </v-form>
        <div class="mt-8">
            <v-alert
                v-if="alertMessage" 
                :value="true"
                outlined
                dense
                dark
                type="warning"
            >
                {{ alertMessage }}
            </v-alert>
        </div>
    </v-container>
</template>
<script>
export default{
    data(){
        return{
            show1: false,
            email:'',
            errorEmail: '',
            password: '',
            password_confirmation:'',
            country_code: null,
            phone_number: '',
            valid: true,
            alertMessage: null,
            emailErrors: null,
            rules: {
                required: value => !!value || 'contraseña es obligatorio.',
                min: v => v.length >= 8 || 'Debe contener al menos 8 carácteres',
            },
            emailRules: [
                v => !!v || 'correo electrónico es obligatorio',
                v => /.+@.+\..+/.test(v) || 'correo invalido',
            ],
            opciones: ['52','45','23','023','234'],
        }
    },
    methods:{
        // validación de formulario si lo campos estan vacíos
        validate(){
            this.$refs.form.validate()
        },
        post_register(){
            this.$axios
                .post('/api/v1/register',{
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                    country_code: this.country_code,
                    phone_number: this.phone_number,
                    type_user: 'Physician'
                    
                })
                .then((response) =>{
                    const token = response.data.access_token
                    localStorage.setItem('token', token)
                    if(response.data.access_token === token){
                       /* store.commit('SET_TOKEN', token) */
                        this.$store.commit('setToken', token);
                        this.$store.commit('SET_AUTHENTICATED', true)
                        this.$router.push('/auth/register/registercomponents/specialistregister')
                    }  
                })
                .catch(error => {
                    if (error.response.status === 422) {
                        const errors = error.response.data.errors
                        this.emailErrors = errors.email[0] 
                        console.log(errors.email[0])
                      
                    }
                })
                
        },
    }
}
</script>