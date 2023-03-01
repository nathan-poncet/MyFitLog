import React from 'react';
import { Box, TextField } from '@mui/material';
import axios from '@/libs/axios';
import { useForm } from 'react-hook-form';
import LoadingButton from '@mui/lab/LoadingButton';
import { redirect } from "react-router-dom";


export const SignInForm: React.FC = () => {
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
        .post('/register', {
          email,
          plainPassword: password,
        })
        .then((res) => res.data)
        .then(() => {
          axios
            .post('/auth', {
              email,
              password: password,
            })
            .then((res) => res.data)
            .then((data) => {
              if (data.token) {
                localStorage.setItem('authToken', JSON.stringify(data.token));
                redirect("/dashboard");
                resolve('auth success !');
              }
              setError('root', { message: 'No token available' });
              reject();
            });
        });
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: 'grid', gap: '2rem' }}>
        <TextField
          label="Email"
          placeholder="email@gmail.mail"
          {...register('email')}
        />
        <TextField
          label="Password"
          placeholder="*********"
          type="password"
          {...register('password')}
        />
        <TextField
          label="Password comfirmation"
          placeholder="*********"
          type="password"
        />
        <LoadingButton
          loading={isSubmitting}
          type="submit"
          variant="contained"
          color="primary"
        >
          Sign in
        </LoadingButton>
      </Box>
    </form>
  );
};
