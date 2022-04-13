import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Start from './Pages/Start/Start';
import Registration from './Pages/Registration/Registration';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path="/user" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
