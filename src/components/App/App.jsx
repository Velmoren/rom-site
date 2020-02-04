import React from 'react';
import Header from '../Header'
import Footer from '../Footer'
import { BrowserRouter } from "react-router-dom";


// STYLE
import './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <Header />

      < Footer />
    </BrowserRouter>
  );
}

export default App;
