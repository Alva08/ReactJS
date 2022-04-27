import React from "react";
import './ItemListContainer.css';
import ItemCount from "../ItemCount/ItemCount";


function ItemListContainer({greeting}){
    return(
        <div className="container">
            <h1 className="titulo">{greeting}</h1>
            <div className="contador">
                <ItemCount /* stock = {5} initial = {1} */ />
            </div>
        </div>
        
    )
}

export default ItemListContainer;