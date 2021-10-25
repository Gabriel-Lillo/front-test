import React, { useEffect, useState } from 'react';
import { ProductoItem } from './ProductoItem';

export const Productos = () => {


    const [item, setItem] = useState([])

    useEffect(() => (
        obtenerDatos()
    ), []);

    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:5000/api/products')
        const items = await data.json()
        setItem(items)
    }


    return (
        <>
            <h1 className="tittle">PRODUCTOS</h1>
            <div className="productos">
                {
                    item.map(producto => (
                        <ProductoItem
                            key={producto.id}
                            id = {producto.id}
                            name ={producto.name}
                            image ={producto.image}
                            brand ={producto.brand}
                            price = {producto.price}
                        />
                    ))
                }
            </div>
        </>
    )
}