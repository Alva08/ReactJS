import React, { useContext, useState } from 'react';
import CartContext from '../CartContext/CartContext';
import "./Checkout.css"

const Checkout = () => {

    const {productList, totalPrice} = useContext(CartContext)

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
        e.preventDeafult()
        console.log(buyer)
        /* console.log("productList", productList);
        const total = totalPrice();
        console.log("total", total);
 */
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