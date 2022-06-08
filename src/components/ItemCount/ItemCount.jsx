import React, { useState, useContext } from 'react';
import CartContext from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import './ItemCount.css';

function ItemCount( {stock , initial, onAdd} ) {
    const { removeProducts, products, clear, isInCart, cartQuantity, addProducts } = useContext(CartContext);
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
                <Link to="/Cart">
                    <button className="botonAgregar" onClick={ () => (count <= stock) && onAdd(count)}>
                            Agregar al carrito
                    </button>
                </Link>
            </div>
        </div>
);
}

export default ItemCount;