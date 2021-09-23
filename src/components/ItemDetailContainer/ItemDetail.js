import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { Counter } from '../Counter/Counter'
import './ItemDetail.css'

export const ItemDetail = ({category, id, name, desc, img, price, stock}) => {

    const {agregarAlCarrito, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)
    
    const handleAdd = () => {
        agregarAlCarrito({category, id, name, desc, img, price, stock, cantidad})
    }
   
    return (
        <div className="section__centertext">
           <h2>{name}</h2>  
           <p>Price: USD{price}</p> 
           <img className="section__product__img" src={img} alt={name}/>
           <p>{desc}</p> 

           <Counter 
                max={stock} 
                cantidad={cantidad} 
                setCantidad={setCantidad} 
                agregar={handleAdd} 
                agregado={isInCart(id)}
            />
            <Link to={`/category/${category}`} className="btn btn-primary">Back To</Link>
        </div>
    )

} 

