import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'



function ItemDetail({item}) {
  const [CantProd, setCantProd] = useState(null)

  function onAdd(qunatityToAdd){
    setCantProd(qunatityToAdd);
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
                {CantProd ?
                  <button className='botonTerminar'><Link className='linkTerminar' to="/cart"> Terminar compra ({CantProd} items ) </Link></button> :
                  <ItemCount item={item} stock = {item.stock} initial = {1} onAdd={onAdd}/>
                }
            
        </div>
    </div>
  )
}

export default ItemDetail;