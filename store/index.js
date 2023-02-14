export const state = () => ({
    authenticated: false
  })
  
  export const mutations = {
    SET_AUTHENTICATED (state, authenticated) {
      state.authenticated = authenticated
    }
  }
  