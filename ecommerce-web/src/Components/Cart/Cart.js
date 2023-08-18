
import React, { useRef }from 'react'
import { useCartProvider } from '../CartProvider/CartContext'
import './Cart.css'

const Cart = () => {

  const cartRef= useRef();
  
  const {totalPrice, totalQty, cartItem, setShowCart} = useCartProvider();
  console.log(cartItem)

  function displayCart(){
    return(
      <>
        {cartItem.map((cartProduct)=>{
          return<div key={cartProduct.id}>
            <div>
              <p>{cartProduct.des}</p>
              <p>{cartProduct.quantity}</p>
            </div>
          </div>
        })}
      </>
    )
  }
  return (
    <div className='containerCart' ref={cartRef}>
      <button type='button' onClick={()=> setShowCart(false)}>
        <span>Your Cart</span>
        <span>({totalQty} items)</span>
      </button>
        {cartItem.length>0 ? displayCart() : <p>Cart Emtpy</p>}
    </div>
  )
}

export default Cart