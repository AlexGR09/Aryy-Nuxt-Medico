/* export const state = () => ({
    authenticated: false,
    token: null
  })
  export const mutations = {
    SET_AUTHENTICATED (state, authenticated) {
      state.authenticated = authenticated
    },
    setToken (state, token) {
      state.token = token
    }
  }
   */

  export const state = () => ({
    isAuthenticated: false,
    user: null
  })
  
  export const mutations = {
    SET_AUTHENTICATED(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    },
    SET_USER(state, user) {
      state.user = user
    }
  }
  
/*   export const actions = {
    async login({ commit }, credentials) {
      try {
        // Llamar a tu API de autenticación
        const response = await this.$axios.post('api/v1/login', credentials)
  
        // Actualizar el estado de autenticación
        commit('SET_AUTHENTICATED', true)
        commit('SET_USER', response.data.user_id)
  
        // Redirigir al usuario a la página de inicio
        this.$router.push('/')
      } catch (error) {
        // Manejar errores de autenticación
        console.log(error.response.data.message)
      }
    }
  } */