import React from 'react';
import * as Styles from '../LoginForm/LoginForm.styles';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export const SignInForm: React.FC = () => {
  return (
    <Styles.Container>
      <TextField label="Email" placeholder="email@gmail.mail" />
      <TextField label="Password" placeholder="*********" type="password" />
      <TextField
        label="Password comfirmation"
        placeholder="*********"
        type="password"
      />
      <Button
        component={Link}
        to="/dashboard"
        variant="contained"
        color="primary"
      >
        Sign in
      </Button>
      {/** <FormControlLabel control={<Checkbox defaultChecked/>} label="remember me"/> */}
      <Button variant="outlined">Sign in with Google</Button>
    </Styles.Container>
  );
};
