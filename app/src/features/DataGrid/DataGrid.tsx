import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Card } from '@mui/material';
import axios from '@/libs/axios';
import { useAuth } from '@/hooks/useAuth';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'description', headerName: 'Description', width: 230 },
  { field: 'value', headerName: 'Value', width: 130 },
  { field: 'unit', headerName: 'Unit', width: 130 },
  { field: 'start_date', headerName: 'Date de début', width: 130 },
  { field: 'end_date', headerName: 'Date de fin', width: 130 },
];

const rows = [
  { id: 1, name: 'Perte de poids', value: 85, unit: 'Kg' },
  {
    id: 2,
    name: 'Amélioration de la qualité du sommeil',
    value: 90,
    unit: '%',
  },
  { id: 3, name: 'Amélioration de la durée du sommeil', value: 7, unit: 'H' },
  { id: 4, name: 'Régulation de mon IMC', value: 23, unit: 'IMC' },
];

export const DataTable = () => {
  const { user } = useAuth();
  const [goals, setGoals] = React.useState<{
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

  React.useEffect(() => {
    if (!user) return;
    axios.get(`/users/${user.id}/goals`).then(({ data }) => {
      setGoals(data);
      console.log(data);
    });
  }, [user]);

  return (
    <Card style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={goals?.['hydra:member'].map((goal) => ({
          id: goal.id,
          name: goal.name,
          description: goal.description,
          value: goal._value,
          unit: goal.data_type.unit.name,
          start_date: goal.start_date,
          end_date: goal.end_date,
        })) ?? []}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Card>
  );
};
