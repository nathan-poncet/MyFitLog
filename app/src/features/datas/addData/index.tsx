import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import axios from '@/libs/axios';
import { Controller, useForm } from 'react-hook-form';
import { Box } from '@mui/system';

export const AddData = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [categories, setCategories] = useState<{
    '@id': String;
    'hydra:member': {
      '@id': string;
      '@type': string;
      id: number;
      name: String;
    }[];
  }>();
  const [dataTypes, setDataTypes] = useState<{
    '@id': String;
    'hydra:member': {
      '@id': string;
      '@type': string;
      category: String;
      id: number;
      unit: String;
      name: String;
    }[];
  }>();
  const [units, setUnits] = useState<{
    '@id': String;
    'hydra:member': {
      '@id': string;
      '@type': string;
      id: number;
      name: string;
      dataTypes: [string];
      unit_type: string;
      unitType: string;
    }[];
  }>();
  const { control, handleSubmit, watch, setValue, register } = useForm<{
    category: number;
    date: string;
    value: number;
    dataType: number;
    user: number;
  }>();
  const selectedCategory = categories?.['hydra:member'].find(
    (item) => item.id === watch('category', categories?.['hydra:member'][0]?.id)
  );
  const dataTypesFiltered = dataTypes?.['hydra:member'].filter(
    (item) => item.category === selectedCategory?.['@id']
  );
  const selectedDataTypes = dataTypes?.['hydra:member'].find(
    (item) => item.id === watch('dataType')
  );
  const selectedUnit = units?.['hydra:member'].find(
    (item) => item['@id'] === selectedDataTypes?.unit
  );

  useEffect(() => {
    if (dataTypesFiltered?.[0]?.id)
      setValue('dataType', dataTypesFiltered[0].id);
  }, [selectedCategory]);

  useEffect(() => {
    axios
      .get('/categories')
      .then(({ data }) => {
        setCategories(data);
      })
      .catch((err) => handleClose());
    axios
      .get('/data_types')
      .then(({ data }) => {
        setDataTypes(data);
      })
      .catch((err) => handleClose());
    axios
      .get('/units')
      .then(({ data }) => {
        setUnits(data);
      })
      .catch((err) => handleClose());
  }, []);

  const onSubmit = ({}: {
    date: string;
    value: number;
    dataType: number;
    user: number;
  }) => {
    return new Promise((resolve, reject) => {});
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Ajouter une donnée
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter une donnée</DialogTitle>
        <DialogContent>
          <br />
          <FormControl fullWidth>
            <InputLabel id="category-select-label">Category</InputLabel>
            <Controller
              name="category"
              control={control}
              defaultValue={categories?.['hydra:member'][0].id}
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <Select
                  labelId="category-select-label"
                  id="category-select"
                  label="Category"
                  ref={ref}
                  value={value}
                  onChange={(data) => {
                    onChange(data.target.value);
                  }}
                  required
                >
                  {categories?.['hydra:member'].map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>

          <Box sx={{ m: 4 }} />

          <FormControl fullWidth>
            <InputLabel id="dataType-select-label">Donnée</InputLabel>
            <Controller
              name="dataType"
              control={control}
              defaultValue={dataTypesFiltered?.[0]?.id}
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <Select
                  labelId="dataType-select-label"
                  id="dataType-select"
                  label="dataType"
                  ref={ref}
                  value={value}
                  onChange={(data) => onChange(data.target.value)}
                  required
                >
                  {dataTypesFiltered?.map((dataType) => (
                    <MenuItem key={dataType.id} value={dataType.id}>
                      {dataType.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>

          <Box sx={{ m: 4 }} />

          <TextField
            label="value"
            placeholder="0"
            type="number"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  {selectedUnit?.name}
                </InputAdornment>
              ),
            }}
            {...register('value', {
              required: true,
            })}
          />

          <Box sx={{ m: 4 }} />

          <TextField
            label="Date"
            type="datetime-local"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{width: "100%"}}
            {...register('date', {
              required: true,
            })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annulé</Button>
          <Button onClick={handleClose}>Ajouter</Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};
