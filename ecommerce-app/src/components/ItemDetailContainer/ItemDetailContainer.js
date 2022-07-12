import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import React , {useState,useEffect} from 'react'


const product = {
id: 1,
image: "http://http2.mlstatic.com/D_NQ_NP_123-MLA456_112021-O.jpg",
title:"Remera Marley",
description: 'Suave tela de algodon',

}
export const ItemDetailContainer = () =>{
    const [data,setData] = useState ({});
    useEffect (() => {
        const getData = new Promise (resolve =>{
            setTimeout (()=> {
                resolve (product);
                },2000);

            });
            getData.then (res => setData (res));
            },[])

 return (
        <ItemDetail data= {data} />



 );

}

export default ItemDetailContainer;