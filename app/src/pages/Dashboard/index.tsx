import { Stack } from '@mui/material';
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
    <Stack direction="row" bgcolor="primary.light">
      <Header />
      <Outlet />
    </Stack>
  ) : (
    <div></div>
  );
}

export default Dashboard;
