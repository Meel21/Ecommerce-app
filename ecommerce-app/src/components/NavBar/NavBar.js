
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';



function NavBar() {
  return (
    <header className='navbar'>
      <p className="logo">CLOTHING</p>
      <nav>
        <ul>
        <a href="#" src='#'>Inicio</a>
        <a href="#" src='#'>Nosotros</a>
        <a href="#" src="#">Tienda</a>
        </ul>
        <CartWidget />
        </nav>
    </header>
  );
}

export default NavBar;
