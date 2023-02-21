
/* middleware para acceder con el token almacenado en localStorage | Luis Reyes */
/* export default function({ store, redirect, $axios}) {

    console.log('conectando ')
    if (!store.state.authenticated) {
      if(process.client){
            localStorage.getItem('token');
            return redirect("/auth/login");
        } 
        return redirect("/auth/login");
    }
}
 */

import { api } from '~/plugins/api'

export default function ({ redirect }) {
  const token = api.defaults.headers.common.Authorization 

  if (!token) {
    // Si el usuario no está autenticado, redirige a la página de login
    redirect('/auth/login')
  }
}