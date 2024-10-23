import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
// import { BsCart4 } from "react-icons/bs";



 const Header = () => {
  // let btnName = "login";                                 //This is normal JS

  let [btnName, setbtnName] = useState("login");

  const cartItems = useSelector((store) =>store.cart.items ||[]);
  console.log(cartItems);
  
  return(
  <div className="Header flex bg-orange-100 justify-between shadow-lg">
      <div className="logo-container">
          <img className="logo w-24 my-2 p-2" src={LOGO_URL}/>
           </div>
      <div className="navbar flex items-center">
        <ul className="flex p-6 px-36">

          <li className="px-8 font-bold text-lg"> 
          <Link to="/">Home</Link> </li>
          <li className="px-8 font-bold text-lg">
          <Link to="/about">About</Link>
          </li>
          <li className="px-8 font-bold text-lg">
          <Link to="/contact">Contact</Link> 
          </li> 
          <li  className="px-8 pr-40 font-bold text-lg">
          <Link to="/cart">Cart({cartItems.length })
          {/* <span className="cart-img"><BsCart4 /></span> */}
          </Link>
          </li>
          <div className="text-end">
          <button className="login mx-2 px-4 rounded-xl bg-blue-800 text-white font-bold" 
          onClick = {()=>{
          btnName==="login" ? setbtnName("logout") : setbtnName("login");
           }
        }
        >{btnName}</button>
        </div>
        </ul>
        
      </div>
  </div>
  )
}
export default Header;