import React from "react";
import Item from './Item';
//import './ItemList.css';




function ItemList( {products} ){
    return(
        <div>
            <h1>HOLA SOY ITEM LIST</h1>
            {products.map( (products) => {
                 return(
                    <Item key={products.id} title={products.nombre} precio={products.precio} />
                 ) 
             })}        
        </div>
        
    )
}

export default ItemList;