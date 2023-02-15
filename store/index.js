export const state = () => ({
    authenticated: false
  })
  
  export const mutations = {
    SET_AUTHENTICATED (state, authenticated) {
      state.authenticated = authenticated
    },
    setToken (state, token) {
      state.token = token
    }
  }
  