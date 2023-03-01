import React from 'react';
import * as Styled from './PrimaryButton.styles';

export const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return (
    <Styled.ButtonComponent variant="contained" disableElevation>
      {props.buttonLabel}
    </Styled.ButtonComponent>
  );
};

export interface PrimaryButtonProps {
  buttonLabel: string;
}
