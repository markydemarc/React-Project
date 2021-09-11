import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './CartWidget.css'


export const CartWidget = () => {

    const {cantidadCarrito} = useContext(CartContext)

    return (
        <Link to="/cart">
            <div className="navbar__cart__widget">
                    <FaShoppingCart/>
                    <span>{cantidadCarrito()}</span>
            </div>
        </Link>
    )
}

