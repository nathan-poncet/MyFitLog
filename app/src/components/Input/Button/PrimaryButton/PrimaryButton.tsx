import React from 'react'
import * as Styled from './PrimaryButton.styles'

export const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return (
    <Styled.ButtonComponent onClick={props.onClick} variant="contained" disableElevation>
      {props.buttonLabel}
    </Styled.ButtonComponent>
  )
}

export interface PrimaryButtonProps {
  buttonLabel: string,

  onClick: () => void,
}
