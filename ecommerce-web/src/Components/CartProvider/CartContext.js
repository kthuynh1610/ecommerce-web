import { createContext, useContext, useState, useEffect } from "react";
// import { Items } from "../../Data/AllDatas";

const CartContext = createContext();

export const CartProvider =({children})=>{
      // const [cartItem, setCartItem] = useState([])

      const [cartItem, setCartItem] = useState(() => {
            const json = localStorage.getItem('cartItem');
            return json ? JSON.parse(json) : [];
        });
      const [qty, setQty] = useState(1);
      const [showCart, setShowCart] = useState(false);
      const [totalQty, setTotalQty] = useState(0);
      const [totalPrice, setTotalPrice] = useState();
      const increaseQty = ()=>{
            setQty(prevQty => prevQty+1)
      }
      const decreaseQty = () =>{
            setQty((prevQty)=>{
                  if(prevQty - 1< 1)return 1
                  return prevQty-1
            })
      }
      useEffect(() => {
            const json = localStorage.getItem('cartItem');
            const savedCart = JSON.parse(json);
            if (savedCart) {
                setCartItem(savedCart);
            }
        }, []);

      useEffect(() => {
            const json = JSON.stringify(cartItem);
            localStorage.setItem("cartItem", json);
      }, [cartItem]);

      // {id: 1, quantity :1}
      const addToCart = (Item, quantity)=>{
            setTotalPrice((prevTotalPrice)=>prevTotalPrice + prevTotalPrice*quantity)
            setTotalQty((prevTotalQty)=> prevTotalQty + quantity)
            const checkProduct = cartItem.find((product)=> product.id === Item.id)
            if(checkProduct){
                  const updateCart = cartItem.map((product)=>{
                  if(product.id === Item.id)return{
                        ...product,
                        quantity: product.quantity + quantity,
                  }
                  return product
                 })
                 setCartItem(updateCart);
                 setQty(1);
            }
            else{
                  Item.quantity = quantity;
                  setCartItem([...cartItem, {...Item}])
      }  
      }

      const contextValue = {
            showCart,
            qty,
            totalPrice,
            increaseQty,
            decreaseQty,
            totalQty,
            addToCart,
            setShowCart,
            setCartItem,
            cartItem
      }


      return(
            <CartContext.Provider value ={contextValue}>
                  {children}
            </CartContext.Provider>
      )
}
export const useCartProvider = () => useContext(CartContext)

