import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <Box sx={{ position: 'fixed', top: '10%', right: 1400, opacity: 0.4 }}>
        <img src="src/assets/piaf.svg" alt="" />
      </Box>
      <Box sx={{ position: 'fixed', bottom: '15%', left: 1200, opacity: 0.4 }}>
        <img src="src/assets/piaf.svg" alt="" />
      </Box>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box sx={{ m: 8 }} />
        <Typography variant="h4">À Propos de MyFitLog</Typography>
        <Box sx={{ m: 8 }} />
        <Typography variant="body1">
          Chez MyFitLog, notre équipe est composée de professionnels passionnés
          par la santé et la condition physique. Nous sommes une équipe
          multidisciplinaire, avec des développeurs, des designers, des experts
          en nutrition et en activité physique, des spécialistes du sommeil et
          bien plus encore. Nous sommes tous unis par la vision de créer une
          application de surveillance de la santé qui soit à la fois simple et
          efficace.
        </Typography>
        <Box sx={{ m: 8 }} />
        <Typography variant="body1">
          Notre équipe de développement est composée de programmeurs
          expérimentés, qui travaillent en étroite collaboration avec les
          experts en santé et en condition physique pour créer une application
          intuitive et facile à utiliser. Notre équipe de design s'assure que
          l'application est à la fois esthétique et conviviale, avec une
          interface utilisateur simple et élégante.
        </Typography>
        <Box sx={{ m: 8 }} />
        <Typography variant="body1">
          Notre équipe de nutrition et d'activité physique comprend des
          diététiciens et des entraîneurs personnels qualifiés, qui aident à
          créer des plans de régime et d'entraînement personnalisés pour les
          utilisateurs. Notre équipe de sommeil aide à développer des
          fonctionnalités de suivi du sommeil pour aider les utilisateurs à
          mieux comprendre leur sommeil et à l'améliorer.
        </Typography>
        <Box sx={{ m: 8 }} />
        <Typography variant="body1">
          Chez MyFitLog, nous sommes tous passionnés par la santé et la
          condition physique, et nous sommes déterminés à aider les utilisateurs
          à atteindre leurs objectifs de bien-être. Nous sommes fiers de
          travailler ensemble pour offrir une expérience utilisateur
          exceptionnelle à nos utilisateurs.
        </Typography>
        <Box sx={{ m: 8 }} />
        <Button component={Link} to={'/login'} variant="outlined">
          Laisse toi guidé par MyFitLog
        </Button>
        <Box sx={{ m: 8 }} />
      </Container>
    </>
  );
}

export default About;
