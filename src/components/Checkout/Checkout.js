import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import { CartContext } from '../../context/CartContext'
import { generarOrden } from '../../firebase/generarOrden'
import Swal from 'sweetalert2'


export const Checkout = () => {

    const {cart, totalCarrito, vaciarCarrito} = useContext(CartContext)

    const [values, setValues] = useState({
        name: '',
        email: '',
        cel: 0,
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.name.length > 3 && values.email.length > 3 && values.cel.length > 5) {
            generarOrden(values, cart, totalCarrito())
                .then( res => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Registered',
                        text: `Save this number: ${res}`,
                        confirmButtonText: 'Great!'
                    })

                    vaciarCarrito()
                })
                .catch( err => {
                    console.log(err)
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Check your info'
              })
        }


    }

    

    return (
        <div>
            <h2>Checkout</h2>
            <hr/>
            
        {!cart.length 
            ? <Redirect to="/"/>
            :
        
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={values.name}
                        onChange={handleInputChange}
                        name="name"
                        required
                    />
                    <input
                        type="tel"
                        value={values.cel}
                        onChange={handleInputChange}
                        name="cel"
                        required
                    />
                    <input
                        type="email"
                        value={values.email}
                        onChange={handleInputChange}
                        name="email"
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        }

        </div>
    )
}