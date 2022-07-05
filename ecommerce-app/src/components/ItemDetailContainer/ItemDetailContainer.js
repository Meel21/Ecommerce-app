import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import React , {useState,useEffect} from 'react'


const product = {
id: 1,
image: "https://picsum.photos/id/237/200/300",
title:"Remera Marley",
description: 'Suave tela de algodon',

}
function ItemDetailContainer (){
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