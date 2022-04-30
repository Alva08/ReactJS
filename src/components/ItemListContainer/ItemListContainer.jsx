import React, { useEffect, useState } from "react";
//import ItemCount from "../ItemCount/ItemCount";
import getData from "../../services/getData";
import ItemList from './ItemList'
import './ItemListContainer.css';



function ItemListContainer({greeting}){
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        getData
        .then(response => setProducts(response))
        .catch(error => console.log("ERROR:", error))
    }, [])
    return(
        <div className="container">
            <h1 className="titulo-list">{greeting}</h1>
            <ItemList products={products}/>
            {/* <div>
                <ItemCount stock = {5} initial = {1} />
            </div> */}
        </div>
        
    )
}

export default ItemListContainer;