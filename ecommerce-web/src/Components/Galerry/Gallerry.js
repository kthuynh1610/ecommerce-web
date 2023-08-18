import React, { useState, useEffect } from 'react'
import {gallery} from '../../Data/AllDatas';
import './Gallery.css';
const delay = 2500;
const Gallerry = () => {
  const slideLeft = () =>{
    let slider = document.getElementById('slide')
    slider.scrollLeft = slider.scrollLeft - 235;
  }
  const slideRight = () =>{
    let slider = document.getElementById('slide')
    slider.scrollLeft = slider.scrollLeft +235;
  }
  
  
  return (
    <div className='containerGallery'>
      <h1>Gallery</h1>
      <div className='slash'></div>
      <div className="btns">
            <button title="scroll left" onClick={slideLeft}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button title="scroll right" onClick={slideRight}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
      </div>
      <div className='sliderShow' id="slide">
        {gallery.map((item)=>{
          return <div className='item' key={item.id}>
              <img src={item.src} alt={item.alt}/>
            </div>
          })}
      </div>
    </div>
  )
}

export default Gallerry