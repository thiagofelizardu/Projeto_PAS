// App.js
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import SignUp from './pages/signs/SignUp';
import SignIn from './pages/signs/SignIn';
import ThemeProvider  from './theme';
import AuthProvider from './context/AuthProvider';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Sobre from './pages/Sobre';
import Inside from './pages/Inside';
import Profile from './pages/Profile';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Page404 from './pages/Page404';

function PrivateRoute({ path, element }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/sign-in" replace />
  );
}

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className='bodyApp'>
          <NavBar />
          <Routes>
            <PrivateRoute path="/profile" element={<Profile/>} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/inside" element={<Inside />} />
            <Route path="/Page404" element={<Page404 />} />
            <Route path="*" element={<Navigate to="/Page404" replace />} />
          </Routes>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
