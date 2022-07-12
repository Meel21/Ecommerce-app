import { icon } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import Swal from 'sweetalert2'
// import Hello from "./Hello";

export const ItemCount = ({initial,stock,onAdd}) => {
    const [num,setNum] = useState (initial);

    const sumar = () => {
        if ( num < stock ){
        setNum (num +1)
    }
    else {
      Swal.fire({
            title: 'Error!',
            text: 'Ud. llego al stock maximo de este producto',
            icon: 'warning',
            confirmButtonText:'OK',
            timer: 2000

      })
    }
    }
    const restar = () => {
        setNum (num -1)
    }
    const reiniciar = () => {
        setNum (0)
    }

    return (
        <>
        <h3>{num}</h3>
        <p> Productos disponibles {stock} unidades </p>
        <button onClick={sumar}> + </button>
        <button onClick={restar}> - </button> 
        <button onClick={reiniciar}>Reiniciar</button> 
        <button> {num > 0 ? `Agregar al Carrito` : `Elegi tus productos`}</button>              
        </>
    )




}

export default ItemCount;