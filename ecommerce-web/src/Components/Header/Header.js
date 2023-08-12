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
            <h1><a href='/' style={{textDecoration:'none', color:"black"}}>Oiduts Studio</a></h1>
            <div>
                <i class="fa-solid fa-magnifying-glass" style={{color: " #000000"}}></i>
                <i class="fa-regular fa-user" style={{color: " #000000"}}></i>
                <i class="fa-solid fa-cart-shopping" onClick={() => setShowCart(true)} style={{color: " #000000", cursor:"pointer"}}/>
                {showCart && <Cart/>}
            </div>
        </div>
        <ul>
            <li><Link href="#">New Arrival</Link></li>
            <li><Link href="#">All Products</Link></li>
            <li><Link href="#">Sales</Link></li>
            <li><Link href="#">Spring Summer 2023</Link></li>
        </ul>
    </div>
  )
}

export default Header