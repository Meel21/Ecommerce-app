import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'
import Title from '../Title';
import  ItemList  from '../ItemList/ItemList';

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

export const ItemListContainer = ({texto}) => {
const [info,setInfo ]=useState ([]);

const {categoriaId}= useParams();

useEffect (()=> {

const getInfo = new Promise (resolve => {
    setTimeout (() => {

        resolve (product);
    },1000);

    });
    if (categoriaId){

    getInfo.then (res => setInfo(res.filter ((product) => product.categoria === categoriaId)));
   
   } else {
    getInfo.then (res => setInfo (res));
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