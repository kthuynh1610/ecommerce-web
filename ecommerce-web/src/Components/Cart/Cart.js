
import React, { useRef }from 'react'
import { useCartProvider } from '../CartProvider/CartContext'
import './Cart.css'

const Cart = () => {

  const cartRef= useRef();
  
  const {totalPrice, totalQty,onRemove, cartItem, setShowCart} = useCartProvider();
  function displayCart(){
    return(
      <>
        {cartItem.map((cartProduct)=>{
          return<div className='cartItem' key={cartProduct.id}>
              <div className='itemDetail'>
                <img src={cartProduct.front} alt={cartProduct.des}/>
                <div className='cartItem-right'>
                  <div className='des'>{cartProduct.des}</div>
                  <div className='quantity'>{cartProduct.quantity}</div> 
                </div>
              </div>
              <div className='delete'>
                <button onClick={()=>onRemove(cartProduct.id)}><i class="fa-solid fa-trash"></i></button>
              </div>
          </div>
        })}
      </>
    )
  }
  return (
    <div className='containerCart' ref={cartRef}>
        <button style={{width:'15px', cursor:'pointer'}} type='button' onClick={()=> setShowCart(false)}>X</button>
        <div className='cart-top'>
          <span>Your Cart</span>
          <div className='price'>Total : {totalPrice}</div>
        </div>
        {cartItem.length>0 ? displayCart() : <div className='empty'> <i class="fa-solid fa-cart-shopping fa-2xl"></i><p>Cart Emtpy</p></div>}
        <div className='checkout'>
          <button>Check Out</button>
        </div>
    </div>
  )
}

export default Cart