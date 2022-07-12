import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';


 export const ItemDetail = ({data}) => {

    const [goToCart,setGoToCart] =useState (false);
    
    const onAdd = (quantity) => {
     
      
      setGoToCart (true);
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
            :<ItemCount initial= {4} stock= {8} onAdd={onAdd} />

        }

    </div>
    </div>


 );

}

export default ItemDetail;