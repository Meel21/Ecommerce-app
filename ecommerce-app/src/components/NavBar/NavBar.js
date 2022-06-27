
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';



function NavBar() {
  return (
    <header className='navbar'>
      <p className="logo">CLOTHING</p>
      <nav>
        <ul>
        <a className='nav-ul' href="#" src='#'>Inicio</a>
        <a className='nav-ul' href="#" src='#'>Nosotros</a>
        <a className='nav-ul' href="#" src="#">Tienda</a>
        </ul>
        <div> 
          <CartWidget />
        </div>
        </nav>
    </header>
  );
}

export default NavBar;
