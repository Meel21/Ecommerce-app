import React from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import './CartItem.css'

const CartItem = ({product}) => {
 const {removeProduct} = useCartContext(); 
        return (

   <Table  className='cartItem'>
                <img src={product.image} alt={product.title} 
                width="90px"
                height="90px"/>
                <div>
                <td> Titulo: {product.title}</td>
                <td> Cantidad: {product.quantity} </td>
                <td>Precio: ${product.precio}</td>
                <td> Subtotal: {product.quantity * product.precio}</td>    
                <button onClick={() => removeProduct (product.id)} >Eliminar </button>
          
                    
                </div>              
    </Table>
        )
} 

export default CartItem

