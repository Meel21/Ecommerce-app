import {useEffect,useState} from 'react';
import {listProducts} from '../data/asyncMonck';
import { ItemList } from '../ItemList/ItemList';

const ItemListContainer = ({greetings}) => {

const [info,setInfo ]=useState ([])

const getInfo = () => {

    return new Promise ((resolve,reject) => {

        setTimeout(() => {

            listProducts.length > 0 ?
            resolve (listProducts)
            :
            reject ("No hay datos")
            
        }, 2000);
    }
    )
}

useEffect (() => {
        getInfo ()
        .then(res => setInfo (res))
        .catch(err => console.log (err))
        }, [])



return (

<>
 <h1>{greetings}</h1>
 <hr/>
 <ItemList listProducts={info}/>
</>

);
};

export default ItemListContainer;