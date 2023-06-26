import './CartWidget.css'

const CartWidget = () => {

    const imgCarrito = "https://thumbs.dreamstime.com/b/icono-de-las-compras-del-carro-la-compra-en-fondo-oscuro-116659167.jpg";
    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
            <strong> 10 </strong>
        </div>
    )
}

export default CartWidget