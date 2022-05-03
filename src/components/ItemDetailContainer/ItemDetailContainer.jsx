import React, {useEffect, useState} from "react";
import './ItemDetailContainer.css';
import ItemDetail from "./ItemDetail";


function getItem(){
    const myPromise = new Promise( (resolve, rejet) => {
        const item = {
            id: 1,
            nombre: "Cinta destapa cañeria", 
            precio: 200, 
            img: `../imagenes/cintadestapacaneria.jpg`
        };
    setTimeout(() => {
         resolve(item);
     }, 2000);
});
return myPromise;
}

function ItemDetailContainer () {
    const [item, setItem] = useState({});

    useEffect( () => {
        getItem()
            .then(res => {
                setItem(res)
            })
            .catch(err => {console.log(err)
            });
    },[]);

    return ( 
        <div className="ItemDetailContainer">
            <ItemDetail item={item} />
        </div>
     );
}

export default ItemDetailContainer ;