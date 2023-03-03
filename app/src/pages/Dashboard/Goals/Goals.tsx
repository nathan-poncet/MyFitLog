import React, { useState } from 'react';
import * as Styles from './Goals.styles';
import { Button, Typography } from '@mui/material';
import { DataTable } from '@/features/DataGrid/DataGrid';
import { AddGoals } from '@/features/goals/addGoals';

export const Goals: React.FC = () => {
  const [open, setOpen] = useState(false);
  function createData(
    name: string,
    value: number,
    unit: string,
    begin_at: string,
    end_at: string
  ) {
    return { name, value, unit, begin_at, end_at };
  }

  const rows = [
    createData('Perte de poids', 85, 'Kg', '3 Mars 2023', '3 Juin 2023'),
    createData(
      'Amélioration de la qualité du sommeil',
      90,
      '%',
      '3 Mars 2023',
      '3 Mai 2023'
    ),
    createData(
      'Amélioration de la durée du sommeil',
      7,
      'H',
      '3 Mars 2023',
      '3 Juin 2023'
    ),
    createData('Régulation de mon IMC', 23, 'IMC', '3 Mars 2023', '3 Mai 2023'),
  ];

  return (
    <Styles.Container>
      <br />
      <br />
      <Styles.Header>
        <Typography variant="h3" variantMapping={{ h4: 'h1' }} fontWeight="500">
          Goals
        </Typography>
        <AddGoals />
      </Styles.Header>
      <br />
      <br />
      <DataTable />
    </Styles.Container>
  );
};
