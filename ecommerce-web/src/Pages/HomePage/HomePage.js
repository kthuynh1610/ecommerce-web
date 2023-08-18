import React from 'react'
import SlideShow from './SlideShow/SlideShow'
import './HomePage.css';
import {Items} from '../../Data/AllDatas'
import { Link } from 'react-router-dom';
import Gallerry from '../../Components/Galerry/Gallerry';
const HomePage = (Item) => {

  return (
    <div className='container-Home'>
        <SlideShow/>
        <div className='container-item'>
            <h1>Ready to wear</h1>
            <div className='dot'></div>
            <p>View more</p>
            <div class="ItemList">
              {Items.map((Item)=>{
                  return <div key={Item.id}>
                    <div className='card'>
                      <Link to={`/product/${Item.id}`}>
                      <img alt="Item.des" 
                      onMouseOver={e => (e.currentTarget.src = Item.back)}
                      onMouseOut={e => (e.currentTarget.src = Item.front)}
                      src={Item.front} />
                      <p>{Item.des}</p>
                      <h5>{Item.price}</h5>
                      </Link>
                    </div>
                  </div>
                })}
            </div>
        </div>
        <Gallerry/>
    </div>
  )
}

export default HomePage