import { AddData } from '@/features/datas/addData';
import { ShowMetrics } from '@/features/datas/showMetrics';
import { AddGoals } from '@/features/goals/addGoals';
import { ShowGoals } from '@/features/goals/showGoals';
import { useAuth } from '@/hooks/useAuth';
import axios from '@/libs/axios';
import { Box, Button, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Analytics() {
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
  const [goals, setGoals] = useState<{
    '@context': string;
    '@id': string;
    '@type': string;
    'hydra:member': {
      '@id': string;
      '@type': string;
      id: number;
      data_type: {
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
      _value: number;
      name: string;
      description: string;
      start_date: string;
      end_date: string;
    }[];
    'hydra:totalItems': number;
  }>();

  const fetchData = () => {
    if (!user) return;
    axios.get(`/users/${user.id}/data`).then(({ data }) => {
      setData(data);
    });
  };

  const fetchGoals = () => {
    if (!user) return;
    axios.get(`/users/${user.id}/goals`).then(({ data }) => {
      setGoals(data);
    });
  };

  useEffect(() => {
    fetchData();
    fetchGoals();
  }, [user]);

  return (
    <Container maxWidth="xl">
      <Box sx={{ m: 8 }} />
      <Stack direction="row" spacing={2}>
        <AddData onAddData={fetchData} />

        <AddGoals onAddGoal={fetchGoals} />
      </Stack>

      <Box sx={{ m: 8 }} />

      <Typography variant="h5">Données</Typography>
      <Box sx={{ m: 2 }} />
      {data && (
        <ShowMetrics
          data={data}
          date_start={new Date()}
          date_end={new Date()}
        />
      )}

      <Box sx={{ m: 8 }} />

      <Typography variant="h5">Objectifs</Typography>
      <Box sx={{ m: 2 }} />
      {goals && <ShowGoals goals={goals} />}

      <Box sx={{ m: 8 }} />
    </Container>
  );
}

export default Analytics;
