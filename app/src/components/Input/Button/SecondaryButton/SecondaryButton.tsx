import React from "react"
import * as Styled from "./SecondaryButton.styles"
import { Box } from "@mui/material"

export const SecondaryButton: React.FC<SecondaryButtonProps> = (props) => {
  return (
      <Styled.ButtonComponent
        variant="outlined"
      >
        {props.buttonLabel}
      </Styled.ButtonComponent>
  )
}

export interface SecondaryButtonProps {
  buttonLabel: string
}
