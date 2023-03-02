import axios from '@/libs/axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Analytics() {
  useEffect(() => {
    axios
      .get('/users')
      .then((res) => res.data)
      .then(console.log);
  }, []);
  return <></>;
}

export default Analytics;
