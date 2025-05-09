import axios from 'axios';

// Create an axios instance 
const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    }
});


// Adding token to all requests
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export const registerApi = async (userData) => {
    try{
        const response = await api.post('/auth/signup', userData);
        return response.data;
    }
    catch (error) {
        console.log(error.response?.data?.message);
        throw error;
    }
};

export const loginApi = async (email, password) => {
    try {
        const response = await api.post('/auth/login', { email, password });
        return response.data;
    }
    catch (error){
        console.log(error.response?.data?.message || 'Login Failed');
        throw error;
    }
}

export const logoutApi = async () => {
    try {
        const response = await api.post('/auth/logout');
        return response.data;
    }
    catch{
        console.log(error.response?.data?.message || 'Logout Failed');
    }
}


export default api;
