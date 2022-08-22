
import axios from "axios"

const authAxios = axios.create({
    baseURL: 'https://plafor-server.herokuapp.com'
})

export { authAxios }