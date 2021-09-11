import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCarrito] = useState([])

    const agregarAlCarrito = (prod) => {
        setCarrito([
            ...cart,
            prod
        ])
    }

    const eliminarDelCarrito = (id) => {
        setCarrito( cart.filter(prod => prod.id !== id) )
    }

    const cantidadCarrito = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const isInCart = (id) => {
        return cart.some(el => el.id === id)
    }

    const totalCarrito = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
    }

    return (
        <CartContext.Provider value={{cart, totalCarrito, isInCart, agregarAlCarrito, eliminarDelCarrito, cantidadCarrito, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}
