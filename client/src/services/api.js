import axios from 'axios';

let config = {}

try {
    config = require('../config.json');    
} catch (error) {
    config = {}
}

export const BASE = config.URL_SERVER ? config.URL_SERVER : 'http://localhost:8000/api';

const api = axios.create({
    baseURL: BASE
});

export default api;