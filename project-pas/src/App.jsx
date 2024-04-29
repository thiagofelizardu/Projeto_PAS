import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/signs/SignUp';
import SignIn from './pages/signs/SignIn';
import AuthProvider from './context/AuthProvider';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <AuthProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
    </AuthProvider>
  );
};


export default App
