import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const Root = styled(Box)`
  background-color: #F5F4EE;
  border-radius: ${({ theme }) => theme.spacing(2)};
`;
