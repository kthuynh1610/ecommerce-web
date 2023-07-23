import React from 'react'
import "./Header.css";
const Header = () => {
  return (
    <div className='container-header'>
        <div className='Logo'>
            <div className='dropdown'>
                <i class="fa-solid fa-bars" style={{color: " #000000"}}></i>
            </div>
            <h1>Oiduts Studio</h1>
            <div>
                <i class="fa-solid fa-magnifying-glass" style={{color: " #000000"}}></i>
                <i class="fa-regular fa-user" style={{color: " #000000"}}></i>
                <i class="fa-solid fa-cart-shopping" style={{color: " #000000"}}/>
            </div>
        </div>
        <ul>
            <li>New Arrival</li>
            <li>All Products</li>
            <li>Sales</li>
            <li>Spring Summer 2023</li>
        </ul>
    </div>
  )
}

export default Header