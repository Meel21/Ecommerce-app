import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import React , {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';


const product = {
id: 1,
image: "https://picsum.photos/id/237/200/300",
categoria:'hombre',
title:"Remera Marley",
description: 'Suave tela de algodon',

}
export const ItemDetailContainer = () =>{
    const [data,setData] = useState ({});
    const params = useParams ()
    useEffect (() => {
        const getData = new Promise (resolve =>{
            setTimeout (()=> {
                resolve (product);
                },2000);

            });
            getData.then (res => setData (res));
            },[params.id])

 return (
        <ItemDetail data= {data} />



 );

}

export default ItemDetailContainer;