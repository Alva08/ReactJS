import React from "react";
import './NavBar.css';
import CardWidget from "../CardWidget/CardWidget";
import { NavLink } from "react-router-dom";


function NavBar(){
    return(
        <div className="nav">
            <div className="logoNav">
                <li>
                    <NavLink to="/"><img className="logo" src="./imagenes/logo.jpg" /></NavLink>
                </li>
            </div> 
            <div>
                <ul className="navLinks">
                    <li> <NavLink to="/">Productos</NavLink></li>
                    <li> <NavLink to="/category/construccion">Construccion</NavLink></li>
                    <li> <NavLink to="/category/jardineria">Jardineria</NavLink></li>
                </ul>
            </div>
            <div className="carrito">
                <CardWidget/>
            </div>
        </div>
    );
}

export default NavBar;
