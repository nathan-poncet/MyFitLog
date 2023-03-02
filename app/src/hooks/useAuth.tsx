import axios from '@/libs/axios';
import { useState } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState<{
    '@id': string;
    '@type': string;
    id: number;
    email: String;
  } | null>();

  const fetchUser = () =>
    localStorage.getItem('authToken')
      ? axios.get('/me').then(({ data }) => {
          setUser(data);
        })
      : setUser(null);

  const login = (email: string, password: string) =>
    new Promise((resolve, reject) => {
      axios
        .post('/auth', {
          email,
          password,
        })
        .then(({ data }) => {
          if (!data) {
            reject('No token available');
          }
          if (!data.token) {
            reject('No token available');
          }

          localStorage.setItem('authToken', JSON.stringify(data.token));
          fetchUser();
          resolve('auth success !');
        })
        .catch((err) => {
          reject(err);
        });
    });

  const register = (email: string, password: string) =>
    new Promise((resolve, reject) => {
      axios
        .post('/register', {
          email,
          plainPassword: password,
        })
        .then(() => {
          login(email, password)
            .then((res) => resolve(res))
            .catch((err) => reject(err));
        })
        .catch((err) => {
          reject(err);
        });
    });

  const logout = () => {
    localStorage.removeItem('authToken');
    fetchUser();
  };

  return { user, login, register, logout };
};
