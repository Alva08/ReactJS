import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import "./Cart.css"
import CartItem from "./CartItem";
import CartContext from '../CartContext/CartContext';

function Cart() {
    const { products, clear, totalPrice } = useContext(CartContext);
    return ( 
        <div className="container-cart">
            <div className="prod-cart">
                {
                    products.map(item => { return <CartItem key={item.id} item={item}/>})
                }
                <button className="btnCart" onClick={() => clear()}>Vaciar carrito</button>
                <Link to="/checkout">
                    <button className="btnFin">Finalizar compra</button>
                </Link>
            </div>
            <h3 className="total-cart">{`Total:  $ ${totalPrice()}`}</h3>
        </div>
    )
}

export default Cart ;

