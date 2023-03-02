import { apiUrl } from '@/constants/api';
import axios from 'axios';

export default axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${
      localStorage.getItem('authToken')
        ? JSON.parse(localStorage.getItem('authToken') as any)
        : ''
    }`,
  },
  baseURL: apiUrl,
});
