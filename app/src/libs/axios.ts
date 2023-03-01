import { apiUrl } from '@/constants/api';
import axios from 'axios';

export default axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: apiUrl,
});
