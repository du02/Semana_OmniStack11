import axios from 'axios';

const api = axios.create({
    baseURL: 'http://xxx.xxx.xxx.x:3333',
});

export default api;