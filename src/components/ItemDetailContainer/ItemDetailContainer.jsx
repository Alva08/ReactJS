import React, {useEffect, useState} from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"


function getItem(id){
    const MyPromise = new Promise((resolve, rejet) => {
        const products = [
            {id: 1, nombre: "Cinta destapa cañeria", precio: 200, img: `../imagenes/cintadestapacaneria.jpg`, category:"construccion", stock:"3"},
            {id: 2, nombre: "Arco de sierra", precio: 150, img: `../imagenes/hojasdesierra.jpg`, category:"construccion", stock:"5"},
            {id: 3, nombre: "Plomada de albañil", precio: 100, img: `../imagenes/plomadas.jpg`, category:"construccion", stock:"1"},
            {id: 4, nombre: "Poleas de transmision", precio: 75, img: `../imagenes/poleas.jpg`, category:"construccion", stock:"7"},
            {id: 5, nombre: "Roldana", precio: 120, img: `../imagenes/roldana.jpg`, category:"construccion", stock:"4"},
            {id: 6, nombre: "Tensor", precio: 80, img: `../imagenes/tensores.jpg`, category:"construccion", stock:"7"},
            {id: 7, nombre: "Rastrillo", precio: 180, img: `../imagenes/rastrillos.jpg`, category:"jardineria", stock:"9"},
            {id: 8, nombre: "Barrehojas", precio: 160, img: `../imagenes/barrehojas.jpg`, category:"jardineria", stock:"10"},
            {id: 9, nombre: "Sapito rociador", precio: 50, img: `../imagenes/sapito.jpg`, category:"jardineria", stock:"6"},
            {id: 10, nombre: "Rastrillo de mano", precio: 95, img: `../imagenes/rastrillodemano.jpg`, category:"jardineria", stock:"5"},
            {id: 11, nombre: "Saca yuyo", precio: 75, img: `../imagenes/sacayuyo.jpg`, category:"jardineria", stock:"2"},
            {id: 12, nombre: "Palita de jardineria", precio: 130, img: `../imagenes/palas.jpg`, category:"jardineria", stock:"1"}
        ];
        const item = products.filter( item => item.id == id );
        setTimeout(() => {
            resolve(item[0]);
        },2000);
    });
    return MyPromise;
} 

function ItemDetailContainer () {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect( () => {
        console.log(id);
        getItem(id)
            .then(res => {
                setItem(res)
            })
            .catch(err => {console.log(err)
            });
    },[id]);

    return ( 
        <div className="ItemDetailContainer">
            <ItemDetail item={item} />
        </div>
     );
}

export default ItemDetailContainer ;