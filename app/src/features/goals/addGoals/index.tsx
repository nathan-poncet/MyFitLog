import {
  Alert,
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
  Snackbar,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import axios from '@/libs/axios';
import { Controller, useForm } from 'react-hook-form';
import { Box } from '@mui/system';
import { LoadingButton } from '@mui/lab';
import { useAuth } from '@/hooks/useAuth';

type Props = {
  onAddGoal: () => void;
};
export const AddGoals = ({onAddGoal}: Props) => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

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
      unit: {
        id: string;
        name: string;
      };
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
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<{
    category: number;
    dataType: number;
    value: number;
    startDate: string;
    endDate: string;
    name: string;
    description: string;
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
  }, [user]);

  const onSubmit = ({
    dataType,
    value,
    startDate,
    endDate,
    name,
    description,
  }: {
    category: number;
    dataType: number;
    value: number;
    startDate: string;
    endDate: string;
    name: string;
    description: string;
  }) => {
    return new Promise((resolve) => {
      if (!user) return resolve('no user !');
      axios
        .post('/goals', {
          dataType: `/data_types/${dataType}`,
          value: Number(value),
          user: `/users/${user.id}`,
          name,
          description,
          startDate,
          endDate,
        })
        .then(({ data }) => {
          resolve('auth success !');
          handleClose();
          setOpenSnackbar(true);
          onAddGoal();
        })
        .catch((err) => {
          resolve(err);
        });
    });
  };

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Ajouter un Objectif
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Ajouter un Objectif</DialogTitle>
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
              <InputLabel id="dataType-select-label">Donn??e</InputLabel>
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
                    {selectedDataTypes?.unit?.name}
                  </InputAdornment>
                ),
              }}
              {...register('value', {
                required: true,
              })}
            />

            <Box sx={{ m: 4 }} />

            <TextField
              label="Nom"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ width: '100%' }}
              {...register('name', {
                required: true,
              })}
            />

            <Box sx={{ m: 4 }} />

            <TextField
              label="Description"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ width: '100%' }}
              {...register('description', {
                required: true,
              })}
            />

            <Box sx={{ m: 4 }} />

            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="Date de d??but"
                type="datetime-local"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ width: '100%' }}
                {...register('startDate', {
                  required: true,
                })}
              />

              <TextField
                label="Date de fin"
                type="datetime-local"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ width: '100%' }}
                {...register('endDate', {
                  required: true,
                })}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                reset();
                handleClose();
              }}
            >
              Annul??
            </Button>
            <LoadingButton type="submit" loading={isSubmitting}>
              Ajouter
            </LoadingButton>
          </DialogActions>
        </form>
      </Dialog>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Donn??e ajout?? avec success !
        </Alert>
      </Snackbar>
    </>
  );
};
