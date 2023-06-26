import React from 'react';

const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
        <div>
            <h2>Nombre: {nombre}</h2>
            <h3>Precio: {precio}</h3>
            <h3>ID: {id}</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eligendi
                unde eveniet quas. Delectus possimus provident dolorem blanditiis eius
                harum obcaecati illo omnis repellat quas, a illum, nisi ipsa adipisci?
            </p>
            <img src={img} alt={nombre} />
            <button>Agregar al carrito</button>
        </div>
    );
};

export default ItemDetail;
