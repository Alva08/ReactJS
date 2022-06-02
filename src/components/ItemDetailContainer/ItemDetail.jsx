import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../CartContext/CartContext';
import './ItemDetail.css'




function ItemDetail({item}) {
  const { removeProducts, products, clear, isInCart, cartQuantity, addProducts } = useContext(CartContext);

  function onAdd(quantityToAdd){
    addProducts({quantity: quantityToAdd, ...item})
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
            <button onClick={() => {console.log(products)}}>Mostrar carrito</button>
            <button onClick={() => {removeProducts(item.id)}}>Remove products</button>
            <button onClick={() => {clear()}}>Clear</button>
            <button onClick={() => {console.log(isInCart(item.id))}}>Is in cart</button>
            {products.length &&
              <Link to="/Cart">
                <button className='botonTerminar'> Terminar compra ({cartQuantity()}) item </button>
              </Link>
            }
        </div>
    </div>
  )
}

export default ItemDetail;