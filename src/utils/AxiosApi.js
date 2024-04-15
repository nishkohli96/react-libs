import axios from 'axios';
/* https://github.com/axios/axios */

const axiosApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
    // Authorization: `Bearer ${localStorage.getItem('auth')}`,
  }
});

axiosApi.interceptors.request.use(
  config =>
    // Do something before request is sent
    // config.headers.Authorization = `Bearer ${localStorage.getItem('auth')}`;
    config
  ,
  error => Promise.reject(error)
);

axiosApi.interceptors.response.use(
  response =>
    // Do something with response data
    response
  ,
  error =>
    // Do something with response error
    Promise.reject(error)

);

export default axiosApi;
