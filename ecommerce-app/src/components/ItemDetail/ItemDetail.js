import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import React ,{ useState } from 'react';
import { useCartContext } from '../../context/CartContext' ;
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


 export const ItemDetail = ({data}) => {

    const [goToCart,setGoToCart] =useState (false);
    const {addProduct} = useCartContext ();
    
    const onAdd = (quantity) => {
      setGoToCart (true);
      addProduct(data,quantity);
    }
    
 return (

  <Card style={{ width: '40%',margin: "auto",border:"1px solid" }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
         {data.description}
        </Card.Text>
      </Card.Body>

      {
            goToCart
            ? <Link to='/cart'> Terminar compra </Link>
            :<ItemCount initial= {0} stock= {8} onAdd={onAdd} />

        }
    </Card>
  ); }


export default ItemDetail;