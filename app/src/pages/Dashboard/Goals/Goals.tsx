import React, { useEffect, useState } from 'react';
import * as Styles from './Goals.styles';
import { Button, Typography } from '@mui/material';
import { DataTable } from '@/features/DataGrid/DataGrid';
import { AddGoals } from '@/features/goals/addGoals';
import axios from '@/libs/axios';
import { useAuth } from '@/hooks/useAuth';

export const Goals = () => {
  const { user } = useAuth();
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

  const fetchGoals = () => {
    if (!user) return;
    axios.get(`/users/${user.id}/goals`).then(({ data }) => {
      setGoals(data);
    });
  };

  useEffect(() => {
    fetchGoals();
  }, [user]);

  return (
    <Styles.Container>
      <br />
      <br />
      <Styles.Header>
        <Typography variant="h3" variantMapping={{ h4: 'h1' }} fontWeight="500">
          Goals
        </Typography>
        <AddGoals onAddGoal={fetchGoals}/>
      </Styles.Header>
      <br />
      <br />
      {goals && <DataTable goals={goals} />}
    </Styles.Container>
  );
};
