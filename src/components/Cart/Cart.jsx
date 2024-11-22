import { useContext } from "react"
import { cartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./cart.css" 

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } = useContext(cartContext)

  //Early return
  if(cart.length === 0){
    return(
      <div>
        <h2>No hay productos en el carrito</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div>
      {
          cart.map((productCart) => (
            <div key={productCart.id} className="cart-item">
              <img src={productCart.image} alt={productCart.name} className="product-image" />
              <div className="product-details">
                <p className="product-name">{productCart.name}</p>
                <p className="product-price">Precio c/u: {productCart.price}</p>
                <p className="product-quantity">Cantidad: {productCart.quantity}</p>
                <p className="product-total">
                  Precio parcial: {productCart.quantity * productCart.price}
                </p>
                <button 
                  className="delete-button" 
                  onClick={() => deleteProductById(productCart.id)}
                >
                  Eliminar producto
                </button>
              </div>
            </div>
          ))
        }
        
        <p className="total-price">Precio total: {totalPrice()}</p>
        <button className="clear-cart-button" onClick={deleteCart}>
          Vaciar carrito
        </button>
        <Link to="/checkout" className="checkout-link">
          Continuar con mi compra
        </Link>
        
    </div>

    
  )
}
export default Cart

