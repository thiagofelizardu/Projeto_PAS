import React, { createContext, useContext, useState } from 'react';

const CadastroContext = createContext();

export const useCadastro = () => {
  return useContext(CadastroContext);
};

export const CadastroProvider = ({ children }) => {
  const [cadastro, setCadastro] = useState([]);

  const addCadastro = (newCadastro) => {
    setCadastro([...cadastro, newCadastro]);
  };

  return (
    <CadastroContext.Provider value={{ cadastro, addCadastro }}>
      {children}
    </CadastroContext.Provider>
  );
};

export default CadastroContext;
