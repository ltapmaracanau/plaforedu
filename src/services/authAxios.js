
import axios from "axios"

const authAxios = axios.create({
    baseURL: 'https://plaforedubackend-production.up.railway.app'
})

export { authAxios }