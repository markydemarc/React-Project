import React from 'react'
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'
import logo from "./img/m-logo.png"
import { Link } from 'react-router-dom'


export const NavBar = () => {
    return (
        <header className="navbar__header"> 
            <Link to={"/"}><img src={ logo } className="navbar__header__logo"></img></Link>

             <nav>  
               <Link className="mx-1" to={"/"} className="navbar__header__font">Home</Link>
               <Link className="mx-1" to={"/category/full"} className="navbar__header__font">Full Campaign</Link>
               <Link className="mx-1" to={"/category/cm"} className="navbar__header__font">CM</Link>
               <Link className="mx-1" to={"/category/copy"} className="navbar__header__font">Copywriting</Link>
               
             </nav>

             <CartWidget/>

        </header> 
    )
}


