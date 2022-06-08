import React, {useEffect, useState} from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"


function getItem(id){
    const db = getFirestore();

    const itemRef = doc(db, "items", id);

    return getDoc(itemRef);
} 

function ItemDetailContainer () {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect( () => {
        getItem(id)
            .then(snapshot => {
                setItem( { ...snapshot.data(), id: snapshot.id } )})
            .catch(error => console.log("ERROR:", error))   
    },[id])

    return ( 
        <div className="ItemDetailContainer">
            <ItemDetail item={item} />
        </div>
     );
}

export default ItemDetailContainer ;