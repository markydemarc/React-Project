import React from 'react'
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'
import logo from "./img/m-logo.png"
import { Link } from 'react-router-dom'


export const NavBar = () => {
    return (
        <header className="navbar__header"> 
            <Link to={"/"}><img src={ logo } className="navbar__header__logo" alt="Logo"></img></Link>

             <nav>  
               <Link className="navbar__header__font" to={"/category/full"}>Full Campaign</Link>
               <Link className="navbar__header__font" to={"/category/cm"}>CM</Link>
               <Link className="navbar__header__font" to={"/category/copy"}>Copywriting</Link>
               <Link className="navbar__header__font" to={"/aboutme"}>About Me</Link>
               
             </nav>

             <CartWidget/>

        </header> 
    )
}


