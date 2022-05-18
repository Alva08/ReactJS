import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../CartContext/CartContext';
import './ItemDetail.css'




function ItemDetail({item}) {
  const cartContext = useContext(CartContext);

  function onAdd(quantityToAdd){
    cartContext.addProducts({quantity: quantityToAdd, ...item})
  }

  return (
    <div className='itemContainer' >
        <div className='itemDetail-img'>
            <img src={item?.img} alt="imagen producto"/>
        </div>
        <div className='itemDetail'>
            <h2>{item?.nombre}</h2>
            <h3>${item?.precio}</h3>
            <p>Detalle del producto</p>
            <ItemCount item={item} stock = {item.stock} initial = {1} onAdd={onAdd}/>
            <button onClick={() => {console.log(cartContext.products)}}>Mostrar carrito</button>
            <button onClick={() => {cartContext.removeProducts(item.id)}}>Remove products</button>
            <button onClick={() => {cartContext.clear()}}>Clear</button>
            <button onClick={() => {console.log(cartContext.isInCart(item.id))}}>Is in cart</button>
            {cartContext.products.length &&
              <Link to="/cart">
                <button className='botonTerminar'> Terminar compra ({cartContext.cartQuantity()}) item </button>
              </Link>
            }
        </div>
    </div>
  )
}

export default ItemDetail;