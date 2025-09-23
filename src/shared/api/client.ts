import axios from "axios";

const VITE_API_BACKEND = 'https://dummyjson.com'

const BACKEND_HTTPS_SERVICES = axios.create({
    baseURL: VITE_API_BACKEND,
    withCredentials: false,
})

export {BACKEND_HTTPS_SERVICES}
