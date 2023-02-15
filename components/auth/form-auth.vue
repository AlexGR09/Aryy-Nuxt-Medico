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
                    @click="validate(); POST_DATA(); "
                >Iniciar sesión</v-btn>
            </div>
        </v-form>
    </v-container>
</template>

<script>
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
        POST_DATA(){
            this.$axios
                .post('api/v1/login',{
                    email: this.email,
                    password:this.password
                })
                .then((response) => {
                    const token = response.data.access_token
                    console.log(response)
                    localStorage.setItem('token', response.data.access_token)
                    if(response.data.access_token === token){
                       /* store.commit('SET_TOKEN', token) */
                       localStorage.getItem('token', response.data.data.access_token)
                        this.$store.commit('SET_AUTHENTICATED', true)
                        this.$router.push('/')
                    } 
                })
        }
    }
}
</script>
