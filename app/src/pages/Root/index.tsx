import Footer from './footer';
import Header from './header';
import { Box, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <Box
      position="relative"
      minHeight="100vh"
      sx={{ display: 'flex', flexDirection: 'column' }}
    >
      <Header />
      <Box sx={{ p: 5 }} />
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: "center" }}>
        <Box width="100%">
          <Outlet />
        </Box>
      </Box>
      <Box sx={{ p: 10 }} />
      <Footer />
    </Box>
  );
}

export default Root;
