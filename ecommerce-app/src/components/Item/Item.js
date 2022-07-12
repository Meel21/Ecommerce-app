import './Item.css'

function Item ({data}){
    return (
        <div className='card'>
            <h4>{data.product}</h4>
            <img className= 'products-img'src={data.image} alt= {data.title} />
            <div className='card-body'>
                <h5> {data.title}</h5>
            <p> ${data.precio}</p>
            <button>Ver detalle de producto</button>
            </div>
          
    
        </div>
    )};

    export default Item;