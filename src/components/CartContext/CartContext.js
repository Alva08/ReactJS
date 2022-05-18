import React, { createContext, useState } from "react";

export const CartContext = createContext({})

export function CartContextProvider({children}) {
    const [productList, setProductList ] = useState([])

    function isInCart(id){
        return productList.some(item => item.id === id);
    }

    function addProducts(item, quantity){
        if(isInCart(item.id)){
            setProductList(productList.map(p => p.id === item.id ? {...p, quantity: p.quantity + quantity} : p))
        }else{
            setProductList([...productList, {...item, quantity}])
        }
    }

    function clear(){
        setProductList([]);
    }
    
    function removeProducts(id){
        setProductList(productList.filter(item => item.id !== id));
    }
    
   
    function cartQuantity(){
        return productList.reduce((total, value)=>{
            return total + value.quantity;
        }, 0)
    }

    /* function totalPrice(item){
        return productList.reduce((total, value)=>{
            return total + value.quantity * item.precio;
        }, 0)
    }

    function cantProduct(id){
        return productList.find(item => item.id === id).quantity;
    }
 */
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


