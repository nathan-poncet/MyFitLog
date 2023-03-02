import React from "react"
import * as Styles from "./MetricsCard.styles"
import { Typography } from "@mui/material"

export const MetricsCard: React.FC<MetricsCardProps> = (props) => {
  return (
    <Styles.Container>
      <Typography variant="h6" gutterBottom>
        {props.title}
      </Typography>

      <Styles.NumberToDisplay variant="h3" gutterBottom color="initial">
        {props.value} {props.unit}
      </Styles.NumberToDisplay>
    </Styles.Container>
  )
}

export interface MetricsCardProps {
  title: string,
  value: number,

  unit: string,
}
