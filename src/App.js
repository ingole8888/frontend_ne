import React from 'react';
import Dashboard from './components/Dashboard';
import AddInvoice from './components/AddInvoice';
import {  Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/"  component={Dashboard} />
        <Route path="/addinvoice" component={AddInvoice} />
    </Routes>
    </>
  );
}
export default App;