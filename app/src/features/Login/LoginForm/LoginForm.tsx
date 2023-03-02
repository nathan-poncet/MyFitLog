import React from 'react';
import { TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from '@/libs/axios';
import { useForm } from 'react-hook-form';
import { Box } from '@mui/system';
import LoadingButton from '@mui/lab/LoadingButton';
import { useAuth } from '@/hooks/useAuth';

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const { register, handleSubmit, setError, formState } = useForm<{
    email: string;
    password: string;
  }>();
  const { isSubmitting, errors } = formState;

  const onSubmit = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    return new Promise((resolve) => {
      login(email, password)
        .then((res) => {
          navigate('/dashboard');
          resolve(res);
        })
        .catch((err) => {
          setError('root', { message: err.response.data.message });
          resolve(err);
        });
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: 'grid', gap: '2rem' }}>
        <TextField
          label="email"
          placeholder="emm@gmail.com"
          {...register('email', {
            required: true,
          })}
        />
        <TextField
          label="password"
          placeholder="*********"
          type="password"
          {...register('password', {
            required: true,
          })}
        />
        <LoadingButton
          type="submit"
          loading={isSubmitting}
          variant="contained"
          color="primary"
        >
          login
        </LoadingButton>
        <br />
        <Typography color="error.main">{errors.root?.message}</Typography>
      </Box>
    </form>
  );
};
