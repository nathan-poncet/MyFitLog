import React from 'react';
import * as Styles from './MyProfile.styles';
import { Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotesIcon from '@mui/icons-material/Notes';
import { useAuth } from '@/hooks/useAuth';

const MyProfile: React.FC = () => {
  const { user } = useAuth();
  return (
    <Styles.Container>
      <Styles.LeftContainer>
        <Typography variant="h3" variantMapping={{ h4: 'h1' }} fontWeight="500">
          My profile
        </Typography>
        <br />
        <br />
        <Typography variant="h5" variantMapping={{ h4: 'h1' }} fontWeight="500">
          Informations
        </Typography>
        <br />
        <br />
        <Styles.InformationCard>
          <Typography
            variant="h6"
            variantMapping={{ h4: 'h1' }}
            fontWeight="300"
            sx={{ display: 'flex', gap: 2, alignItems: 'center' }}
          >
            <MailOutlineIcon /> Email
          </Typography>

          <Typography
            variant="subtitle2"
            variantMapping={{ h4: 'h1' }}
            fontWeight="300"
            sx={{ display: 'flex', gap: 2 }}
          >
            {user?.email} 
          </Typography>
        </Styles.InformationCard>

        <Styles.InformationCard>
          <Typography
            variant="h6"
            variantMapping={{ h4: 'h1' }}
            fontWeight="300"
            sx={{
              display: 'grid',
              gap: 2,
              gridTemplateColumns: '3% auto',
              alignItems: 'center',
            }}
          >
            <NotesIcon /> Bio
          </Typography>

          <Typography
            variant="subtitle2"
            variantMapping={{ h4: 'h1' }}
            fontWeight="300"
            sx={{ display: 'flex', gap: 2 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vehicula. 
          </Typography>
        </Styles.InformationCard>
      </Styles.LeftContainer>
    </Styles.Container>
  );
};

export default MyProfile;
