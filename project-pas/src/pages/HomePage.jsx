import React from 'react';
import { useAuth } from '../context/AuthProvider';

const HomePage = () => {
  const { userName } = useAuth();

  return (
    <div>
      <h1>Olá, {userName}!</h1>
      <hr/>
    </div>
  );
};

export default HomePage;
