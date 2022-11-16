import axios from "axios"
import API_URL from "./api.config"

/* Metodo get */
async function apiGet(url){
    const config = {
        method: 'get',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
const urlCall = API_URL + url
    try{
        const response = await axios.get(urlCall, config)
        console.log("exitoso get")
        return response
    }catch{
        console.log("fracaso get")
    }
}

/* Metodo post */
async function apiPost(url, payload){
    const config = {
        method: 'get',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: payload
    }
    const urlCall = API_URL + url
    try{
        const response = await axios.post(urlCall, config)
        console.log("exitoso post")
        return response
    }catch(error){
        console.log("fracaso post")
    }
}


const api = {}

api.getRestaurants = () => {
    return apiGet('restaurants')
}
api.postSubscribeUser = payload => {
    return apiPost('users',payload)
}
export default api