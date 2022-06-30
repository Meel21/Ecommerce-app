import './Item.css'

function Item ({product,price,img}){
    return (
        <div className='card'>
            <h4>{product}</h4>
            <p>{price}</p>
            <img src={img}></img>
            <button>Ver detalle de producto</button>
          
    
        </div>
    )};

    export default Item;