import styled from "@emotion/styled"
import Button from '@mui/material/Button'

export const ButtonComponent = styled(Button)`
  background-color: #FDF4EB; // à rajouter dans le file theme.ts
  color: #D99E63;
  
  &:hover {
    background-color: #D99E63;
    color: white;
  }
`