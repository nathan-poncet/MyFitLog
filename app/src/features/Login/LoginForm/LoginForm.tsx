import React from 'react';
import * as Styles from './LoginForm.styles';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export const LoginForm: React.FC = () => {
  return (
    <Styles.Container>
      <TextField label="email" placeholder="emm@gmail.com" />
      <TextField label="password" placeholder="*********" type="password" />
      <Button component={Link} to="/dashboard" variant="contained" color="primary">
        login
      </Button>

      {/** <FormControlLabel control={<Checkbox defaultChecked/>} label="remember me"/> */}
      <Button variant="outlined">Sign in with Google</Button>
    </Styles.Container>
  );
};
