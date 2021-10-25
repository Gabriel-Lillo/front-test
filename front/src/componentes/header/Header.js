import React from 'react';

export const Header = () => {
    return (
        <header>
            <a href="#">
                <div className="logo">
                    <box-icon name='store-alt' id="shop"></box-icon>
                </div>
            </a>
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