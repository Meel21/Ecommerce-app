// import {useEffect,useState} from 'react'
// import './Body.css';
// import Card from '../Card/Card';

// function Body (){

//     const [info,setInfo] =useState ([])


// useEffect (() => {

//         fetch ('data.json')
//         .then((resp)=> resp.json ())
//         .then ((data) => setInfo (data) )

//     }, [])
// return (
//     <section className='cuerpo'>
//         <div>
//             <h1> Selecciona tus productos</h1>
//         </div>
//     <div className='catalogo'>
//         {info && info.map (i => <Card product={i.nombre} price= {i.precio}/>)}
//     </div>

//     </section>

// )

// }
// export default Body;