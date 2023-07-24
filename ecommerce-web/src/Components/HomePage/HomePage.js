import React from 'react'
import SlideShow from './SlideShow/SlideShow'
import './HomePage.css';
const HomePage = () => {
  return (
    <div className='container-Home'>
        <SlideShow/>
        <div className='container-item'>
            <h1>Ready to wear</h1>
            <div className='dot'></div>
            <p>View more</p>
            <div class="ItemList">
              
            </div>
        </div>
    </div>
  )
}

export default HomePage