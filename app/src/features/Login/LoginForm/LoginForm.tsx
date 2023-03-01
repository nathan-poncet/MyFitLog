import React from 'react';
import { Button, TextField } from '@mui/material';
import { Link, redirect } from 'react-router-dom';
import axios from '@/libs/axios';
import { useForm } from 'react-hook-form';
import { Box } from '@mui/system';

export const LoginForm: React.FC = () => {
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
            redirect('/dashboard');
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
        <Button
          component={Link}
          to="/dashboard"
          variant="contained"
          color="primary"
        >
          login
        </Button>

        {/** <FormControlLabel control={<Checkbox defaultChecked/>} label="remember me"/> */}
        <Button variant="outlined">Sign in with Google</Button>
      </Box>
    </form>
  );
};
