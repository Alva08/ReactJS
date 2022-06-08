import React, { createContext, useState } from "react";

export const CartContext = createContext({})

export function CartContextProvider({children}) {
    const [productList, setProductList ] = useState([])

    function isInCart(id){
        return productList.some(item => item.id === id);
    }

    function addProducts(item){
        if(isInCart(item.id)){
            setProductList(productList.map(p => p.id === item.id ? {...p, quantity: p.quantity + item.quantity} : p))
        }else{
            setProductList([...productList,item])
        }
    }

    function clear(){
        setProductList([]);
    }
    
    const removeProduct = (id) => {
        const indexToRemove = productList.findIndex(item => item.id === id);
        if (productList[indexToRemove].quantity === 1) {
            setProductList(productList.filter(i => i.id !== id))
        } else {
            setProductList(productList.map(p => p.id === id ? {...p, quantity: p.quantity - 1} : p));
        }
    }
    
   
    function cartQuantity(){
        productList.reduce((total, value)=>{
            return total + value.quantity;
        }, 0)
    }

    function totalPrice(){
        return productList.reduce((total, value) => {
            return total * value.quantity
        }, 0)
    }
 
    return (
        <CartContext.Provider value={{
            products: productList,
            addProducts,
            removeProduct,
            clear,
            isInCart,
            cartQuantity,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;


