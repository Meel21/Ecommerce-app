import React from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';

const Cart = ()  => {
    const {cart,totalPrice} = useCartContext ();

    const order = {
        buyer : {
            name:'Melina',
            email: 'melina@gmail.com',
            phone: '11555555'
        },
        items: [{name: 'Jeans Pails', precio: 200}],
        total: 100000
    };

const handleClick = () => {

    const db= getFirestore ();
    const ordersCollection = collection(db,'orders');
    addDoc(ordersCollection,order).then (({id}) => console.log (id))
}
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
        <button onClick={handleClick}>Realizar Compra</button>
        </>
    )
}
export default Cart;