import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dummyjson.com', // our API base URL
});

// Request interceptor for adding the bearer token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


// Export the api instance
export default api;