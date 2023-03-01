import React, { useReducer } from "react"
import { LogoDashboard } from '@/components/data_display/logo/dashboard';
import { LogoutOutlined, MonitorHeart, Settings, AccountCircle, HomeRounded, Info, LockOpen } from '@mui/icons-material'
import {
  Box,
  Button,
  Divider, Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon, ListItemText,
} from '@mui/material'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export const Header: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const matches = useMediaQuery('(min-width:600px)');
  const [drawerIsOpen, toggleDrawer] = useReducer((state) => !state, false);

  return (
    <>
      {matches ? (
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
                    onClick={() => navigate("/dashboard")}
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
            <ListItem>
              <ListItemButton sx={{ borderRadius: 2, justifyContent: 'center' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <AccountCircle
                    onClick={() => navigate("my-profile")}
                    color={
                      location.pathname === '/dashboard/my-profile' ? 'primary' : 'inherit'
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
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon sx={{ color: "white" }} onClick={toggleDrawer}/>
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="white">
                News
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer anchor="bottom" open={drawerIsOpen} onClose={toggleDrawer}>
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to={`/`}>
                  <ListItemIcon>
                    <HomeRounded />
                  </ListItemIcon>
                  <ListItemText primary="Accueil" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to={`/about`}>
                  <ListItemIcon>
                    <Info />
                  </ListItemIcon>
                  <ListItemText primary="À Propos" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to={`/login`}>
                  <ListItemIcon>
                    <LockOpen />
                  </ListItemIcon>
                  <ListItemText primary="Login" />
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
        </Box>
      )}
    </>
  )
}

export default Header;
