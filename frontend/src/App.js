import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Start from './Pages/Start/Start';
import Registration from './Pages/Registration/Registration';
import TestPage from './Pages/TestPage/TestPage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path="/user" element={<Registration />} />
        <Route path="/tests" element={<TestPage />} />
      </Routes>
    </>
  );
}

export default App;
