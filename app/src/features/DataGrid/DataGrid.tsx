import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Card } from "@mui/material"

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'value', headerName: 'Value', width: 130 },
  { field: 'unit', headerName: 'Unit', width: 130 },
];

const rows = [
  { id: 1, name: 'Perte de poids', value: 85, unit: "Kg" },
  { id: 2, name: 'Amélioration de la qualité du sommeil', value: 90, unit: "%" },
  { id: 3, name: 'Amélioration de la durée du sommeil', value: 7, unit: "H" },
  { id: 4, name: 'Régulation de mon IMC', value: 23, unit: "IMC" },
];

export const DataTable = () => {
  return (
    <Card style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Card>
  );
}
