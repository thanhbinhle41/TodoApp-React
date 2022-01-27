import axios from 'axios';
import queryString from 'query-string'; 

export const axiosInstance = axios.create({
  withCredentials: false,
  baseURL: process.env.REACT_APP_TODO_API_KEY,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
}); 