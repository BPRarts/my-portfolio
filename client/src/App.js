import './App.css';
import React from 'react';
import Nav from './Components/Nav';
import {BrowserRouter} from 'react-router-dom';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import LanguagesTools from './Components/LanguagesTools';
import About from './Components/About';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Nav/>
      <Hero/>
      <Projects/>
      <LanguagesTools/>
      <About/>
      <Contact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
