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
  Menu,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import axios from '@/libs/axios';
import { Controller, useForm } from 'react-hook-form';
import * as Styles from './index.styles';
import { SleepEvolutionChart } from '@/components/GraphCard/SleepEvolutionChartCard/SleepEvolutionChart';
import { MetricsCard } from '@/components/MetricsCard/MetricsCard';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { MyResponsiveBar } from '@/components/GraphCard/WeighEvolutionChartCard/WeightEvolutionChartCard';
import { Box } from '@mui/system';
import { LoadingButton } from '@mui/lab';

export const AddData = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [me, setMe] = useState<{
    '@id': string;
    '@type': string;
    id: number;
    email: String;
  }>();
  const [data, setData] = useState<{
    '@id': string;
    '@type': string;
    dataType: string;
    date: string;
    value: number;
    user: string;
  }>();
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
      .get('/me')
      .then(({ data }) => {
        setMe(data);
      })
      .then(() => {
        if (!me) return handleClose();
        axios
          .get(`/users/${me.id}/data`)
          .then(({ data }) => {
            setData(data);
          })
          .catch((err) => handleClose());
      })
      .catch((err) => handleClose());
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

  const onSubmit = ({
    date,
    value,
    dataType,
  }: {
    date: string;
    value: number;
    dataType: number;
  }) => {
    return new Promise((resolve) => {
      if (!me) return resolve('no user !');
      axios
        .post('/data', {
          date,
          value: Number(value),
          dataType: `/data_types/${dataType}`,
          user: `/users/${me.id}`,
        })
        .then(({ data }) => {
          resolve('auth success !');
          handleClose();
          setOpenSnackbar(true);
        })
        .catch((err) => {
          resolve(err);
        });
    });
  };

  const MetricsValue = [
    {
      title: 'temps de sommeil',
      value: 7.5,
      unit: 'h',
    },
    {
      title: 'Qualité du sommeil',
      value: 95,
      unit: '%',
    },
    {
      title: 'Masse corporelle',
      value: 80,
      unit: 'kg',
    },
    {
      title: 'Tour de taille',
      value: 75,
      unit: 'cm',
    },
  ];

  return (
    <Styles.FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Styles.HeaderContainer>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Ajouter une donnée
        </Button>

        <PopupState
          variant="popover"
          popupId="demo-popup-menu"
          disableAutoFocus
        >
          {(popupState) => (
            <>
              <Button variant="contained" {...bindTrigger(popupState)}>
                Dashboard
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>Profile</MenuItem>
                <MenuItem onClick={popupState.close}>My account</MenuItem>
                <MenuItem onClick={popupState.close}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </PopupState>
      </Styles.HeaderContainer>

      <Styles.MetricsCard>
        {MetricsValue.map((value) => (
          <MetricsCard
            key={value.title}
            title={value.title}
            value={value.value}
            unit={value.unit}
          />
        ))}
      </Styles.MetricsCard>

      <Styles.GraphCard>
        <SleepEvolutionChart />
        <MyResponsiveBar />
      </Styles.GraphCard>

      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              sx={{ width: '100%' }}
              {...register('date', {
                required: true,
              })}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                reset();
                handleClose();
              }}
            >
              Annulé
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
          Donnée ajouté avec success !
        </Alert>
      </Snackbar>
    </Styles.FormContainer>
  );
};
