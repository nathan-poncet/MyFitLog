import { SleepEvolutionChart } from '@/components/GraphCard/SleepEvolutionChartCard/SleepEvolutionChart';
import { MyResponsiveBar } from '@/components/GraphCard/WeighEvolutionChartCard/WeightEvolutionChartCard';
import { MetricsCard } from '@/components/MetricsCard/MetricsCard';
import { useAuth } from '@/hooks/useAuth';
import axios from '@/libs/axios';
import { Box, Stack } from '@mui/system';
import _, { groupBy, round } from 'lodash';
import { useEffect, useState } from 'react';

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

  // console.log(filteredData);

  useEffect(() => {
    if (!user) return;
    axios.get(`/users/${user.id}/data`).then(({ data }) => {
      setData(data);
    });
  }, [user]);

  const MetricsValue = [
    {
      title: 'temps de sommeil',
      value: 7.5,
      unit: 'h',
    },
    {
      title: 'Qualité du sommeil',
      value: 95,
      unit: '%',
    },
    {
      title: 'Masse corporelle',
      value: 80,
      unit: 'kg',
    },
    {
      title: 'Tour de taille',
      value: 75,
      unit: 'cm',
    },
  ];

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
              value={round(value.reduce((a, b) => {
                return a + b._value;
              }, 0) / value.length)}
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
        <SleepEvolutionChart />
        <MyResponsiveBar />
      </Box>
    </>
  );
};
