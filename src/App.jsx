import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container } from '@mui/material';

import SignUp from './pages/signs/SignUp';
import SignIn from './pages/signs/SignIn';
import  ThemeProvider  from './theme';
import AuthProvider from './context/AuthProvider';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Sobre from './pages/Sobre';
import Inside from './pages/Inside';
import Profile from './pages/Profile';


const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
      <div className='bodyApp'>
        <NavBar />
        <Routes>
         <Route path="/profile" element={<Profile />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/inside" element={<Inside />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
