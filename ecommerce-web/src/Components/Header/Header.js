import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
import {useCartProvider} from '../CartProvider/CartContext';
import Cart from '../Cart/Cart';
const Header = () => {

  const {showCart, setShowCart, totalQty} = useCartProvider();

  return (
    <div className='container-header'>
        <div className='Logo'>
            <div className='dropdown'>
                <i class="fa-solid fa-bars" style={{color: " #000000"}}></i>
            </div>
            <h1><Link to='/' style={{textDecoration:'none', color:"black"}}>Oiduts Studio</Link></h1>
            <div className='cart'>
                <div className="cartDisplay" onClick={() => setShowCart(true)}>{totalQty}</div>
                <i class="fa-solid fa-cart-shopping" onClick={() => setShowCart(true)} style={{color: " #000000", cursor:"pointer"}}/>
                {showCart && <Cart/>}
            </div>
            
        </div>
        <ul>
            <li><Link to="/Categories">Categories</Link></li>
            <li><Link to="/All">Spring Summer 2023</Link></li>
        </ul>
    </div>
  )
}

export default Header