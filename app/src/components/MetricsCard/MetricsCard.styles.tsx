import { styled } from "@mui/system"
import { Card } from "@material-ui/core"
import { Typography } from "@mui/material"

export const Container = styled(Card)`
  background-color: white;
  height: 15rem;
  width: 15rem;
  padding: 2rem;
  display: grid;
  text-align: center;
  vertical-align: center;
  border-radius: .8rem;
`

export const NumberToDisplay = styled(Typography)`
  color: ${({ theme }) => theme.palette.light};
`
