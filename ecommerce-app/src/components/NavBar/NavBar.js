
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import {Link} from 'react-router-dom'



function NavBar() {
  return (
    <header className='navbar'>
      <p className="logo">CLOTHING</p>
      <nav>
        <ul>
        <a activeClassName='active' className='nav-ul' to="/Inicio" src='#'>Inicio</a>
        <a activeClassName='active' className='nav-ul' to="/Nosotros" src='#'>Nosotros</a>
        <a activeClassName='active' className='nav-ul' to="/Tienda" src="#">Tienda</a>
        </ul>
        <div> 
          <CartWidget />
        </div>
        </nav>
    </header>
  );
}

export default NavBar;
