import React from 'react';

import { Box, Button, Stack, Typography } from '@mui/material';
import { LoginForm } from '@/features/Login/LoginForm/LoginForm';
import { SignInForm } from '@/features/Login/SignInForm/SignInForm';

function Login() {
  const unDrawnLogin = 'src/assets/undraw_login_page.svg';
  const logo = 'src/assets/logo.svg';

  const [isSignInClick, setIsSignInClick] = React.useState(false);
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: { xs: 0, md: '50%' } }}>
        <Box
          sx={{ display: { xs: 'none', md: 'block' } }}
          width="80%"
          margin="0 auto"
        >
          <img src={unDrawnLogin} alt="" />
        </Box>
      </Box>

      {/** section formulaire */}
      <Box sx={{ width: { xs: '100%', md: '50%' } }}>
        <Stack
          direction="column"
          justifyContent="center"
          spacing={2}
          maxWidth={500}
          margin="0 auto"
        >
          <Box margin="0 auto" width={80}>
            <img src={logo} alt="logo coeur cardio" />
          </Box>

          <Typography variant="h4" gutterBottom fontWeight={700}>
            Rejoins l'avanture MyFitLog !
          </Typography>

          <Typography variant="body1" gutterBottom color="grey">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
          </Typography>

          {/** debut partie formulaire de connexion */}
          {isSignInClick ? <SignInForm /> : <LoginForm />}
          {/** fin partie formulaire de connexion */}

          <div>
            <Typography variant="caption">
              {isSignInClick
                ? 'You have already an account ?'
                : 'Don’t have an account yet ?'}
            </Typography>
            {isSignInClick ? (
              <Button variant="text" onClick={() => setIsSignInClick(false)}>
                sign up !
              </Button>
            ) : (
              <Button variant="text" onClick={() => setIsSignInClick(true)}>
                sign in !
              </Button>
            )}
          </div>
        </Stack>
      </Box>
    </Box>
  );
}

export default Login;
