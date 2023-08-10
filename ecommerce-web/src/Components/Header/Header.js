import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
const Header = () => {
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
                <i class="fa-solid fa-cart-shopping" style={{color: " #000000"}}/>
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