import { ResponsiveBar } from '@nivo/bar'
import * as Styles from "@/components/GraphCard/SleepEvolutionChartCard/SleepEvolutionChart.styles"

export const MyResponsiveBar = () => {
  const data = [
    {
      "country": "AD",
      "hot dog": 150,
      "hot dogColor": "hsl(320, 70%, 50%)",
      "burger": 140,
      "burgerColor": "hsl(205, 70%, 50%)",
      "sandwich": 49,
      "sandwichColor": "hsl(254, 70%, 50%)",
      "kebab": 11,
      "kebabColor": "hsl(33, 70%, 50%)",
      "fries": 136,
      "friesColor": "hsl(81, 70%, 50%)",
      "donut": 195,
      "donutColor": "hsl(43, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 42,
      "hot dogColor": "hsl(182, 70%, 50%)",
      "burger": 104,
      "burgerColor": "hsl(280, 70%, 50%)",
      "sandwich": 104,
      "sandwichColor": "hsl(161, 70%, 50%)",
      "kebab": 112,
      "kebabColor": "hsl(326, 70%, 50%)",
      "fries": 103,
      "friesColor": "hsl(203, 70%, 50%)",
      "donut": 66,
      "donutColor": "hsl(200, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 7,
      "hot dogColor": "hsl(85, 70%, 50%)",
      "burger": 21,
      "burgerColor": "hsl(158, 70%, 50%)",
      "sandwich": 61,
      "sandwichColor": "hsl(263, 70%, 50%)",
      "kebab": 85,
      "kebabColor": "hsl(24, 70%, 50%)",
      "fries": 164,
      "friesColor": "hsl(32, 70%, 50%)",
      "donut": 58,
      "donutColor": "hsl(104, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 123,
      "hot dogColor": "hsl(173, 70%, 50%)",
      "burger": 116,
      "burgerColor": "hsl(141, 70%, 50%)",
      "sandwich": 67,
      "sandwichColor": "hsl(295, 70%, 50%)",
      "kebab": 96,
      "kebabColor": "hsl(251, 70%, 50%)",
      "fries": 179,
      "friesColor": "hsl(256, 70%, 50%)",
      "donut": 3,
      "donutColor": "hsl(301, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 160,
      "hot dogColor": "hsl(185, 70%, 50%)",
      "burger": 43,
      "burgerColor": "hsl(206, 70%, 50%)",
      "sandwich": 66,
      "sandwichColor": "hsl(196, 70%, 50%)",
      "kebab": 18,
      "kebabColor": "hsl(223, 70%, 50%)",
      "fries": 128,
      "friesColor": "hsl(135, 70%, 50%)",
      "donut": 71,
      "donutColor": "hsl(156, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 124,
      "hot dogColor": "hsl(241, 70%, 50%)",
      "burger": 34,
      "burgerColor": "hsl(2, 70%, 50%)",
      "sandwich": 119,
      "sandwichColor": "hsl(2, 70%, 50%)",
      "kebab": 199,
      "kebabColor": "hsl(94, 70%, 50%)",
      "fries": 128,
      "friesColor": "hsl(306, 70%, 50%)",
      "donut": 14,
      "donutColor": "hsl(325, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 156,
      "hot dogColor": "hsl(203, 70%, 50%)",
      "burger": 193,
      "burgerColor": "hsl(6, 70%, 50%)",
      "sandwich": 179,
      "sandwichColor": "hsl(193, 70%, 50%)",
      "kebab": 66,
      "kebabColor": "hsl(328, 70%, 50%)",
      "fries": 129,
      "friesColor": "hsl(206, 70%, 50%)",
      "donut": 46,
      "donutColor": "hsl(20, 70%, 50%)"
    }
  ]

  return (
    <Styles.CardContainer>
      <ResponsiveBar
        data={data}
        keys={[
          'hot dog',
          'burger',
          'sandwich',
          'kebab',
          'fries',
          'donut'
        ]}
        indexBy="country"
        margin={{top: 50, right: 130, bottom: 50, left: 60}}
        padding={0.3}
        valueScale={{type: 'linear'}}
        indexScale={{type: 'band', round: true}}
        colors={{scheme: 'nivo'}}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: 'fries'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'sandwich'
            },
            id: 'lines'
          }
        ]}
        borderColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              1.6
            ]
          ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'country',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'food',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              1.6
            ]
          ]
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function (e) {
          return e.id + ": " + e.formattedValue + " in country: " + e.indexValue
        }}
      />
    </Styles.CardContainer>
  )
}

