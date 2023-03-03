import React, { useState } from 'react'
import * as Styles from "./Goals.styles";
import { Button, Typography } from "@mui/material"
import { DataTable } from "@/features/DataGrid/DataGrid"

export const Goals: React.FC = () => {
  const [open, setOpen] = useState(false);
  function createData(
    name: string,
    value: number,
    unit: string,
    begin_at: string,
    end_at: string,
  ) {
    return { name, value, unit, begin_at, end_at };
  }

  const rows = [
    createData('Perte de poids', 85, "Kg", "3 Mars 2023", "3 Juin 2023"),
    createData('Amélioration de la qualité du sommeil', 90, "%", "3 Mars 2023", "3 Mai 2023"),
    createData('Amélioration de la durée du sommeil', 7, "H", "3 Mars 2023", "3 Juin 2023"),
    createData('Régulation de mon IMC', 23, "IMC", "3 Mars 2023", "3 Mai 2023"),
  ];

  return (
    <Styles.Container>
      <br/>
      <br/>
      <Styles.Header>
        <Typography variant="h3" variantMapping={{ h4: 'h1' }} fontWeight="500">
          Goals
        </Typography>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Ajouter un objectif
        </Button>
      </Styles.Header>
      <br/>
      <br/>
      <DataTable />
      { /** <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1600, minHeight: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Titre de l'obectif</TableCell>
              <TableCell align="right">Objectif</TableCell>
              <TableCell align="right">Unité</TableCell>
              <TableCell align="right">Date de début</TableCell>
              <TableCell align="right">Date de fin</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.value}</TableCell>
                <TableCell align="right">{row.unit}</TableCell>
                <TableCell align="right">{row.begin_at}</TableCell>
                <TableCell align="right">{row.end_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>*/}

    </Styles.Container>
  )
}

