import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Items } from '../../Data/AllDatas'
import './Cate.css';
const Categories = () => {
  const [item, setItem] = useState(Items)

  const filterItem = (currentCat) =>{
    const newItem = Items.filter((newCat)=>{
      return newCat.catergory === currentCat
    })
    setItem(newItem)
  }
  const menuValue = [...new Set(Items.map((value)=>value.catergory))]

  const Buttons = ({filterItem, setItem, menuValue}) =>{
    return(
      <div className='buttons'>
        <button onClick={()=>setItem(Items)}>
            All
          </button>
      {menuValue.map((Item)=>{
        return <div>
          <button onClick={()=>filterItem(Item)} >
            {Item}
          </button>
        </div>
      })}
          
      </div>
    )
  }
  const DisplayItem = ({item})=>{
    return<div className='itemList'>
      {item.map((Item)=>{
      return <div key={Item.id}>
        <div className='card'>
          <Link to={`/product/${Item.id}`}>
            <img alt="Item.des" 
            onMouseOver={e => (e.currentTarget.src = Item.back)}
            onMouseOut={e => (e.currentTarget.src = Item.front)}
            src={Item.front} />
            <p>{Item.des}</p>
            <h5>${Item.price}</h5>
          </Link>
        </div>
      </div>
    })}
    </div>
  }
  return (
    <div className='containerCate'>
      <div>
        <Buttons 
          filterItem={filterItem}
          setItem={setItem}
          menuValue={menuValue}
        />
      </div>
      <DisplayItem item={item}/>
    </div>

  )
}

export default Categories