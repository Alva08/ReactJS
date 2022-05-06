import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

function Item({item}){
    return(
        <div className="cardProducto">
            <img className='imagenPorducto' src={item?.img} alt="productos" />
            <h2 className='nombreProducto'>{item?.nombre}</h2>
            <h3>${item?.precio}</h3>
            <Link to={`/item/` + item?.id} className="detalle" >Ver Detalle</Link> 
        </div>
    )
}

export default Item;