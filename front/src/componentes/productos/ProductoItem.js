import React from 'react';

export const ProductoItem = ({
    name,
    image,
    brand,
    price
}) => {


    return (
        <div className="producto">
            <a href="#">
                <div className="producto-img">
                    <img src={image} alt={name} />
                </div>
            </a>
            <div className="producto-footer">
                <h1>{name}</h1>
                <p>{brand}</p>
                <p className="precio">${price}</p>
            </div>
            <div className="button">
                <button className="btn">Añadir al carro</button>
                <div>
                    <a href="#" className="btn">
                        Detalles
                    </a>
                </div>
            </div>
        </div>
    )
}