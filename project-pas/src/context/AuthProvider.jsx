import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [currentPage, setCurrentPage] = useState('/');

  const signUp = (name, email, password) => {
    setIsLoggedIn(true);
    setUserName(name);
    setCurrentPage('/home');
  };

  const signIn = (email, password) => {
    setIsLoggedIn(true);
    setUserName('Usuário Logado');
    setCurrentPage('/home');
  };

  const signOut = () => {
    setIsLoggedIn(false);
    setUserName('');
    setCurrentPage('/');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, signUp, signIn, signOut, currentPage }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
