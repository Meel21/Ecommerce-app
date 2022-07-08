import './Item.css'

function Item ({data}){
    return (
        <div className='card'>
            <h4>{data.product}</h4>
            <div>
            <img className= 'products-img'src={data.image} alt= {data.nombre} />
            </div>
            <div className='card-body'>
                <h5> {data.nombre}</h5>
            <p>{data.price}</p>
            <button>Ver detalle de producto</button>
            </div>
          
    
        </div>
    )};

    export default Item;