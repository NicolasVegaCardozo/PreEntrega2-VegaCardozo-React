import './CartWidget.css'

const CartWidget = () => {

    const imgCarrito = "https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-shopping-cart.png";
    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
            <strong> 10 </strong>
        </div>
    )
}

export default CartWidget