import './index.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Employee from './components/Employee';
import Header from './components/Header';
import Customers from './pages/Customers';
import Employees from './pages/Employees';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/Employees" element={<Employees />} />
          <Route path="/Customers" element={<Customers />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
