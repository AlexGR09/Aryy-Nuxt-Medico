
/* middleware para acceder con el token almacenado en localStorage | Luis Reyes */
export default function({ store, redirect, $axios}) {
/*     const token = 'token'  */
    console.log('conectando ')
    if (!store.state.authenticated) {
/*         if(process.client){
            localStorage.getItem('token');
            return redirect("/auth/login");
        } */
        return redirect("/auth/login");
    }
}
