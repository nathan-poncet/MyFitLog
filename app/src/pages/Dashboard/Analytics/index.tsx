import { AddData } from '@/features/datas/addData';
import { ShowMetrics } from '@/features/datas/showMetrics';
import axios from '@/libs/axios';
import { Box, Button, Menu, MenuItem, Stack } from '@mui/material';
import { Container } from '@mui/system';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Analytics() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ m: 8 }} />
      <Stack direction="row" justifyContent="space-between">
        <AddData />

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
      </Stack>

      <Box sx={{ m: 8 }} />

      <ShowMetrics />

      <Box sx={{ m: 8 }} />
    </Container>
  );
}

export default Analytics;
