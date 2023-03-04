import { useAuth } from '@/hooks/useAuth';
import axios from '@/libs/axios';
import { Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';

type Props = {
  goals: {
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
  };
};
export const ShowGoals = ({ goals }: Props) => {
  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" gap={4}>
      {goals?.['hydra:member'].map((goal) => (
        <Box
          key={goal.id}
          sx={{ borderRadius: 2, paddingX: 4, paddingY: 3, background: '#FFF' }}
        >
          <Typography variant="body2" fontWeight={600}>
            {goal.data_type.name}
          </Typography>
          <Typography variant="h6">{goal.name}</Typography>
          <Typography variant="body1">{goal.description}</Typography>
          <Box sx={{ m: 2 }} />
          <Typography variant="body2" fontWeight={700}>
            Objectif: {goal._value} {goal.data_type.unit.name}
          </Typography>
          <Box sx={{ m: 2 }} />
          <Typography variant="body2">
            Début: {new Date(goal.start_date).toDateString()}
          </Typography>
          {goal.end_date && (
            <Typography variant="body2">
              Fin: {new Date(goal.end_date).toDateString()}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
};
