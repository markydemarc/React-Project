import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ( {img, name, desc, price, id} ) => {

    return (
        <div className="card col-4 m-2">
            <img src={img} alt={name}/>
            <h3>{name}</h3>
            <p>{desc}</p>
            <p>USD{price}</p>
            <Link to={`/detail/${id}`} className="btn btn-outline-primary">View More</Link>
        </div>
    )
}


