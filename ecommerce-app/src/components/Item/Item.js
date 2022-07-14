import { Link } from 'react-router-dom';
import './Item.css'


function Item ({data}){
  
    return (
        <Link to={`/detalle/${data.id}`} className='card'>
            <h4>{data.product}</h4>
            <img className= 'products-img'src={data.image} alt= {data.title} />
                <p> {data.title}</p>
            <p> ${data.precio}</p>
        
        </Link>
    )};

    export default Item;