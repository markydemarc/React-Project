import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import { CartContext } from '../../context/CartContext'
import { generarOrden } from '../../firebase/generarOrden'
import Swal from 'sweetalert2'
import './Checkout.css'


export const Checkout = () => {

    const {cart, totalCarrito, vaciarCarrito} = useContext(CartContext)

    const [values, setValues] = useState({
        name: '',
        email: '',
        cel: '',
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
                        title: 'Success',
                        text: `Order number: ${res}`,
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
            <h2 className="section__maintitle">Checkout</h2>
            <hr/>
            
        {!cart.length 
            ? <Redirect to="/"/>
            :
        
            <div className="container contact-form">
                <form onSubmit={handleSubmit}>
                   <div class="row">
                     <div class="col-md-6">
                       <div class="form-group">
                          <input
                              type="text"
                              value={values.name}
                              onChange={handleInputChange}
                              className="form-control"
                              placeholder="Your Name *"
                              name="name"
                              required
                          />
                        </div>
                        <div class="form-group">
                          <input
                              type="tel"
                              value={values.cel}
                              onChange={handleInputChange}
                              className="form-control"
                              placeholder="Your Phone Number *"
                              name="cel"
                              required
                          />
                         </div>
                         <div class="form-group">
                         <input
                             type="email"
                             value={values.email}
                             onChange={handleInputChange}
                             placeholder="Your Email *" 
                             className="form-control"
                             name="email"
                             required
                         />
                         </div>
                    <button type="submit" className="btn btn-primary section__form__button">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        }
        </div>
    )
}