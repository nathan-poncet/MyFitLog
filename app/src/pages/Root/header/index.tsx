import { Brand } from '@/components/data_display/brand';
import { Logo } from '@/components/data_display/logo';
import { HomeRounded, Info, LockOpen } from '@mui/icons-material';
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useReducer } from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './index.styles';

function Header() {
  const [drawerIsOpen, toggleDrawer] = useReducer((state) => !state, false);
  return (
    <header>
      <Styles.Root maxWidth="xl">
        <Button onClick={toggleDrawer}>
          <Logo />
        </Button>

        <Styles.BrandContainer>
          <Brand />
        </Styles.BrandContainer>

        <Button component={Link} to={'/login'} variant="outlined">
          Essayer gratuitement
        </Button>
      </Styles.Root>

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
    </header>
  );
}

export default Header;
