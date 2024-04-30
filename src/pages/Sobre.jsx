import React from 'react';
import { useAuth } from '../context/AuthProvider';

const Sobre = () => {
  const { userName } = useAuth();

  return (
    <div>
      <h2>Sobre PAge</h2>
    </div>
  );
};

export default Sobre;
