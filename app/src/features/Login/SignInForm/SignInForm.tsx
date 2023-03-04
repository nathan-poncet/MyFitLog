import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import axios from '@/libs/axios';
import { useForm } from 'react-hook-form';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const { register: authRegister } = useAuth();
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
    return new Promise((resolve) => {
      authRegister(email, password)
        .then((res) => {
          navigate('/dashboard');
          resolve(res);
        })
        .catch((err) => {
          setError('root', { message: err.response?.data?.['hydra:description'] });
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
        <Typography color="error.main">{errors.root?.message}</Typography>
      </Box>
    </form>
  );
};
