import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from  '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


 const CartWidget = ({totalProducts}) => {
 
    return (
      
     <div className='cartWidget'>
      <Link to={'/cart'}>
       <FontAwesomeIcon icon={faCartShopping} />
       <span> {totalProducts} </span>
       </Link>
    </div>
  
  
    );
}


export default CartWidget;