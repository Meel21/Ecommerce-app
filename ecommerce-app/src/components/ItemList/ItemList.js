import React from 'react'
import Item from '../Item/Item'

export const ItemList = ({listProducts}) => {

console.log= ('listProducts',listProducts)

return (
 <div className='container'>
    <div className='row justify-content-evely'>
        {listProducts.map ((oneProduct) => <Item key={oneProduct.id} nombre={oneProduct.nombre} img={oneProduct.img} price={oneProduct.precio} />)}
    </div>
 </div>

)
}