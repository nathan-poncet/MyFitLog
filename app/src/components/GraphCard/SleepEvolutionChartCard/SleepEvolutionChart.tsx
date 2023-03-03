import React from "react"
import { ResponsiveBump } from '@nivo/bump'
import * as Styles from "./SleepEvolutionChart.styles"
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { Button } from "@mui/material"

export const SleepEvolutionChart: React.FC = () => {
  const [ isGroup, setIsGroup ] = React.useState<"smooth" | "linear" | undefined>()
  return (
    <Styles.CardContainer>
      <ResponsiveBump
        data={
          [
            {
              "id": "Serie 1",
              "data": [
                {
                  "x": 2000,
                  "y": 7
                },
                {
                  "x": 2001,
                  "y": 11
                },
                {
                  "x": 2002,
                  "y": 9
                },
                {
                  "x": 2003,
                  "y": 12
                },
                {
                  "x": 2004,
                  "y": 2
                }
              ]
            },
            {
              "id": "Serie 2",
              "data": [
                {
                  "x": 2000,
                  "y": 2
                },
                {
                  "x": 2001,
                  "y": 2
                },
                {
                  "x": 2002,
                  "y": 10
                },
                {
                  "x": 2003,
                  "y": 1
                },
                {
                  "x": 2004,
                  "y": 11
                }
              ]
            },
          ]
        }
        interpolation={isGroup}
        colors={{ scheme: 'spectral' }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -36
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'ranking',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        axisRight={null}
      />
      {
        isGroup === "smooth" ? <Button variant={"outlined"} onClick={() => setIsGroup("linear")}>
          <AutoFixHighIcon />
        </Button> : <Button variant={"outlined"} onClick={() => setIsGroup("smooth")}>
          <AutoFixHighIcon />
        </Button>
      }
    </Styles.CardContainer>
  )
}
