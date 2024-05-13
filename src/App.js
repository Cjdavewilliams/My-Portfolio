import React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/projects';
import Skills from './components/Skills/skills';
import Contact from './components/Contact/contact';
import CV from './components/CV/Cv';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element ={<Projects />} />
      <Route path="/Skills" element= {<Skills/>} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/CV/*" element={<CV />} />
      
    </Routes>
  )
}

export default App;