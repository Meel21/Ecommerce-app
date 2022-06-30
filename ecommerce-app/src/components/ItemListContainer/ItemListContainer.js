import React from 'react'
import ItemList from '../ItemList/ItemList';
import Title from '../Title'

const ItemListContainer = ({texto}) =>{

    return (
        <Title greeting={texto} />,
        <ItemList/>

    )

}

export default ItemListContainer;