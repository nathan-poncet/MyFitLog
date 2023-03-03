import { SleepEvolutionChart } from '@/components/GraphCard/SleepEvolutionChartCard/SleepEvolutionChart';
import { ResponsiveLine } from '@nivo/line';
import { MyResponsiveBar } from '@/components/GraphCard/WeighEvolutionChartCard/WeightEvolutionChartCard';
import { MetricsCard } from '@/components/MetricsCard/MetricsCard';
import { useAuth } from '@/hooks/useAuth';
import axios from '@/libs/axios';
import { Box } from '@mui/system';
import _, { round } from 'lodash';
import { useEffect, useState } from 'react';
import { Card } from '@mui/material';

type Props = {
  date_start: Date;
  date_end: Date;
};
export const ShowMetrics = ({ date_start, date_end }: Props) => {
  const { user } = useAuth();
  const [data, setData] = useState<{
    '@context': string;
    '@id': string;
    '@type': string;
    'hydra:member': {
      '@id': string;
      '@type': string;
      id: number;
      dataType: {
        '@id': string;
        '@type': string;
        id: number;
        name: string;
        unit: {
          '@id': string;
          '@type': string;
          id: number;
          name: string;
        };
      };
      date: string;
      _value: number;
    }[];
    'hydra:totalItems': number;
  }>();

  const filteredData = _.groupBy(
    data?.['hydra:member'],
    (data) => data.dataType.id
  );

  useEffect(() => {
    if (!user) return;
    axios.get(`/users/${user.id}/data`).then(({ data }) => {
      setData(data);
    });
  }, [user]);

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={4}
      >
        {Object.values(filteredData).map((value) => {
          return (
            <MetricsCard
              key={value[0].dataType.name}
              title={value[0].dataType.name}
              value={round(
                value.reduce((a, b) => {
                  return a + b._value;
                }, 0) / value.length
              )}
              unit={value[0].dataType.unit.name}
            />
          );
        })}
      </Box>

      <Box sx={{ m: 4 }} />

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={4}
      >
        {Object.values(filteredData)?.map((items) => (
          <Card sx={{ height: '400px', width: '100%', display: 'flex' }}>
            <ResponsiveLine
              data={[
                {
                  id: items[0].dataType.name,
                  color: `#${Math.floor(Math.random() * 16777215).toString(
                    16
                  )}`,
                  data: items
                    .sort(
                      (a, b) =>
                        new Date(a.date).getTime() - new Date(b.date).getTime()
                    )
                    .map((item) => {
                      return {
                        x: `${new Date(item.date).getDate()} / ${new Date(
                          item.date
                        ).getMonth()} / ${new Date(item.date).getFullYear()}`,
                        y: item._value,
                      };
                    }),
                },
              ]}
              curve="natural"
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: 'point' }}
              yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false,
              }}
              yFormat=" >-.2f"
              pointSize={10}
              pointColor={{ theme: 'background' }}
              pointBorderWidth={2}
              pointBorderColor={{ from: 'serieColor' }}
              pointLabelYOffset={-12}
              useMesh={true}
              legends={[
                {
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: 'left-to-right',
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: 'circle',
                  symbolBorderColor: 'rgba(0, 0, 0, .5)',
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemBackground: 'rgba(0, 0, 0, .03)',
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          </Card>
        ))}
      </Box>
    </>
  );
};
