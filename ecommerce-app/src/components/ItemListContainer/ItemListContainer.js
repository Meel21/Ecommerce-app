import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';
import Title from '../Title';
import  ItemList  from '../ItemList/ItemList';

const product = [

    {
        id: 1,
        image: "https://picsum.photos/id/237/200/300",
        title:"Remera Marley",
        description: 'Suave tela de algodon',
        
        },
        {
            id: 1,
            image: "https://picsum.photos/id/237/200/300",
            title:"Remera Marley",
            description: 'Suave tela de algodon',
            categoria:'hombre'
            
            },
            {
                id: 1,
                image: "https://picsum.photos/id/237/200/300",
                title:"Remera Marley",
                description: 'Suave tela de algodon',
                categoria:'mujer'
                
                },
                {
                    id: 1,
                    image: "https://picsum.photos/id/237/200/300",
                    title:"Remera Marley",
                    description: 'Suave tela de algodon',
                    
                    }

]

const ItemListContainer = ({greetings}) => {
const [info,setInfo ]=useState ([]);

const {categoriaId}= useParams();

useEffect (()=> {

const getInfo = new Promise (resolve => {
    setTimeout (() => {

        resolve (product);
    },1000);

    });
    if (categoriaId){

    getInfo.then (res => setInfo(res.filter (product => product.categoria === categoriaId)));
   
   } else {
    getInfo.then (res => setInfo (res));
   }  

},[categoriaId])


const onAdd = (quantity) => {
    console.log (`compraste ${quantity} unidades`)
}

return (
<>
 <Title greeting={greetings} />
 <ItemCount initial= {4} stock= {8} onAdd={onAdd} />
 <ItemList info = {info}/>


</>
);


    
}
    
    
    
    






// const getInfo = () => {

//     return new Promise ((resolve,reject) => {

//         setTimeout(() => {

//             listProducts.length > 0 ?
//             resolve (listProducts)
//             :
//             reject ("No hay datos")
            
//         }, 2000);
//     }
//     )
// }
// if (categoriaId){
//     getInfo.then (res =>setInfo (res))
// } else

// }

// getInfo.then (res => setInfo (res))
// useEffect (() => {
//         getInfo ()
//         .then(res => setInfo (res))
//         .catch(err => console.log (err))
//         }, [])



// return (

// <>
//  <h1>{greetings}</h1>
//  <ItemCount stock={8} />
//  <ItemList listProducts={info}/>
// </>

// );
// };

export default ItemListContainer;