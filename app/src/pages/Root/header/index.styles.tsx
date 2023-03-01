import { Container } from '@mui/material';
import { styled } from '@mui/system';

export const Root = styled(Container)(({ theme }) => ({
  position: 'fixed',
  zIndex: 1000,
  top: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
}));

export const BrandContainer = styled(Container)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: -1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
