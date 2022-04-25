import React from "react";
import './NavBar.css';
import CardWidget from "../CardWidget"


function NavBar(props){
    return(
        <div className="nav">
                <a href="#">
                    <img className="logo" src="./imagenes/logo.jpg" />
                </a>  
                <div className="navLinks">
                    <a href="#">Inicio</a>
                    <a href="#">Productos</a>
                    <a href="#">Contacto</a>
                </div>
                <div className="carrito">
                    <CardWidget/>
                </div>
        </div>
    );
}

export default NavBar;
