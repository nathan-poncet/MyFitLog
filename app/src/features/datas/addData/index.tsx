import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Dayjs } from 'dayjs';
import axios from '@/libs/axios';
import { Controller, useForm } from 'react-hook-form';

export const AddData = () => {
  const [categories, setCategories] = useState<{
    '@context': string;
    '@id': String;
    '@type': 'hydra:Collection';
    'hydra:member': {
      '@id': string;
      '@type': string;
      category: String;
      id: number;
      unit: String;
      name: String;
    }[];
    'hydra:totalItems': number;
  }>();
  const [dataTypes, setDataTypes] = useState<{
    '@context': string;
    '@id': String;
    '@type': 'hydra:Collection';
    'hydra:member': {
      '@id': string;
      '@type': string;
      category: String;
      id: number;
      unit: String;
      name: String;
    }[];
    'hydra:totalItems': number;
  }>();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Dayjs | null>(null);
  const { control, handleSubmit } = useForm<{
    category: number;
    date: string;
    value: number;
    dataType: number;
    user: number;
  }>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        console.log(data);
        
        setDataTypes(data);
      })
      .catch((err) => handleClose());
  }, []);

  const onSubmit = ({}: {
    date: string;
    value: number;
    dataType: number;
    user: number;
  }) => {
    return new Promise((resolve, reject) => {
      console.log(value);
    });
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
                  value={
                    categories?.['hydra:member'].find(
                      (category) => category.id === value
                    )?.id
                  }
                  onChange={(data) => onChange(data.target.value)}
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
          <br />
          <FormControl fullWidth>
            <InputLabel id="category-select-label">Category</InputLabel>
            <Controller
              name="dataType"
              control={control}
              defaultValue={dataTypes?.['hydra:member'][0].id}
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <Select
                  labelId="category-select-label"
                  id="category-select"
                  label="Category"
                  ref={ref}
                  value={
                    categories?.['hydra:member'].find(
                      (category) => category.id === value
                    )?.id
                  }
                  onChange={(data) => onChange(data.target.value)}
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annulé</Button>
          <Button onClick={handleClose}>Ajouter</Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};
