import React from "react";
import Item from './Item';
import './ItemList.css';




function ItemList( {products} ){
    return(
        <div className="productos">
            {products.map( (products) => {
                 return(
                    <Item key={products.id} imagen={products.img} nombre={products.nombre} precio={products.precio} />
                 ) 
             })}        
        </div>
        
    )
}

export default ItemList; 