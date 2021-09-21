import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Top from './components/Top';
import Routes from './Routes';
import Footer from './components/Footer'

import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Top/>
        <Routes/>
        <Footer/>
      </div>   
    </BrowserRouter>
  );
}

export default App;
