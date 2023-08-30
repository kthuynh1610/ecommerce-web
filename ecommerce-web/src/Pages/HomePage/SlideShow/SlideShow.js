import React, { useEffect, useState } from 'react'
import photo1 from '../../../Assets/slideshow_1.jpeg';
import photo2 from '../../../Assets/slideshow_2.jpeg';
import photo3 from '../../../Assets/slideshow_3.jpeg';
import photo4 from '../../../Assets/slideshow_4.jpeg';
import './SlideShow.css';
const delay = 2500;
const photos =[
  {
    id: 1, 
    src: photo2
  },
  {
    id: 2, 
    src: photo3
  },
  {
    id: 3, 
    src: photo4
  }
]
const SlideShow = () => {
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    setTimeout(
      ()=>
       setIndex((prevIndex)=>
        prevIndex === photos.length -1 ? 0 : prevIndex +1
      ),
      delay
    )
    return()=>{};
  }, [index]);
  return (
    <div className='container'>
      <div className='slider'
        style={{transform: `translate3d(${-index *100}%,0 ,0)`}}
      >
        {photos.map((photo)=>{
          return <div className='slide' key={photo.id}>
            <img src={photo.src} alt={photo.src}/>
          </div>
        })}
      </div>
    </div>
  )
}

export default SlideShow