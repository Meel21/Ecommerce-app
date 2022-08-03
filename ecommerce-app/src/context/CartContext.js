import {useState,useContext,createContext} from 'react';
const CartContext = createContext ();

export const useCartContext = () =>  useContext (CartContext); 


export const CartProvider = ({children})=> {
    const [cart,setCart] = useState ([]); 


    const addProduct = (item,quantity) => {
   if (isInCart (item.id)) {
    setCart (cart.map (product => {
        return product.id === item.id ? {...product,quantity: product.quantity + quantity} : product
    }))
    } else {
        setCart ([...cart, {...item,quantity}]);
    }
    }

    const totalPrice = () => {
        return cart.reduce((acc,item) => acc = acc + ( item.quantity * item.precio),0);
    }

    const totalProducts = () => {
        return cart.reduce((acc,item) => acc + item.quantity,0);
         }
    

    const clearCart = () => setCart ([])
    
    const isInCart = (id) => cart.find (product => product.id === id) ? true : false;
    
    const removeProduct= (id) => setCart(cart.filter (product => product.id !== id));
    
    

    return (
       <CartContext.Provider value ={{

        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart
       }}>
        {children}
       </CartContext.Provider>
    )


}

export default CartProvider 