/* peticiones de la api | Luis Reyes */
/* import axios from 'axios'

const api = axios.create({
    baseURL: 'https://app.aryymd.com/',
    headers: {
        Accept: 'aplication/json',
        'Content-type': 'application/json'
    }
})


function setToken(token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

 api.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}) 

export default api */

import axios from 'axios'

const api = axios.create({
  baseURL: 'https://app.aryymd.com/',
})

// Función para agregar el token de autenticación en la cabecera
function setAuthToken(token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
}

// Agregamos un interceptor de solicitudes
axios.interceptors.request.use(config => {

// Recuperamos el token del almacenamiento local
const token = localStorage.getItem('token');

// Si hay un token, lo agregamos a la cabecera de la solicitud
if (token) {
    config.headers.Authorization = `Bearer ${token}`;
}

return config;
});

export { api, setAuthToken }