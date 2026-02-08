import axios from "axios";

const api = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json',
    timeout: 5000
});

export default api;