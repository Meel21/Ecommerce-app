import './Item.css'

function Item ({product,nombre,price,img}){
    return (
        <div className='card'>
            <h4>{product}</h4>
            <img src={img} alt= {nombre}></img>
            <div className='card-body'>
                <h5> {nombre}</h5>
            <p>{price}</p>
            <button>Ver detalle de producto</button>
            </div>
          
    
        </div>
    )};

    export default Item;