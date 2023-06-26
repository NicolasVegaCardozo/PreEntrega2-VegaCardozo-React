import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({id, nombre, precio, img}) => {
    return (
        <div className="cardProducto">
            <img className="imgProducto" src={img} alt={nombre}/>
            <h3>Nombre: {nombre}</h3>
            <p>Precio: {precio}</p>
            <p> ID: {id}</p>
            <Link to={`/item/${id}`}>  <button className="btnProducto"> Ver Producto </button></Link>
            <button className="comprar"> Comprar </button>
        </div>
    )
}

export default Item