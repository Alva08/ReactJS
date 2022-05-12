import React, { createContext, useState } from "react";

const CartContext = createContext({
    products: [],
})

export function CartContextProvider({children}) {
    const [productList, setProductList ] = useState([])

    function addProducts(products){
        const repeatItem = productList.findIndex(item => item.id === products.id);
        if(repeatItem !== -1){
            setProductList(productList.map(p => p.id === products.id ? {...p, quantity: p.quantity + products.quantity} : p))
        }else{
            setProductList([products, ...productList])
        }
    }
    
    function removeProducts(id){
        const itemRemove = productList.findIndex(item => item.id === id)
        if(productList[itemRemove].quantity === 1){
            setProductList(i => i.id !== id)
        }else{
            setProductList(productList.map(p => p.id === id ? {...p, quantity: p.quantity - 1} : p))
        }
    }
    
    function clear(){
        setProductList([]);
    }
    
    function isInCart(id){
        return productList.map( p => p.id).indexOf(id) !== -1;
    }

    function cartQuantity(){
        return productList.reduce((total, value)=>{
            return total + value.quantity
        }, 0)
    }

    return (
        <CartContext.Provider value={{
            products: productList,
            addProducts,
            removeProducts,
            clear,
            isInCart,
            cartQuantity
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;


