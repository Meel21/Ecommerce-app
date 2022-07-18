import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import React ,{ useState } from 'react';
import { useCartContext } from '../../context/CartContext' ;
import { Link } from 'react-router-dom';


 export const ItemDetail = ({data}) => {

    const [goToCart,setGoToCart] =useState (false);
    const {addProduct} = useCartContext ();
    
    const onAdd = (quantity) => {
      setGoToCart (true);
      addProduct(data,quantity);
    }
    
 return (

    <div className='movie'>
    <div className = "detail">
    <img src={data.image} alt="" className='detail_image'/>
        <h3>{data.title}</h3>
        <p> {data.description}</p>
        {
            goToCart
            ? <Link to='/cart'> Terminar compra </Link>
            :<ItemCount initial= {0} stock= {8} onAdd={onAdd} />

        }

    </div>
    </div>


 );

}

export default ItemDetail;