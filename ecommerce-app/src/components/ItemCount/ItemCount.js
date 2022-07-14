
import { useState } from "react";
import './ItemCount.css'
import Swal from 'sweetalert2'
// import Hello from "./Hello";

export const ItemCount = ({initial,stock,onAdd}) => {
    const [quantity,setNum] = useState (initial);

    const sumar = () => {
        if ( quantity < stock ){
        setNum (quantity +1)
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
        setNum (quantity -1)
    }
    const reiniciar = () => {
        setNum (0)
    }

    return (
        <>
        <div className='counter'>
        <h3>{quantity}</h3>
        <p> Productos disponibles {stock} unidades </p>
        <button onClick={sumar}> + </button>
        <button onClick={restar}> - </button> 
        <button onClick={reiniciar}>Reiniciar</button>
        <button onClick={() => onAdd }> {quantity > 0 ? `Agregar al Carrito` : `Elegi tus productos`}</button>     
        </div>         
        </>
    )




}

export default ItemCount;