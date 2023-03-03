import { AddData } from '@/features/datas/addData';
import { ShowMetrics } from '@/features/datas/showMetrics';
import { AddGoals } from '@/features/goals/addGoals';
import { ShowGoals } from '@/features/goals/showGoals';
import axios from '@/libs/axios';
import { Box, Button, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Analytics() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ m: 8 }} />
      <Stack direction="row" justifyContent="space-between">
        <AddData />

        <AddGoals />

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
                <MenuItem
                  onClick={popupState.close}
                  component={Link}
                  to="/dashboard"
                >
                  Dashboard
                </MenuItem>
                <MenuItem
                  onClick={popupState.close}
                  component={Link}
                  to="/dashboard/my-profile"
                >
                  My account
                </MenuItem>
                <MenuItem onClick={popupState.close} component={Link} to="">
                  Logout
                </MenuItem>
              </Menu>
            </>
          )}
        </PopupState>
      </Stack>

      <Box sx={{ m: 8 }} />

      <Typography variant='h5'>Objectifs</Typography>
      <Box sx={{ m: 2 }} />
      <ShowGoals />

      <Box sx={{ m: 8 }} />

      <Typography variant='h5'>Données</Typography>
      <Box sx={{ m: 2 }} />
      <ShowMetrics date_start={new Date()} date_end={new Date()} />

      <Box sx={{ m: 8 }} />
    </Container>
  );
}

export default Analytics;
