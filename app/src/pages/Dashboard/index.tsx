import { useAuth } from '@/hooks/useAuth';
import { Box, Stack } from '@mui/material';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './header';

function Dashboard() {
  const navigate = useNavigate();
  const isLoggin = localStorage.getItem('authToken');

  useEffect(() => {
    if (!isLoggin) return navigate('/');
  }, [isLoggin]);

  return isLoggin ? (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      bgcolor="primary.light"
      minHeight="100vh"
    >
      <Header />
      <Box maxHeight="100vh" sx={{ overflowY: 'auto' }}>
        {isLoggin && <Outlet />}
      </Box>
    </Stack>
  ) : (
    <div></div>
  );
}

export default Dashboard;
