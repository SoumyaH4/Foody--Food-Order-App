import Shimmer from "./Shimmer.js";
import useMenu from "../utils/useMenu.js";
import {useState} from "react";
import { useParams } from "react-router-dom";
import RestrauntCategory from "./RestrauntCatogory.js";
import Cart from "./cart.js";

const Menu =()=>{
     const {restId}= useParams();
    // console.log(params)

    const restInfo = useMenu(restId);
    
    const [showIndex, setShowIndex] = useState(null);

      if(restInfo===null) return <Shimmer />
    
      const { name=" ", cuisines=[ ], costForTwoMessage=" " } =
      restInfo?.cards[2]?.card?.card?.info || {};
      
      const { itemCards } =
      restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || [];
    console.log(restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards );

   
    const itemCategories = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"]=== 
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") ;

      console.log(itemCategories);

    return(
        <div className="menu m-4 text-center "  > 
        <h2 className="restName m-4 font-bold text-xl">{ name }</h2>
        <h4 className="restCuisines italic">{ cuisines?.join(", ") } {costForTwoMessage}</h4>

        {itemCategories.map((category, index)=>(
          <RestrauntCategory
           key={category?.card?.title} 
           data={category?.card?.card}
           showItems={index===showIndex ? true : false} 
           setShowIndex={ () => setShowIndex(index)}
           />
        ))}
         
        
        {/* <h3>{<RestrauntCategory />}</h3> */}
        {/* <h3>Menu</h3>
        <ul>
         
        {itemCards?.map((item) => ( 
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} -{" Rs."}
            {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
        </ul> */}
        </div>
    ) 
  }
export default Menu;

