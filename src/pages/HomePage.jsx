import React from 'react';
import { useAuth } from '../context/AuthProvider';

const HomePage = () => {
  const { userName } = useAuth();

  return (
    <div>
      <h2>Home Page</h2>
    </div>
  );
};

export default HomePage;
