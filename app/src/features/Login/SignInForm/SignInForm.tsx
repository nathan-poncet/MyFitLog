import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import axios from '@/libs/axios';
import { useForm } from 'react-hook-form';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom';

export const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setError, formState, watch } = useForm<{
    email: string;
    password: string;
    confirmPassword: string;
  }>();
  const { isSubmitting, errors } = formState;

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
        .then(() => {
          axios
            .post('/auth', {
              email,
              password,
            })
            .then(({ data }) => {
              if (!data) {
                setError('root', { message: 'No token available' });
                resolve('No token available');
              }
              if (!data.token) {
                setError('root', { message: 'No token available' });
                resolve('No token available');
              }

              localStorage.setItem('authToken', JSON.stringify(data.token));
              resolve('auth success !');
              navigate('/dashboard');
            })
            .catch((err) => {
              setError('root', { message: err.response.data.message });
              resolve(err);
            });
        })
        .catch((err) => {
          console.log(err);
          
          setError('root', {
            message:
              err?.response?.data?.message ??
              err?.response?.data['hydra:description'],
          });
          resolve(err);
        });
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: 'grid', gap: '2rem' }}>
        <TextField
          label="Email"
          placeholder="email@gmail.mail"
          {...register('email', {
            required: true,
          })}
        />
        <TextField
          label="Mot de passe"
          placeholder="*********"
          type="password"
          {...register('password', {
            required: true,
          })}
        />
        <TextField
          label="Confirmation de mot de passe"
          placeholder="*********"
          type="password"
          {...register('confirmPassword', {
            required: true,
            validate: (val: string) => {
              if (watch('password') != val) {
                return 'Les mots de passes ne sont pas les mêmes';
              }
            },
          })}
          error={!!errors.confirmPassword?.message}
          helperText={errors.confirmPassword?.message}
        />
        <LoadingButton
          loading={isSubmitting}
          type="submit"
          variant="contained"
          color="primary"
        >
          Sign in
        </LoadingButton>
        <br />
        <Typography color="error.main">{errors.root?.message}</Typography>
      </Box>
    </form>
  );
};
