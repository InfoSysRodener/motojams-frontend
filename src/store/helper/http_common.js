import axios from 'axios';
import StorageServices from './../../storage';
const storage = new StorageServices;

let Token = '';
let BASE_URL = process.env.BASE_URL;
console.log(process.env);
console.log('base url', BASE_URL);
console.log('fb id', process.env.VUE_APP_FB_APP_ID);

const HTTP = axios.create({
    baseURL: "http://localhost:3000/api/",
    headers: {
      "x-auth-token": Token,
      'Accept': 'application/json',
    }
});

HTTP.interceptors.request.use( async (config) => {
   let usertoken = await storage.get('token');
   if(usertoken) Token = usertoken;
   return config
},(error) => {
    return Promise.reject(error);
});

HTTP.interceptors.response.use((response) => {
    return response;
} ,(error) => {
    return Promise.reject(error);
});

export default HTTP;