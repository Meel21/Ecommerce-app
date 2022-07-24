import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './CartItem.css'

const CartItem = ({product}) => {
 const {removeProduct} = useCartContext ();
        return (
            <div className='cartItem'>
                <img src={product.image} alt={product.title} />
                <div>
                <p> Titulo: {product.title}</p>
                <p>Precio: {product.precio}</p>
                <p> Subtotal: ${product.quantity * product.precio}</p>    
                <button onClick={() => removeProduct (product.id)} >Eliminar </button>
          
                    
                </div>              
            </div>
        )




}

export default CartItem;

