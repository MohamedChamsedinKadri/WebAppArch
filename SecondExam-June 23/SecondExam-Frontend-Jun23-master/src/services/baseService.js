import axios from 'axios';


// Base URL of the API
const baseURL = 'http://localhost:8080/api/v1';
const API = axios.create({ baseURL: baseURL });


export default API;