import axios from "axios"
import API_URL from "./api.config"


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
        console.log("exitoso")
        return response
        
    } catch{
        console.log("fracaso")
    }
}
const api = {}

api.getRestaurants = () => {
    return apiGet('restaurants')
}
export default api