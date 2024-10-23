import {useEffect, useState} from "react";
import { MENU_API, END_API } from "./constants";

const useMenu = (restId) => {

const [restInfo, setRestInfo] = useState(null);
    
useEffect (()=>{
    fetchMenu();
},[]);

const fetchMenu = async () => {
const data = await fetch(MENU_API+restId+END_API);
const json =await data.json();
setRestInfo(json.data);
}

    return restInfo;
}
export default useMenu;