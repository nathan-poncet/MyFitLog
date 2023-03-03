import React from 'react';
import { LogoDashboard } from '@/components/data_display/logo/dashboard';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import {
  LogoutOutlined,
  MonitorHeart,
  Settings,
  AccountCircle,
} from '@mui/icons-material';
import { Logo } from '@/components/data_display/logo';
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <Box
      paddingX={2}
      paddingY={4}
      bgcolor="#FFFFFF"
      width={{ xs: '100vw', sm: 'unset' }}
      height={{ xs: 'unset', sm: '100vh' }}
      display={{ xs: 'none', sm: 'inline-flex' }}
      flexDirection="column"
    >
      <>
        <Button
          variant="text"
          component={Link}
          to="/dashboard"
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          <LogoDashboard />
        </Button>
        <Button sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <Logo />
        </Button>
      </>
      <Box sx={{ m: 1 }} />
      <Divider />
      <Box sx={{ m: 1 }} />
      <List>
        <ListItem>
          <ListItemButton sx={{ borderRadius: 2, justifyContent: 'center' }}>
            <ListItemIcon sx={{ minWidth: 0 }}>
              <MonitorHeart
                onClick={() => navigate('/dashboard')}
                color={
                  location.pathname === '/dashboard' ? 'primary' : 'inherit'
                }
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ borderRadius: 2, justifyContent: 'center' }}>
            <ListItemIcon sx={{ minWidth: 0 }}>
              <ModeStandbyIcon
                onClick={() => navigate("objectifs")}
                color={
                  location.pathname === '/dashboard/objectifs' ? 'primary' : 'inherit'
                }
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ borderRadius: 2, justifyContent: 'center' }}>
            <ListItemIcon sx={{ minWidth: 0 }}>
              <AccountCircle
                onClick={() => navigate('my-profile')}
                color={
                  location.pathname === '/dashboard/my-profile'
                    ? 'primary'
                    : 'inherit'
                }
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
      <Box flexGrow={1} />
      <List>
        <ListItem>
          <ListItemButton
            onClick={() => {
              logout();
              navigate('/');
            }}
            sx={{ borderRadius: 2, justifyContent: 'center' }}
          >
            <ListItemIcon sx={{ minWidth: 0 }}>
              <LogoutOutlined />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Header;
