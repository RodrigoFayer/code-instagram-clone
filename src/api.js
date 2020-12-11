import axios from 'axios';

const axiosConfig = {
    baseURL: 'https://treinamento-nodejs-app-masters.herokuapp.com'
}

if(localStorage.getItem('auth-token')){
    axiosConfig.headers= {
        Authorization: localStorage.getItem('auth-token')
    };
}

export const API = axios.create(axiosConfig);

export const setAuthToken = (token) => {
    const authToken = `Bearer ${token}`;
    localStorage.setItem('auth-token', authToken);
    API.defaults.headers.common['Authorization'] = authToken;
};

