import React from "react";
import './Box.css';
import Counter from "../counter";


function ItemListContainer({greetings}){
    return(
        <div className="container">
            <h1>{greetings}</h1>
            <div className="contador"><Counter/></div>
        </div>
        
    )
}

export default ItemListContainer;