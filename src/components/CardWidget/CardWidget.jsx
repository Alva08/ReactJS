import React from "react";
import { NavLink } from "react-router-dom";
import './CardWidget.css';

function CardWidget(){
    return(
        <li className="logoCarrito">
            <NavLink to="/cart">
                <img className="logoCarrito" src="./imagenes/carrito.jpg" alt="carrito" />
            </NavLink>
        </li>  
    )
}

export default CardWidget;