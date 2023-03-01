import React from 'react';
import * as Styles from '../LoginForm/LoginForm.styles';
import { Box, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from '@/libs/axios';
import { useForm } from 'react-hook-form';

export const SignInForm: React.FC = () => {
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const onSubmit = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    return axios
      .post('/register', {
        email,
        plainPassword: password,
      })
      .then((res) => res.data)
      .then(console.log)
      .catch(console.log);
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
        <Button type="submit" variant="contained" color="primary">
          Sign in
        </Button>
        {/** <FormControlLabel control={<Checkbox defaultChecked/>} label="remember me"/> */}
        <Button variant="outlined">Sign in with Google</Button>
      </Box>
    </form>
  );
};
