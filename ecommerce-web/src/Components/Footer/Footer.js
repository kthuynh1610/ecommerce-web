import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='container-footer'>
      <div className='itemListFooter'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to="Categories">Categories</Link></li>
          <li><Link to='/All'>Spring Summer 2023</Link></li>
        </ul>
      </div>
      <div className='copyright'>
        <h3>Copyright © 2023 Oiduts Studio</h3>
      </div>
    </div>
  )
}

export default Footer