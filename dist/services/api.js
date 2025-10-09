import axios from 'axios';
const api = axios.create({
    baseURL: 'https://localhost:7158/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
        if (!config.headers) {
            config.headers = {};
        }
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
api.interceptors.response.use((response) => response, (error) => {
    if (error.response && error.response.status === 401) {
        console.log('Unauthorized - Redirecting to login...');
    }
    return Promise.reject(error);
});
export default api;
