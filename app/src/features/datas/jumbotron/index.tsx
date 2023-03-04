import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Background } from './background';
import * as Styles from './index.styles';

export const Jumbotron = () => {
  return (
    <Styles.Root sx={{ position: 'relative' }} padding={{ xs: 5, md: 10 }}>
      <Typography variant="h1" fontSize={{ xs: 30, md: 60 }} fontWeight="700">
        Suivez votre santé <br />
        avec MyFitLog
      </Typography>
      <Box sx={{ m: 4 }} />
      <Typography variant="body1" fontWeight="600">
        Deviens la meilleur version de toi même 😎
      </Typography>
      <Box sx={{ m: { xs: 4, md: 6 } }} />
      <Typography variant="body2">
        Vous êtes la personne la plus importante de votre vie, <br />
        Notre application est conçue pour vous aider ! <br />
        N'hésitez plus et rejoignez-nous dès maintenant, <br />
        pour commencer votre parcours vers une vie plus épanouissante et plus
        saine !
      </Typography>
      <Box sx={{ m: { xs: 4, md: 6 } }} />
      <Button variant="outlined" component={Link} to="/login">Essayer gratuitement</Button>

      <Background />
    </Styles.Root>
  );
};
