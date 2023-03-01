import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const Container = styled(Typography)`
  font-weight: 600;

  & > span {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
