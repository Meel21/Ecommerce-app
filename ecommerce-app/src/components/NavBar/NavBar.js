
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import {NavLink} from 'react-router-dom'



function NavBar() {
  return (
    <header className='navbar'>
      <NavLink className="logo" to='/'>CLOTHING</NavLink>
      <nav>
        <ul>
        <NavLink  className='nav-ul' to="/categoria/mujer" href='#'>Mujer</NavLink>
        <NavLink  className='nav-ul' to="/categoria/hombres" href='#'>Hombres</NavLink>
        <NavLink  className='nav-ul' to="/categoria/niños" href='#'>Niños</NavLink>
        </ul>
        <div> 
          <NavLink className='nav_link' to='cart'>
          <CartWidget />
          </NavLink>
        </div>
        </nav>
    </header>
  );
}

export default NavBar;
