import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const CartScreen = () => {

    const {cart, eliminarDelCarrito, vaciarCarrito} = useContext(CartContext)

    return (
        <div>
            <h1 className="section__maintitle">Resume</h1>

            {cart.map(prod => (
                <div key={prod.id} className="section__centertext">
                    <h3>{prod.name}</h3>
                    <p>Quantity: {prod.cantidad}</p>
                    <p>Price: USD{prod.price * prod.cantidad}</p>
                    <BsFillTrashFill onClick={() => eliminarDelCarrito(prod.id)}/>
                </div>
            ))}

            <hr/>
            <div className="section__btn">
            <button className="btn btn-danger" onClick={vaciarCarrito}>Empty</button>

            <Link to="/checkout">
                <button className="btn btn-success mx-3">
                    Checkout
                </button>
            </Link>

            </div>
        </div>
    )
}

