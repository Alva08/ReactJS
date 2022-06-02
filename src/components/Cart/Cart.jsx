import React, { useContext } from "react";
import "./Cart.css"
import CartItem from "./CartItem";
import CartContext from '../CartContext/CartContext';

function Cart({item}) {
    const { products, clear } = useContext(CartContext);
    return ( 
        <div className="container">
            <h1>CART</h1>
            {
                products.map(item => { return <CartItem key={item.id} item={item}/>})
            }
            <button onClick={() => clear()}>Vaciar carrito</button>
        </div>
    )
}

export default Cart ;