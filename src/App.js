import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom' //si pas de / c'est qu'on va cherché dans notre module!
import Contact from './pages/Contact';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';

import Portefolio from './pages/Portefolio';
import Formation from './pages/Formation';


const App = () => {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/Nicolaswebsite/" exact element={<Home />} />
          <Route path="/Nicolaswebsite/contact" element={<Contact />} />
          <Route path="/Nicolaswebsite/formation" element={<Formation />} />
          <Route path="/Nicolaswebsite/portfolio" element={<Portefolio />} />
          <Route path="/Nicolaswebsite/competences" element={<Knowledges />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};


export default App;

// comm