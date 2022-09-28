import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/rn-api/'
});

export default api;