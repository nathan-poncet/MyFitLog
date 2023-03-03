import { Brand } from '@/components/data_display/brand';
import { Button } from '@mui/material';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import * as Styles from './index.styles';

function Footer() {
  return (
    <footer>
      <Styles.Root maxWidth="xl">
        <Stack justifyContent="center" alignItems="center">
          <Brand />
          <Button component={Link} to="/rgpd">
            Mentions légale
          </Button>
        </Stack>
      </Styles.Root>
    </footer>
  );
}

export default Footer;
