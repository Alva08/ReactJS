import React from 'react';
import "./CartItem.css"

function CartItem({item}) {
    return (
        <div className='cardCarrito'>
            <img className='imagenCarrito' src={item.img} alt="imagen producto" />
            <h1 className='nombreCarrito'>{item.nombre}</h1>
            <h2>${item.precio}</h2>
            <h3>Cantidad: {item.quantity}</h3>
        </div>
    );
}

export default CartItem;