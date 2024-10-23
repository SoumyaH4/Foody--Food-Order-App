import { useSelector, useDispatch } from "react-redux";
import { removeItem, addItem, clearCart } from "../utils/cartSlice"; // assuming you have a removeItem and addItem action
import { CDN_URL } from "../utils/constants";
import CartPrice from "./CartPrice.js";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleAddItems = (item) =>{
    dispatch(addItem(item));
   };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = (id) => {
    dispatch(clearCart(id));
  }

  if (cartItems.length === 0) {
    return <h2 className="text-center bg-pink-50 font-bold text-2xl p-4">Your cart is empty!</h2>;
  }

  return (
    <div className="cart-container m-4 bg-pink-50">
      <h2 className="text-center font-bold text-3xl mb-6">Your Cart</h2>
     <div className="  items-center ">
      {cartItems.map((item) => (
        <div className="border-b">
        <div key={item?.card?.info?.id} className="cart-item flex justify-between items-center p-2 w-9/12">
          
          <div className=" text-center w-3/4">
            <h3 className="font-bold text-xl">{item?.card?.info?.name}</h3>
            <p className="text-sm my-2">Price: ₹{item?.card?.info?.price ?  item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</p>
          
          </div>
          <div className="flex items-center">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="h-24 w-24 object-cover rounded-lg"
            />
             </div>
            <div className="button bg-teal-100 text-center rounded-lg">
            <button
              className="text-red-500 px-4 py-2 rounded-lg text-3xl font-bold"
              onClick={() => handleRemoveItem(item.card.info.id)}
            >
              -
            </button>
            <span className=" font-bold text-lg  my-2 ">{item.quantity}</span>
            <button 
             className="text-green-600 px-4 py-2 rounded-lg text-3xl font-bold" onClick={() => handleAddItems(item)}>
              +
            </button>
            
            </div>

            <div className="bg-red-100 rounded-lg">
            <button className="clear-cart my-2 py-2 px-4 font-bold text-sm" onClick={()=> handleClearCart(item.card.info.id)}>❌</button>
            </div>

          
            
          </div>

         
          </div>
        
      ))}
         <div className="total text-center m-4  p-2">
          <h3>{CartPrice()}</h3>
          </div>
      </div>
      </div>
  );
};

export default Cart;
