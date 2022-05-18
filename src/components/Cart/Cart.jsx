import React, { useContext } from "react";
import "./Cart.css"
import CartItem from "./CartItem";
import CartContext from '../CartContext/CartContext';

function Cart() {
    const cartContext = useContext(CartContext);
    return ( 
        <div className="container">
            {
                cartContext.productsList.map(item => {
                    <CartItem key={item.id} item={item} />
                })
            }
            <button onClick={() => cartContext.clear()}>Vaciar carrito</button>
        </div>
    )
}

export default Cart ;