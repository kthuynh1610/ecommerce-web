import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider =({children})=>{
      const [cartItem, setCartItem] = useState([])
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
      // useEffect(() => {
      //       const json = localStorage.getItem('cartItem')
      //       const savedCart = JSON.parse(json)
      //       if(savedCart){
      //             setCartItem(savedCart)
      //       }
      //     }, []);
        
      //   useEffect(() => {
      //       const json = JSON.stringify(cartItem);
      //       localStorage.setItem("cartItem", json);
      //   }, [cartItem]);

      // {id: 1, quantity :1}
      const addToCart = (Item, quantity)=>{
            const checkProduct = cartItem.find((product)=> product.id === Item.id)
                  setTotalPrice((prevTotalPrice)=>prevTotalPrice + prevTotalPrice*quantity)
                  setTotalQty((prevTotalQty)=> prevTotalQty + quantity)
            if(checkProduct){
                 const updateCart = cartItem.map((cartProduct)=>{
                  if(cartProduct.id === Item.id)return{
                        ...cartProduct,
                        quantity: cartProduct.quantity + quantity
                  }
                 })
                 setCartItem(updateCart);
            }else{
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
            setShowCart
      }


      return(
            <CartContext.Provider value ={contextValue}>
                  {children}
            </CartContext.Provider>
      )
}
export const useCartProvider = () => useContext(CartContext)

