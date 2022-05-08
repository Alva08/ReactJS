import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemCount.css';

function ItemCount( {stock , initial, onAdd} ) {
    const [count, setCount] = useState(initial);

    const onIncrese = () => {
        const newValue = count + 1;
        if( newValue <= stock ){
            setCount(newValue);
        }
    }

    const onDecrese = () => {
        const newValue = count -1;
        if ( newValue >= initial ){
            setCount(newValue);
        }
    }

    return (
        <div className='contenedor'>
            <div className='contador'>
                <button className='boton' onClick={ onIncrese }>
                    +
                </button>
                <div className='cantidad'>{count}</div>
                <button className='boton' onClick={ onDecrese }>
                    -
                </button>
            </div>
            <div className='agregar'>
                <button className="botonAgregar" onClick={ () => (count <= stock) && onAdd(count)}>
                        Agregar al carrito
                </button> 
            </div>
        </div>
);
}

export default ItemCount;