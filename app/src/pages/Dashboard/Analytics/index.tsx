import { AddData } from '@/features/datas/addData';
import axios from '@/libs/axios';
import { Box, Button } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Analytics() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ m: 8}} />
      <AddData />
      <Box sx={{ m: 8 }} />
    </Container>
  );
}

export default Analytics;
