import Footer from './footer';
import Header from './header';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

function Root() {
  return (
    <Box position="relative" minHeight="100vh">
      <Header />
      <div>
        <Box sx={{ p: 5 }} />
        <Outlet />
        <Box sx={{ p: 10 }} />
      </div>
      <Footer />
    </Box>
  );
}

export default Root;
