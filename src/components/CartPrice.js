import React from "react";
import { useSelector } from "react-redux";


const CartPrice = ()=>{
  const cartItems = useSelector((store)=>store.cart.items);
  
  const totalPrice = cartItems.reduce((total,item) => {
    const price = item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100;
    return total + price * item.quantity;
  },0);
    
  return(
    <div className="total-price text-center font-bold text-2xl my-4">
    Total Price: ₹{totalPrice.toFixed(2)} {/* Display with 2 decimal places */}
  </div>
    
    )
}
export default CartPrice;