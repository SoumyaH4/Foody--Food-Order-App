import {useState, useEffect} from "react";

const useOnlineStatus = () =>{
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=>{
    window.addEventListener("Offiline", ()=>{
    setOnlineStatus(false);    
    });
    window.addEventListener("Online", () =>{
        setOnlineStatus(true);
    });
    },[]);

    return onlineStatus;
}
export default useOnlineStatus;