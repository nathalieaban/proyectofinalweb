import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import BarraNavegacion from './BarraNavegacion.jsx';
import BarraTitulo from './BarraTitulo.jsx';
import Pie from './Pie.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App></App>
   <Pie></Pie> 
  </StrictMode>,
)
