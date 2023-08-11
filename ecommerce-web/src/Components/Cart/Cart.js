
import React, { useRef }from 'react'
import { useCartProvider } from '../CartProvider/CartContext'
import './Cart.css'

const Cart = () => {

  const cartRef= useRef();
  
  const {totalPrice, totalQty, cartItem, setShowCart} = useCartProvider();

  return (
    <div className='containerCart' ref={cartRef}>
      <button type='button' onClick={()=> setShowCart(false)}>
        <span>Your Cart</span>
        <span>({totalQty} items)</span>
      </button>

    </div>
  )
}

export default Cart