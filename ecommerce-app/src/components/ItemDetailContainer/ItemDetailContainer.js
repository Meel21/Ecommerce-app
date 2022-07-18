import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import React , {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';


const product = [

    {
        id: 1,
        image: "https://picsum.photos/id/237/200/300",
        title:"Remera Marley",
        categoria:'mujer',
        description: 'Suave tela de algodon',
        precio:20000
        },
        {
            id: 2,
            image: "https://picsum.photos/id/237/200/300",
            title:"Remera Fantasmic",
            description: 'Suave tela de algodon',
            categoria:'hombres',
            precio:100000
            
            },
            {
                id: 3,
                image: "https://picsum.photos/id/237/200/300",
                title:"Pollera pails",
                description: 'Suave tela de algodon',
                categoria:'mujer',
                precio: 200000,
                
                },
                {
                    id: 4,
                    image: "https://picsum.photos/id/237/200/300",
                    title:"Jean monster inc",
                    description: 'Suave tela de algodon',
                    categoria:'niños',
                    precio:30000
                    }

]

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