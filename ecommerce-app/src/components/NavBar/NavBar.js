
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import {NavLink} from 'react-router-dom'



function NavBar() {
  return (
    <header className='navbar'>
      <NavLink className="logo" to='/'>CLOTHING</NavLink>
      <nav>
        <ul>
          <li>
        <NavLink  className='nav-ul' to="/categoria/mujer" >Mujer</NavLink>
        </li>
        <li>
        <NavLink  className='nav-ul' to="/categoria/hombres">Hombres</NavLink>
        </li>
        <li>
        <NavLink  className='nav-ul' to="/categoria/niños">Niños</NavLink>
        </li>
        <li> 
          <NavLink className='nav_link' to='cart'>
          <CartWidget />
          </NavLink>
        </li>
        </ul>
        </nav>
    </header>
  );
}

export default NavBar;
