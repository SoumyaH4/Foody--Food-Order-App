 import { CDN_URL } from "../utils/constants.js";
const RestrauntCard =(props) => {
    const { restData }=props;
    // console.log(restData);


    const {name, costForTwo, cuisines, avgRating} = restData?.info ;
   
  return(
       <div className="rest-card m-2 p-2 w-[200px] hover:scale-110">
       
        <img className="rest-logo h-36 w-52 rounded-lg" 
        alt="rest-logo" 
         src={
            CDN_URL+restData?.info?.cloudinaryImageId 
        }  
            />                  
        
            <h2 className="font-bold text-lg">{name}</h2>
            <h6 className="nonitalic text-gray-600">
             {cuisines.slice(0, 2).join(", ")}
             {cuisines.length > 2 && " ..."}
            </h6>
            <h4 className="font-bold">{avgRating}</h4> 
            <h4 className="text-sm">{costForTwo}</h4> 
                
           </div>
    );
    
  }
  
  export default RestrauntCard;