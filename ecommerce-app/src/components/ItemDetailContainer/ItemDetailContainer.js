import './ItemDetailContainer.css';
import { getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import React , {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () =>{
    const [data,setData] = useState ({});
    const {detalleId} = useParams ()

    useEffect (() => {
      const querydb = getFirestore();
      const queryDoc = doc (querydb,'productos',detalleId);
      getDoc (queryDoc)
      .then(res => setData({id: res.id,...res.data ()}))
    },[])

 return (
        <ItemDetail data= {data} />



 );

}

export default ItemDetailContainer;