import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const API = axios.create({
  baseURL,
});

// Add a request interceptor to include the API key in every request
API.interceptors.request.use(
  function (req) {
    req.params = req.params || {};
    req.params['api_key'] = apiKey;
    req.params['language'] = 'en-US';
    return req;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default API;
