import React from "react";
import Item from './Item';
import './ItemList.css';

function ItemList( {item} ){
    return(
        <div className="productos">
            {item.map( item => <Item item={item} key={item.id}/>)}    
        </div>
    )
}

export default ItemList; 