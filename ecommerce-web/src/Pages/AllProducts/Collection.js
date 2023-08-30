import React from 'react'
import './Collection.css';
import banner from '../../Assets/blog_image.jpg';
import {gallery2, gallery} from '../../Data/AllDatas';

const Collection = () => {
  return (
    <div className='containerBig'>
      <div className='heroBanner' >
        <h1>Spring</h1>
        <h1 style={{fontWeight:'400'}}>Summer 2023</h1>
        <img src={banner} alt='banner' style={{width:"100%"}}/>
      </div>
      <div className='grid'>
        <div className='collection1'>
         {gallery.map((item)=>{
          return <div className='itemGallery' key={item.id}>
              <img src={item.src} alt={item.alt}/>
            </div>
          })}
        </div>
        <div className='collection2'>
        {gallery2.map((item)=>{
          return <div className='itemGallery2' key={item.id}>
              <img src={item.src} alt={item.alt}/>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Collection