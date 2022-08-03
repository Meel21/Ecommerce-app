import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'

function NavBar() {

  return (

    <Navbar bg="light" expand="lg">
      <Container fluid>
        <NavLink className='navbar' to='/'> CLOTHING </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink  className='navbar'  to="/categoria/hombres" >Hombres </NavLink>
            <NavLink  className='navbar'  to="/categoria/mujer">Mujeres </NavLink>
            <NavLink  className='navbar'  to="/categoria/niños"> Niños </NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;
