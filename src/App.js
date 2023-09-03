import React from 'react'
import './App.css';
import Header from './components/Header';
import { Main } from './components/Main';
import Services from './components/Services';
import Clients from './components/Clients';
import Aboutus from './components/Aboutus'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Header/>

    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/clients" element={<Clients />} />
          <Route exact path="/about" element={<Aboutus />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
