import React from 'react'
import { Item } from './Item'
import './ItemList.css'


export const ItemList = ( {productos = []} ) => {

    return (
        <section className="container my-5">
            <h2 className="section__maintitle">Work with me</h2>
            <hr/>
            <div className="section__container row">
                {productos.map((prod) => <Item key={prod.id} {...prod}/> )} 
            </div>
        </section>
    )
}

