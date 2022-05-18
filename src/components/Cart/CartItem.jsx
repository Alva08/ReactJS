import React from 'react';

function CartItem({item}) {
    return (
        <div>
            <h1>{item.nombre}</h1>
            <h2>{item.precio}</h2>
        </div>
    );
}

export default CartItem;