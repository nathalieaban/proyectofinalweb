import React from 'react';
import BarraNavegacion from './BarraNavegacion';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SobreMe from "./SobreMe"
import Contactos from "./Contactos"
import Galeria from './Galeria'
import Pie from"./Pie"


function App() {
  return (
            <Router>
      <BarraNavegacion />
      <main className="main-content">
        <Routes>
          
          <Route path='/about' element={<SobreMe></SobreMe>}></Route>
          <Route path='/contact' element={<Contactos></Contactos>}></Route>
          <Route path='/galery' element={<Galeria></Galeria>}></Route>
         
          
        </Routes>
      </main>
      
    </Router>
    
    
    
  );
}

export default App;