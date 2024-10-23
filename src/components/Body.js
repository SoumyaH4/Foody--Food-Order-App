import RestrauntCard from "./RestrauntCard.js";
import {useState, useEffect} from "react";
// import restList from "../utils/mockData.js";
import Shimmer from "./Shimmer.js";
import {Link} from "react-router-dom";
import { BODY_URL } from "../utils/constants.js";
// import useBody from "../utils/useBody.js";
// import useOnlineStatus from "../utils/useOnlineStatus.js";


const Body= () => {
// state variables using useState Hook
const [restrauntLists, setRestrauntLists] = useState([]);
const [filteredRestraunts, setFilteredRestraunts] = useState([]);
const [searchText, setSearchText] = useState("");

// console.log(restrauntLists);

useEffect(()=>{
fetchData();
}, []);
 const fetchData = async () => { 
  const data = await fetch(BODY_URL);
  const json = await data.json();
  // console.log(json);
  setRestrauntLists(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestraunts(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 };



  // Tis is normal javascript variable
// let restrauntLists = [ here some restraunt lists ]

  //  if (restrauntLists.length === 0){
  //   return
  //     <Shimmer/>
  //  };

 //****************if ur write code for onlinestatus**** Tis is the ex (but this is not working)***************

 // const onlineStataus = useOnlineStatus();
//  if (onlineStataus===false) return (<h1>Youre offline!</h1>);

  if (restrauntLists.length === 0) {
    return <Shimmer/>;
  }
  
  
  return(
  <div className="body  bg-pink-50">
    <div className="filter m-2 p-4 text-center">
    
    <input type="text" className="search-box m-2 p-2 px-12 bg-teal-100 rounded-lg" value= {searchText} 
      onChange={(e)=>{
        setSearchText(e.target.value)
      }}
      placeholder ="Search"
    />
       <button className=" search-txt m-2 px-2  bg-teal-100 rounded-lg text-mg font-bold"
        onClick={()=>{
           //filter the restraunt lists
       const filteredRestraunts = restrauntLists.filter((rest)=> rest?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));

       setFilteredRestraunts(filteredRestraunts);
       
        // console.log("search text")
      }
      }>
      Search
      </button>
    
    <button className="search-btn  ml-20 px-2 py-2  bg-teal-100 rounded-md font-bold"
    onClick = {()=>{
      
     let filterdList = restrauntLists.filter(
          (rest) => rest?.info?.avgRating > 4.5
        );
        console.log(restrauntLists);
        setRestrauntLists(filterdList);
        // This is state variables  
    }
    }
    >
    Top Rated Restraunts</button>
    </div>
   
    <div className="rest-container flex flex-wrap" > 
    {/* <RestrauntCard restData={restList[0]}/> 
    <RestrauntCard restData={restList[1]}/> 
    <RestrauntCard restData={restList[2]}/> 
    <RestrauntCard restData={restList[3]}/> 
    <RestrauntCard restData={restList[4]}/> 
    <RestrauntCard restData={restList[5]}/> 
    {/* <RestrauntCard restData={restList[6]}/>  */}   
    {/* ******************* this is not good practice bcz this method is preferable for small no. of restraunts. in some cases we dont know the no. of rests in that cases this is not good method*********************  TO AVOID THIS ISSUE WE USE MAP() FUNCTION */}
      {/* {
        restrauntLists.map((restraunt) => (
          <RestrauntCard key={restList?.info?.id} restData={restraunt}/>
          ))

      } */}

      {
  filteredRestraunts.map((restraunt) => (
    <Link 
    key={restraunt?.info?.id} to={"/restraunts/"+restraunt?.info?.id}>
    <RestrauntCard restData={restraunt} />
    </Link>
  ))
} 
    </div>
  </div>    
  )
};


export default Body;