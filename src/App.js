import './index.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Employee from './components/Employee';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Customers from './pages/Customers';
import Definition from './pages/Definition';
import Dictionary from './pages/Dictionary';
import Employees from './pages/Employees';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="dictionary/:search" element={<Definition />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
