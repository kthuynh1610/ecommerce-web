import React, { useState } from 'react'
import {Items} from '../Data/AllDatas'; 
import { useParams } from 'react-router';
import './Product.css';
const Product = () => {
  const {id} = useParams();
  const Item = Items.filter((Item) => Item.id === parseInt(id));
  const [image, setImage] = useState(Item[0].front)
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState(0)
  const changeImage= (e) =>{
    setImage(e.target.src)
  }
  const addItem = (count) =>{
    setCart(count)
  }
  return (
    <div className='containerProduct'>
      <div className='route'>
        <p>Home/ </p>
        <p>Ready To Wear/ </p>
        <p> {Item[0].des}</p>
      </div>
      <div>
        <div className='productDisplay'>
          <div className='left'>
            <div className='smallImg'>
                <img src={Item[0].front}
                onClick={changeImage}/>
                <img src={Item[0].back}
                onClick={changeImage}/>
            </div>
            <div className='bigImg'>
              <img src={image} alt={image}/>
            </div>
          </div>
          <div className='right'>
            <p>{Item[0].des}</p>
            <h4>{Item[0].price}</h4>
            <div className='addItem'>
              <button onClick={e => count === 1 ? 1 : setCount(count-1)}>-</button>
              <h1>{count}</h1>
              <button onClick={e => setCount(count+1)}>+</button>
            </div>
            <div className='button'>
              <button onClick={addItem}>Add to card</button>
              <button>Buy now</button>
            </div>
          </div>
        </div>
      </div>
      <div className='des'>
            <p>Detail: {Item[0].detail}</p>
      </div>
    </div>
  )
}

export default Product;