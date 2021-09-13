import React from 'react'
import { Link } from 'react-router-dom'
import './Counter.css'

export const Counter = ({max, cantidad, setCantidad, agregar, agregado}) => {

    const handleSumar = () => {
        if (cantidad < max) {
            setCantidad(cantidad + 1)
        }
    }
    
    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <>
            <div className="d-flex section__center">

                {
                    agregado 
                        ? <Link to="/cart" className="btn btn-success">Done!</Link>
                        :
                        <div className="section__center_btn">
                            <button className="btn btn-primary mx-1" onClick={handleRestar}>-</button>
                            <p>{cantidad}</p>
                            <button className="btn btn-primary mx-1" onClick={handleSumar}>+</button>
                            <button className="btn btn-outline-primary" onClick={agregar}>Add to cart</button>
                        </div>
                }



            </div>
        </>
    )
}
