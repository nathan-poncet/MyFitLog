import React from 'react';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from '@/libs/axios';
import { useForm } from 'react-hook-form';
import { Box } from '@mui/system';
import LoadingButton from '@mui/lab/LoadingButton';

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setError, formState } = useForm<{
    email: string;
    password: string;
  }>();
  const { isSubmitting } = formState;

  const onSubmit = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    return new Promise((resolve, reject) => {
      axios
        .post('/auth', {
          email,
          password,
        })
        .then((res) => res.data)
        .then((data) => {
          if (data.token) {
            localStorage.setItem('authToken', JSON.stringify(data.token));
            navigate('/dashboard');
            resolve('auth success !');
          }
          setError('root', { message: 'No token available' });
          reject();
        });
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: 'grid', gap: '2rem' }}>
        <TextField
          label="email"
          placeholder="emm@gmail.com"
          {...register('email')}
        />
        <TextField
          label="password"
          placeholder="*********"
          type="password"
          {...register('password')}
        />
        <LoadingButton
          type="submit"
          loading={isSubmitting}
          variant="contained"
          color="primary"
        >
          login
        </LoadingButton>
      </Box>
    </form>
  );
};
