import * as React from 'react';
import * as Styled from "@/components/Input/InputText/InputText.styles"
import { Box } from "@mui/material"

export const InputText: React.FC<InputTextProps> = (props) => {
  return (
    <Box
      component="form"
    >
      <Styled.TextInput
        id="outlined-basic"
        label={props.labelInput}
        variant="outlined"
        placeholder={props.placeholder}
        type={props.inputType}
      />
    </Box>
  )
}


export interface InputTextProps {
  labelInput: string,
  placeholder?: string,

  /** pour avoir la liste des types, aller dans type directement dans le composant et faire un CTRL+ESC, et
   * ensuite remettre la props */
  inputType?: string,
}