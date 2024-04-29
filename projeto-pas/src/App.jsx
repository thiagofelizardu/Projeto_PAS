import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


const App = () => {
  return (


        <Routes>
          <Route path="/sing-up" element={<SingUp />} />
          <Route path="*" element={<Navigate to="/sing-in" replace />} />
        </Routes>

  );
};

export default App
