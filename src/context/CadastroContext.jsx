import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CadastroContext = createContext();

export const useCadastro = () => {
  return useContext(CadastroContext);
};

export const CadastroProvider = ({ children }) => {
  const [cadastro, setCadastro] = useState([]);

  const addCadastro = (newCadastro) => {
    const id = uuidv4();
    const novoCadastro = { ...newCadastro, id };
    setCadastro([...cadastro, novoCadastro]);
  };

  return (
    <CadastroContext.Provider value={{ cadastro, addCadastro }}>
      {children}
    </CadastroContext.Provider>
  );
};

export default CadastroContext;
