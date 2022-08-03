
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CartProvider from './context/CartContext'
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
     <NavBar/>
     <CartProvider>
     <Routes>
      <Route path='/' element = {  <ItemListContainer texto ={'Catalogo de Productos'}/>}/>
      <Route path='/categoria/:categoriaId' element = {  <ItemListContainer texto ={'Catalogo de Productos'}/>}/>
      <Route path='/detalle/:detalleId' element ={<ItemDetailContainer />}/>
      <Route path='/cart' element ={< Cart />}/>
     </Routes>
     <Footer/>
   </CartProvider>

     </BrowserRouter>
    </>  
  );
}

export default App;
