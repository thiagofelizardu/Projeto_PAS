import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/signs/SignUp';
import SignIn from './pages/signs/SignIn';
import ThemeProvider from './theme';
import AuthProvider from './context/AuthProvider';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import FooterBar from './components/FooterBar';
import Sobre from './pages/Sobre';
import Inside from './pages/Inside';
import Profile from './pages/Profile';
import Page404 from './pages/Page404';
import RegistrarEspaco from './pages/RegistarEspaco';
import { CadastroProvider } from './context/CadastroContext';

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CadastroProvider>
          <div className='bodyApp'>
            <NavBar />
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/register-espaco" element={<RegistrarEspaco />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/inside/:id" element={<Inside />} />
              <Route path="/page404" element={<Page404 />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
            <FooterBar /> 
          </div>
        </CadastroProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
