
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import {Link} from 'react-router-dom'



function NavBar() {
  return (
    <header className='navbar'>
      <p className="logo">CLOTHING</p>
      <nav>
        <ul>
        <NavLink activeClassName='active' className='nav-ul' to="/Inicio" src='#'>Inicio</NavLink>
        <NavLink activeClassName='active' className='nav-ul' to="/Nosotros" src='#'>Nosotros</NavLink>
        <NavLink activeClassName='active' className='nav-ul' to="/Tienda" src="#">Tienda</NavLink>
        </ul>
        <div> 
          <CartWidget />
        </div>
        </nav>
    </header>
  );
}

export default NavBar;
