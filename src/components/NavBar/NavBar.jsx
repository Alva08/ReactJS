import React from "react";
import './NavBar.css';
import CardWidget from "../CardWidget/CardWidget";
import { NavLink } from "react-router-dom";


function NavBar(props){
    return(
        <div className="nav">
            <div className="logoNav">
                <a href="#">
                    <img className="logo" src="./imagenes/logo.jpg" />
                </a> 
            </div> 
            <div>
                <ul className="navLinks">
                    <li> <NavLink to="/category/jardineria">Jardineria</NavLink></li>
                    <li> <NavLink to="/category/construccion">Construccion</NavLink></li>
                    <li> <NavLink to="/category/productos">Productos</NavLink></li>
                </ul>
            </div>
            <div className="carrito">
                <CardWidget/>
            </div>
        </div>
    );
}

export default NavBar;
