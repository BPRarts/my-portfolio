import './App.css';
import React from 'react';
import Nav from './Components/Nav';
import {BrowserRouter} from 'react-router-dom';
import Hero from './Components/Hero';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Nav/>
      <Hero/>
      </BrowserRouter>
    </div>
  );
}

export default App;
