import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './header';

function Dashboard() {
  return (
    <Stack direction="row" bgcolor="primary.light">
      <Header />
      <Outlet />
    </Stack>
  );
}

export default Dashboard;
