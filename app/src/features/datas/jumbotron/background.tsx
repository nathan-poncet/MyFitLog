import { Box } from '@mui/material';

export const Background = () => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '45%',
          right: 0,
          width: 400
        }}
      >
        <img src="src/assets/piaf.svg" alt="" />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '-15%',
          right: 0,
          width: 400
        }}
      >
        <img src="src/assets/personal_training.svg" alt="" />
      </Box>
    </Box>
  );
};
