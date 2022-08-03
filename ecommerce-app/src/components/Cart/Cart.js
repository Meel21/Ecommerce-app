import React from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import Button from 'react-bootstrap/Button'

const Cart = ()  => {
    const {cart,totalPrice} = useCartContext ();

    const order = {
        buyer : {
            name:'Melina',
            email: 'melina@gmail.com',
            phone: '11555555'
        },
        items: cart.map(product => ({id: product.id, title:product.title, price: product.price,quantity: product.quantity})),
        total: totalPrice()
    };

const handleClick = () => {

    const db = getFirestore ();
    const ordersCollection = collection(db,'orders');
    addDoc(ordersCollection,order)
    .then (({id}) => console.log (id))
}
    if (cart.length === 0){
        return(
            <>
            <p> No hay elementos </p>
            <Link to='/'> <Button>Ir a tienda</Button></Link>
            </>
        )


    }
    return(
        <>
        {
            cart.map(product => <CartItem key={product.id} product={product} />)
        }
        <p>
            Total: ${totalPrice()}
        </p>
        <button onClick={handleClick}>Realizar Compra</button>
        </>
    )
}
export default Cart;