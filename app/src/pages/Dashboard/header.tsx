import { LogoDashboard } from '@/components/data_display/logo/dashboard';
import { LogoutOutlined, MonitorHeart, Settings } from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <Box
      paddingX={2}
      paddingY={4}
      bgcolor="#FFFFFF"
      height="100vh"
      display="inline-flex"
      flexDirection="column"
    >
      <Button variant="text" component={Link} to="/dashboard">
        <LogoDashboard />
      </Button>
      <Box sx={{ m: 1 }} />
      <Divider />
      <Box sx={{ m: 1 }} />
      <List>
        <ListItem>
          <ListItemButton sx={{ borderRadius: 2, justifyContent: 'center' }}>
            <ListItemIcon sx={{ minWidth: 0 }}>
              <MonitorHeart
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
              <Settings />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
      <Box flexGrow={1} />
      <List>
        <ListItem>
          <ListItemButton
            component={Link}
            to="/"
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
}

export default Header;
