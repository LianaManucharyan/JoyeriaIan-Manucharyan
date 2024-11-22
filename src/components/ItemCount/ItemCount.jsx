import { useState } from "react"
import "./itemcount.css"

const ItemCount = ({ stock, addProduct }) => {
  const [count, setCount] = useState(1)

  //restar 1 al contador
  const handleClickSubtract = () => {
    if( count > 1 ){
      setCount( count - 1 )
    }
  }

  const handleClickAdd = () => {
    if( count < stock ){
      setCount( count + 1 )
    }
  }

  return (
    <div className="counter-container">
        <button className="counter-button" onClick={handleClickSubtract}>-</button>
        <p className="counter-display">{count}</p>
        <button className="counter-button" onClick={handleClickAdd}>+</button>
      <button className="add-to-cart-button" onClick={() => addProduct(count)}>Agregar producto al carrito</button>
    </div>
  )
}
export default ItemCount