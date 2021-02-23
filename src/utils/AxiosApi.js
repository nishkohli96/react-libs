import axios from 'axios';
/* https://github.com/axios/axios */

const axiosApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    timeout: 1000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        // Authorization: `Bearer ${localStorage.getItem('auth')}`,
    },
});

axiosApi.interceptors.request.use(
    (config) => {
        // Do something before request is sent
        // config.headers.Authorization = `Bearer ${localStorage.getItem('auth')}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosApi.interceptors.response.use(
    (response) => {
        // Do something with response data
        return response;
    },
    (error) => {
        // Do something with response error
        return Promise.reject(error);
    }
);

export default axiosApi;
