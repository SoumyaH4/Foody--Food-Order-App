 import {useEffect, useState} from "react";
 import { BODY_URL } from "../utils/constants.js";
 const useBody =() =>{

    const [restrauntLists, setRestrauntLists] = useState([]);
 const [filteredRestraunts, setFilteredRestraunts] = useState([]);
 useEffect (()=>{
    fetchData();
},[]);
   const fetchData = async ()=>{
    const data = await fetch(BODY_URL);
    const json = await data.json();
    setRestrauntLists(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestraunts(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }
    return filteredRestraunts;
}
export default useBody;