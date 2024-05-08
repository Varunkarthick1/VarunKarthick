import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="#home-section" element={<slide01 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
