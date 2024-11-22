import '../NavBar/cartwidget.css' 
import { useContext } from 'react'
import { cartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { totalQuantity } = useContext(cartContext)

  const total = totalQuantity()
  
  return (
    <Link to="/cart" className="carrito-compras">
        <img src="../../../src/assets/carritodecompras.png" alt="carritodecompras"></img>
        <p>{ total >= 1 && total }</p>
    </Link>
  )
}

export default CartWidget