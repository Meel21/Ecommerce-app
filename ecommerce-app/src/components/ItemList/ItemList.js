import React from 'react'
import Item from '../Item/Item'


 const ItemList = ({info = []}) => {

return (
 info.map (product => <Item key = {product.id} data={product} />)

)
}

export default ItemList;