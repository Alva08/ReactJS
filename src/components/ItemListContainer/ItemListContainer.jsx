import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import ItemCount from "../ItemCount/ItemCount";
import ItemList from './ItemList'
import './ItemListContainer.css';

function getProducts(category){
    const MyPromise = new Promise((resolve, rejet) => {
        const products = [
            {id: 1, nombre: "Cinta destapa cañeria", precio: 200, img: `../imagenes/cintadestapacaneria.jpg`, category:"construccion"},
            {id: 2, nombre: "Arco de sierra", precio: 150, img: `../imagenes/hojasdesierra.jpg`, category:"construccion"},
            {id: 3, nombre: "Plomada de albañil", precio: 100, img: `../imagenes/plomadas.jpg`, category:"construccion"},
            {id: 4, nombre: "Poleas de transmision", precio: 75, img: `../imagenes/poleas.jpg`, category:"construccion"},
            {id: 5, nombre: "Roldana", precio: 120, img: `../imagenes/roldana.jpg`, category:"construccion"},
            {id: 6, nombre: "Tensor", precio: 80, img: `../imagenes/tensores.jpg`, category:"construccion"},
            {id: 7, nombre: "Rastrillo", precio: 180, img: `../imagenes/rastrillos.jpg`, category:"jardineria"},
            {id: 8, nombre: "Barrehojas", precio: 160, img: `../imagenes/barrehojas.jpg`, category:"jardineria"},
            {id: 9, nombre: "Sapito rociador", precio: 50, img: `../imagenes/sapito.jpg`, category:"jardineria"},
            {id: 10, nombre: "Rastrillo de mano", precio: 95, img: `../imagenes/rastrillodemano.jpg`, category:"jardineria"},
            {id: 11, nombre: "Saca yuyo", precio: 75, img: `../imagenes/sacayuyo.jpg`, category:"jardineria"},
            {id: 12, nombre: "Palita de jardineria", precio: 130, img: `../imagenes/palas.jpg`, category:"jardineria"}
        ];
        const productFiltered = category ? products.filter( p => p.category === category ) : products;
        setTimeout(() => {
            resolve(productFiltered);
        },2000);
    });
    return MyPromise
}

function ItemListContainer(){
    const [prod, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect( () =>{
        getProducts(categoryId)
        .then(res => setProducts(res))
        .catch(error => console.log("ERROR:", error))
    },[categoryId])
    return(
        <div className="container">
            <h1 className="titulo-list">PRODUCTOS</h1>
            <ItemList item={prod}/>
            {/* <ItemCount stock = {5} initial = {1} /> */}
            
        </div>
        
    )
}

export default ItemListContainer;