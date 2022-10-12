
import axios from "axios"

const authAxios = axios.create({
    baseURL: 'http://localhost:3333'
})

export { authAxios }