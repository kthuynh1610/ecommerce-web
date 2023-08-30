import React, {useState, useEffect } from 'react'
import {Items} from '../../Data/AllDatas'; 
import { useParams } from 'react-router';
import './Product.css';
import Gallerry  from '../Galerry/Gallerry.js';
import {useCartProvider} from '../CartProvider/CartContext';
const Product = () => {
  const {id} = useParams();
  const Item = Items.filter((Item) => Item.id === parseInt(id));
  const [image, setImage] = useState(Item[0].front)
  const {qty, decreaseQty, increaseQty, addToCart} = useCartProvider()
  const changeImage= (e) =>{
    setImage(e.target.src)
  }
  return(
    <div className='containerProduct'>
        <div className='route'>
          <p>Home / </p>
          <p style={{textTransform: 'capitalize'}}> {Item[0].catergory} / </p>
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
              <h4>{Item[0].price}$</h4>
              <div className='addItem'>
                <h1>Quantity: </h1>
                <button onClick={decreaseQty}>-</button>
                <h1>{qty}</h1>
                <button onClick={increaseQty}>+</button>
              </div>
              <div className='button'>
                <button 
                onClick={() => addToCart(Item[0], qty)}
                >
                  Add to cart
                </button>
                <button>Buy now</button>
              </div>
            </div>
          </div>
        </div>
        <div className='des'>
              <p>Detail: {Item[0].detail}</p>
        </div>
        <Gallerry/>
      </div>
  )
}

export default Product;