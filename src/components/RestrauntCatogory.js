import { VscTriangleDown } from "react-icons/vsc";
import {useState} from "react";
import ItemLists from "./ItemLists.js"

const RestrauntCategory = ({data, showItems, setShowIndex})=>{
   
    const clickedCategory = () => {
        setShowIndex();
    }
    return(
       <div>
       <div className="header w-6/12 mx-auto my-4 bg-orange-50 shadow-lg p-4 border-b-8" >

        <div className="flex justify-between" onClick={clickedCategory}>
         <span className= "font-bold text-lg"> {data.title} ({data?.itemCards?.length})</span>
         <span className="text-center"> <VscTriangleDown /> </span>
        </div>
       
       { showItems && <ItemLists items={data?.itemCards}/>}

       </div>
       </div>
    )
}
 export default RestrauntCategory;