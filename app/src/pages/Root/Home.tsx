import { HomeCardList } from '@/features/datas/cards/home_card_list';
import { Jumbotron } from '@/features/datas/jumbotron';
import {
  AnalyticsOutlined,
  DirectionsRun,
  FoodBankOutlined,
  SportsBarOutlined,
} from '@mui/icons-material';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <Jumbotron />
        <Box sx={{ m: 4 }} />
        <HomeCardList />
      </Container>
      <Box sx={{ m: 32 }} />
      <Container maxWidth="lg">
        <Typography variant="h5" variantMapping={{ h5: 'h2' }} fontWeight="700">
          Bienvenue sur MyFitLog, l'application de surveillance de la santé
        </Typography>
        <Box sx={{ m: 2 }} />
        <Typography variant="body1">
          Nous avons créé cette application pour aider les utilisateurs à suivre
          <br />
          leur santé et leur progression de manière simple et pratique.
        </Typography>
        <Box sx={{ m: 4 }} />
        <Grid container sx={{ borderRadius: 4, bgcolor: 'primary.light' }}>
          {[
            {
              icon: <DirectionsRun />,
              title: "Suivi de l'activité physique",
              description: `MyFitLog permet aux utilisateurs de suivre leur activité physique en enregistrant le nombre de pas, la distance parcourue, les calories brûlées et bien plus encore. \n Les graphiques et tableaux de l'application vous aideront à visualiser vos progrès et à atteindre vos objectifs de condition physique.`,
            },
            {
              icon: <SportsBarOutlined />,
              title: 'Suivi du sommeil',
              description: `MyFitLog vous aide à suivre votre sommeil, en enregistrant le temps de sommeil, \n la qualité du sommeil et les cycles de sommeil. \n Vous pourrez ainsi mieux comprendre votre sommeil et trouver des moyens \n pour améliorer votre qualité de sommeil.`,
            },
            {
              icon: <FoodBankOutlined />,
              title: "Suivi de l'alimentation",
              description: `L'application vous permet de suivre votre consommation de nourriture, \n de surveiller les calories, les nutriments et l'apport en eau. \n Vous pouvez également ajouter des photos de vos repas pour mieux suivre votre alimentation.`,
            },
            {
              icon: <AnalyticsOutlined />,
              title: 'Visualisation des données',
              description: `L'application comprend des graphiques et tableaux pour vous aider à visualiser vos progrès. \n Vous pouvez personnaliser les tableaux en fonction de vos préférences pour mieux suivre vos mesures. \n Avec MyFitLog, vous pouvez suivre votre santé et votre condition physique en un seul endroit.`,
            },
          ].map(({ icon, title, description }) => (
            <Grid item xs={12} sm={6} padding={4}>
              <Box>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 2,
                    paddingX: 2,
                    paddingY: 1,
                    borderRadius: 10,
                    background: '#FFFFFF',
                  }}
                >
                  {icon}
                  <Typography variant="body1" fontWeight={600}>
                    {title}
                  </Typography>
                </Box>
                <Box sx={{ m: 2 }} />
                <Typography variant="body2">{description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ m: 16 }} />

      <Box sx={{ width: 80, margin: '0 auto' }}>
        <img src="src/assets/stepping_up_chart.svg" alt="" />
      </Box>

      <Box sx={{ m: 16 }} />

      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography variant="h5" variantMapping={{ h5: 'h2' }} fontWeight="700">
          Chez MyFitLog, notre équipe est composée de professionnels passionnés
          <br />
          par la santé et la condition physique.
        </Typography>
        <Box sx={{ m: 2 }} />
        <Typography variant="body1">
          Nous sommes une équipe MyFitLog <br />
          passionnée et constituée de professionnels de la santé et de la
          condition physique déterminés à vous aider <br />à atteindre vos
          objectifs de bien-être.
        </Typography>
        <Box sx={{ m: 6 }} />

        <Button component={Link} to={'/about'} variant="outlined">
          À Propos
        </Button>
      </Container>

      <Box sx={{ m: 16 }} />

      <Box sx={{ width: 80, margin: '0 auto' }}>
        <img src="src/assets/pie_chart.svg" alt="" />
      </Box>

      <Box sx={{ m: 16 }} />

      <Container maxWidth="lg">
        <Typography variant="h5" variantMapping={{ h5: 'h2' }} fontWeight="700">
          Améliorez votre santé et votre condition physique <br />
          avec MyFitLog
        </Typography>
        <Box sx={{ m: 2 }} />
        <Typography variant="body1">
          L'inscription à MyFitLog est simple et gratuite, <br />
          alors inscrivez-vous dès aujourd'hui et commencez à améliorer votre
          santé et votre condition physique.
        </Typography>
        <Box sx={{ m: 4 }} />
        <HomeCardList />
        <Box sx={{ m: 6 }} />
        <Button component={Link} to={'/login'} size="large" variant="outlined">
          Rejoins l’avanture !
        </Button>
      </Container>
    </>
  );
}

export default Home;
