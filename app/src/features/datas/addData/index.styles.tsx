import { styled } from "@mui/system"

export const FormContainer = styled("form")`
  display: grid;
`
export const HeaderContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40rem;
  margin-bottom: 2.5rem;
`

export const CardContainer = styled("div")`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`

export const MetricsCard = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 2rem;
`

export const GraphCard = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
