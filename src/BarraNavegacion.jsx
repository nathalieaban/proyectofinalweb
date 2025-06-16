import React from 'react'
import { Link } from 'react-router-dom';


function BarraNavegacion(args) {


    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <h2>SERGIO EL BAILADOR</h2>
                <h3>Nathalie Aban</h3>
            </div>
            <ul className='navbar-links'>
               
                <li><Link to="/about">INICIO</Link></li>
                <li><Link to="/contact">Oferta de cursos</Link></li>
                 <li><Link to="/galery">Galeria</Link></li>
            </ul>
        </nav>
        
    )
}

export default BarraNavegacion
