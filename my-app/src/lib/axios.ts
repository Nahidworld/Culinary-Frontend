// src/lib/axios.ts
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3000'; // NestJS backend URL

export default axios;