/* export default ({ store, redirect }) => {
    // if user is not authenticated, redirect on login page
     {
    count () {
      return this.$store.state.example.count
    }
    if (!store.state.authenticated) {
        updateState (token) {
    this.$store.commit('example/setToken', token)
  }
        return redirect("/auth/login");
    }, 
} */

// middleware/authentication.js

export default function({ store, redirect }){
    console.log('conectando ')
    if (!store.state.authenticated) {
        return redirect("/auth/login");
    }
    else{
       console.log('acceso denegado')
    } 
}
  