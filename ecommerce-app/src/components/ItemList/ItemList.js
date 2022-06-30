import {useEffect,useState} from 'react'
import Item from '../Item/Item';

function ItemList (){

    const [info,setInfo] =useState ([])


useEffect (() => {

        fetch ('data.json')
        .then((resp)=> resp.json ())
        .then ((data) => setInfo (data))

    }, [])
return (
    <section className='cuerpo'>
        <div>
            <h1> Selecciona tus productos</h1>
        </div>
    <div className='catalogo'>
        {info && info.map (i => <Item product={i.nombre} price= {i.precio}/>)}
    </div>

    </section>

)

}
export default ItemList;