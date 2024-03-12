import axios from 'axios';
import { API } from '../utils/keys';

const api = axios.create({
  baseURL: API,
});

export default api;
