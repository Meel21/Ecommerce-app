import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';

const Cart = ()  => {
    const {cart,totalPrice} = useCartContext ();

    if (cart.length === 0){
        return(
            <>
            <p> No hay elementos </p>
            <Link to='/'> Ir a tienda</Link>
            </>
        )


    }
    return(
        <>
        {
            cart.map (product => <CartItem key={product.id} product={product} />)
        }
        <p>
            Total: {totalPrice()}
        </p>
        </>
    )
}
export default Cart;