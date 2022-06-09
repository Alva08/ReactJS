import React, { useContext, useState } from 'react';
import CartContext from '../CartContext/CartContext';
import  {collection, addDoc, getFirestore } from "firebase/firestore"
import "./Checkout.css"

const Checkout = () => {

    const {productList, totalPrice, clear} = useContext(CartContext)

    const [buyer, setBuyer ] = useState({
        Nombre:"",
        Email:"",
        Telefono:""
    })

    const {Nombre, Email, Telefono} = buyer 

    const handleInput = (e) => {
       setBuyer(({
            ...buyer, 
            [e.target.name]:e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const dia = new Date()
        const items = productList.map(e=> {return {id:e.id,title:e.name,price:e.price,amount:e.amount}})        
        const total = totalPrice()
        const data = {buyer,items,dia,total}
        console.log("data",data)  
        generateOrder(data) 
    }

    const generateOrder = async(data) => {
        const db = getFirestore();
        try {
            const col = collection(db,"Orders")
            const order = await addDoc(col,data) 
            console.log("order", order)
            console.log("order", order.id)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='container-checkout'>
                <h1>Finalizar compra</h1>
                <div className='checkout'>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name='Nombre' placeholder='Nombre' value={Nombre} onChange={handleInput} />
                        <input type="text" name="Email" placeholder='Email' value={Email} onChange={handleInput}  />
                        <input type="number" name='Telefono' placeholder='Telefono' value={Telefono} onChange={handleInput} />
                        <input type="submit" value="Finalizar compra" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Checkout;