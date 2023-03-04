import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Card } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'description', headerName: 'Description', width: 230 },
  { field: 'value', headerName: 'Value', width: 130 },
  { field: 'unit', headerName: 'Unit', width: 130 },
  { field: 'start_date', headerName: 'Date de début', width: 130 },
  { field: 'end_date', headerName: 'Date de fin', width: 130 },
];

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
export const DataTable = ({ goals }: Props) => {
  return (
    <Card style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={
          goals?.['hydra:member'].map((goal) => ({
            id: goal.id,
            name: goal.name,
            description: goal.description,
            value: goal._value,
            unit: goal.data_type.unit.name,
            start_date: goal.start_date,
            end_date: goal.end_date,
          })) ?? []
        }
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Card>
  );
};
