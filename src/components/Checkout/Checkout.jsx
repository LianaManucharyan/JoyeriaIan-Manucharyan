import React from 'react'
import { useState, useContext } from 'react'
import { cartContext } from '../../context/CartContext'
import { Timestamp, collection, addDoc } from 'firebase/firestore'
import db from '../../db/db'
import { Link } from 'react-router-dom'
import validateForm from '../../Utils/validateForm'
import { toast } from 'react-toastify'
import "./checkout.css"

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname:"",
        phone:"",
        email:""
    })
    const [idOrder, setIdOrder] = useState(null)
    const {cart, totalPrice, deleteCart} = useContext(cartContext)

    const handleChangeInput = (event) => {
        setDataForm( {...dataForm, [event.target.name ]: event.target.value } )
    }

    const handleSubmitForm = async(event) => {
        event.preventDefault()

        const order = {
            buyer: {...dataForm},
            products: [...cart],
            date: Timestamp.fromDate(new Date()),
            total: totalPrice()

        }

        const response = await validateForm(dataForm)
        if(response.status === "success"){
            uploadOrder(order)
        }else{
            toast.error(response.message)
        }
    }

    const uploadOrder = (newOrder) => {
        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, newOrder)
        .then((response) => {
            setIdOrder(response.id)
        })
        .finally(()=> {
            deleteCart()
            toast.success("Orden generada correctamente!")
        })
    }

  return (
    <div>
        {
                    idOrder === null ? (
                      <form onSubmit={handleSubmitForm} className="checkout-form">
                        <div className="form-field">
                          <label htmlFor="fullname" className="label">Nombre completo:</label>
                          <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            value={dataForm.fullname}
                            onChange={handleChangeInput}
                            placeholder="María Díaz"
                            className="input-field"
                          />
                        </div>
                  
                        <div className="form-field">
                          <label htmlFor="phone" className="label">Teléfono:</label>
                          <input
                            type="number"
                            id="phone"
                            name="phone"
                            value={dataForm.phone}
                            onChange={handleChangeInput}
                            placeholder="11223344"
                            className="input-field"
                          />
                        </div>
                  
                        <div className="form-field">
                          <label htmlFor="email" className="label">Email:</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={dataForm.email}
                            onChange={handleChangeInput}
                            placeholder="Maria.diaz@gmail.com"
                            className="input-field"
                          />
                        </div>
                  
                        <button type="submit" className="submit-button">Terminar mi compra</button>
                      </form>
                    ) : (
                      <div className="order-confirmation">
                        <h2>Orden generada correctamente!!!</h2>
                        <p>Guarde su número de orden: {idOrder}</p>
                        <Link to="/" className="back-link">Volver al inicio</Link>
                      </div>
                    )
                  }                  
    </div>
  )
}

export default Checkout