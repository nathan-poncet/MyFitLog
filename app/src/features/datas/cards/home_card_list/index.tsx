import { AccessTime, Person, SelfImprovement } from '@mui/icons-material';
import { Stack } from '@mui/system';
import { HomeCard } from '../home_card';

export const HomeCardList = () => {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={4}
      sx={{ position: 'relative', mb: 1, maxWidth: 350 * 3 }}
    >
      <HomeCard
        icon={<AccessTime />}
        title="Visualisez vos progrès en temps réel"
        description="nos graphiques et tableaux pour rester motivé et atteindre vos objectifs."
        color="#808080"
        bgcolor="#F6F6F6"
      />
      <HomeCard
        icon={<SelfImprovement />}
        title="Améliorez votre santé"
        description="surveillez votre activité physique, votre alimentation et votre sommeil grâce à notre application."
        color="#D99E63"
        bgcolor="#FDF4EB"
      />
      <HomeCard
        icon={<Person />}
        title="Réponds à vos besoins"
        description="Notre application de surveillance, facile à utiliser et personnalisable en fonction de vos besoins."
        color="#5FA0BB"
        bgcolor="#F0F8FB"
      />
    </Stack>
  );
};
