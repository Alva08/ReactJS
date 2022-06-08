import { useContext } from 'react';
import CartContext from '../CartContext/CartContext';
import "./CartItem.css"

function CartItem({item}) {
    const { removeProduct, products, clear, isInCart, cartQuantity, addProducts } = useContext(CartContext);
    return (
        <div>
            <div className='cardCarrito'>
                <img className='imagenCarrito' src={item.img} alt="imagen producto" />
                <div className='cardCarrito-detalle'>
                    <h1 className='nombreCarrito'>{item.nombre}</h1>
                    <h2>${item.precio}</h2>
                    <div className='cantidad-cart'>
                        <h3>Cantidad: {item.quantity}</h3>
                        <button className='btnRemove' onClick={() => {removeProduct(item.id)}}>X</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;