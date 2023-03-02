import { DatePicker } from '@mui/lab';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import axios from '@/libs/axios';

export const AddData = () => {
  const [dataType, setDataType] = useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Dayjs | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get('/data_types')
      .then(({ data }) => setDataType(data))
      .catch((err) => handleClose());
  }, []);

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Ajouter une donnée
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter une donnée</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annulé</Button>
          <Button onClick={handleClose}>Ajouter</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
