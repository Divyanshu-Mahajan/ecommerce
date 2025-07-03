// src/config/axios.js
import axios from 'axios';

export const axiosi = axios.create({
  baseURL: 'http://localhost:8000/', // ✅ No quotes, no nesting, trailing slash is optional but clean
  withCredentials: true, // if you're using cookies or sessions
});


//Mern-e-commerce