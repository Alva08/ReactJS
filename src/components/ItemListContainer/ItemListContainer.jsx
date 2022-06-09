import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from './ItemList'
import './ItemListContainer.css';
import { collection, getDocs, getFirestore, query, where, limit } from "firebase/firestore"

function getProducts(category){
    const db = getFirestore();

    const itemCollection = collection(db, "items");

    const q = category && query(
        itemCollection,
        where('category', '==', category),
    )

    return getDocs(q || itemCollection);
}

function ItemListContainer(){
    const [prod, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect( () =>{
        getProducts(categoryId)
        .then(snapshot => setProducts(snapshot.docs.map( doc => {return { ...doc.data(), id: doc.id }})))
        .catch(error => console.log("ERROR:", error))
    },[categoryId])

    return(
        <div className="container">
            <h1 className="titulo-list">PRODUCTOS</h1>
            <ItemList item={prod}/>  
        </div>
        
    )
}

export default ItemListContainer;