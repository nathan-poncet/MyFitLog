import { useAuth } from '@/hooks/useAuth';
import axios from '@/libs/axios';
import { Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';

export const ShowGoals = () => {
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
      startDate: string;
      endDate: string;
    }[];
    'hydra:totalItems': number;
  }>();

  useEffect(() => {
    if (!user) return;
    axios.get(`/users/${user.id}/goals`).then(({ data }) => {
      setGoals(data);
      console.log(data);
    });
  }, [user]);

  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      gap={4}
    >
      {goals?.['hydra:member'].map((goal) => (
        <Card key={goal.id} sx={{ borderRadius: 10, padding: 2 }}>
          <Typography variant="body2" fontWeight={600}>
            {goal.data_type.name}
          </Typography>
          <Typography variant="body2" fontWeight={600}>
            {goal._value} {goal.data_type.unit.name}
          </Typography>
          <Typography variant="h6">{goal.name}</Typography>
          <Typography variant="body2">{goal.description}</Typography>
        </Card>
      ))}
    </Box>
  );
};
