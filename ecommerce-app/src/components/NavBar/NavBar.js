
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import {NavLink} from 'react-router-dom'



function NavBar() {
  return (
    <header className='navbar'>
      <p className="logo" to='/'>CLOTHING</p>
      <nav>
        <ul>
        <NavLink  className='nav-ul' to="/categoria/mujer">Mujer</NavLink>
        <NavLink  className='nav-ul' to="/categoria/hombres">Hombres</NavLink>
        <NavLink  className='nav-ul' to="/categoria/niños">Niños</NavLink>
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
