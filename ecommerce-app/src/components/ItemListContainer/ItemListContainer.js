import React, {useEffect,useState} from 'react';
import { getFirestore, collection, getDocs,query,where} from 'firebase/firestore';
import {useParams} from 'react-router-dom'
import Title from '../Title';
import  ItemList  from '../ItemList/ItemList';


export const ItemListContainer = ({texto}) => {
const [info,setInfo ]=useState ([]);

const {categoriaId}= useParams();

useEffect (()=> {

    const querydb = getFirestore();
    const queryCollection = collection (querydb,'productos');

    if (categoriaId){
    const queryFilter = query(queryCollection,where ('categoria','==',categoriaId))
    getDocs (queryFilter)
    .then (res => setInfo (res.docs.map (product => ({id: product.id,...product.data () }))))
   } else {
    getDocs (queryCollection)
    .then (res => setInfo (res.docs.map (product => ({id : product.id, ...product.data () }))))
   }  

},[categoriaId])



return (
<>
 <Title texto={texto} />
 <ItemList info = {info}/>


</>
);


    
}
    

export default ItemListContainer;