import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemLists = ({items}) => {
    console.log(items);
const dispatch = useDispatch();   

    const handleAddItems = (item) =>{
     dispatch(addItem(item));
    };

    return(
        <div>
         {items.map((item)=>(
            <div
                key={item?.card?.info?.id}
                className="p-2 m-2  border-b-2 border-orange-100 text-left flex justify-between"
                >  
                 
                <div className="w-9/12">
                <div className="py-2 ">
                    <span className="  font-bold">{item?.card?.info?.name}</span>
                   
                    <span className="font-bold"> ₨. 
                    {item?.card?.info?.price
                     ? item?.card?.info?.price/100 :
                     item?.card?.info?.defaultPrice/100}
                    </span>
                   
                </div>
                <p className="text-sm">
                    |{item?.card?.info?.description}
                </p>
               </div>
               <div className="w-3/12 p-4 h-auto">
                 <div className="absolute ">
                 {/* mx-[28px] my-[104px] */}
                 <button className="py-2 px-2 border-2 shadow-xl bg-white text-green-600 font-bold rounded-lg hover:bg-orange-100" 
                 onClick={()=>handleAddItems(item)}
                 >
                 ADD
                 </button>
                 
                 </div>
                 <img  className="rounded-lg" src = {CDN_URL + item?.card?.info?.imageId}/> 
                </div>
            </div>
         ))}
        </div>
    )
}
 
export default ItemLists;