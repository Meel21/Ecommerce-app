import './ItemDetail.css'


export const ItemDetail = ({data}) => {
 return (

    <div className='movie'>
    <div className = "detail">
        <h3>{data.title}</h3>
        <p> {data.description}</p>
        <img src={data.image} alt=""/>

    </div>
    </div>


 );

}

export default ItemDetail;