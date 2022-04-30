import './Item.css';

function Item({nombre, precio,imagen}){
    return(
        <div className="cardProducto">
            <img className='imagenPorducto' src={imagen} alt="productos" />
            <h2 className='nombreProducto'>{nombre}</h2>
            <h3>${precio}</h3>
        </div>
    )
}

export default Item;