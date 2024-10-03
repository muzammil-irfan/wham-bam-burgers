import axios from 'axios';
import BACKEND_URL from '../utils/backendUrl';

const api = axios.create({
  baseURL: BACKEND_URL,
});

export const fetchMenu = () => api.get('/menu');
export const placeOrder = (orderData) => api.post('/orders', orderData);
