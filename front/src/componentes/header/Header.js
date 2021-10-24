import React from 'react';

export const Header = () => {
    return (
        <header>
            <a href="#"></a>
            <div className="logo">
            <box-icon name='store-alt'></box-icon>
            </div>
            <ul>
                <li>
                    <a href="#">INICIO</a>
                </li>
                <li>
                    <a href="#">PRODUCTOS</a>
                </li>
            </ul>
            <div className="carro">
                <box-icon name="cart"></box-icon>
                <span className="item-total">0</span>
            </div>
        </header>
    )
}