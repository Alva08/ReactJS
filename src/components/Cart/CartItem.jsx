import React from 'react';
import { Link } from 'react-router-dom';
import "./CartItem.css"

function CartItem({item}) {
    return (
        <div>
            <div className='cardCarrito'>
                <img className='imagenCarrito' src={item.img} alt="imagen producto" />
                <h1 className='nombreCarrito'>{item.nombre}</h1>
                <h2>${item.precio}</h2>
                <h3>Cantidad: {item.quantity}</h3>
                <h4>{} </h4>
            </div>
            <Link to="/checkout">
                <button>Finalizar compra</button>
            </Link>
        </div>
    );
}

export default CartItem;