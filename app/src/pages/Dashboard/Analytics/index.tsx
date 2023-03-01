import axios from '@/libs/axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Analytics() {
  const navigate = useNavigate();
  const isLoggin = localStorage.getItem('authToken');
  if (!isLoggin) navigate('/');
  
  useEffect(() => {
    axios
      .get('/users')
      .then((res) => res.data)
      .then(console.log);
  }, []);
  return <></>;
}

export default Analytics;
