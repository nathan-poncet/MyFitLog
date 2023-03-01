import { SvgIconComponent } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  bgcolor: string;
};

export const HomeCard = ({ icon, title, description, color, bgcolor }: Props) => {
  return (
    <Box
      sx={{
        padding: 4,
        borderRadius: 2,
        textAlign: 'center',
        color: color,
        background: bgcolor,
      }}
    >
      <Box
        sx={{
          display: 'inline-block',
          paddingX: 2,
          paddingY: 1,
          borderRadius: 5,
          background: 'background',
          lineHeight: 0,
        }}
      >
        {icon}
      </Box>
      <Box sx={{ m: 2 }} />
      <Typography variant="body1" fontWeight={600}>
        {title}
      </Typography>
      <Box sx={{ m: 1 }} />
      <Typography variant="body2" sx={{ maxWidth: 250, margin: '0 auto' }}>
        {description}
      </Typography>
    </Box>
  );
};
