import {ABOUT_URL} from "../utils/constants.js";

const About =()=>{
    return(
       
    <div className=" bg-pink-50 n">
   
        <div className=" p-4 m-4 text-center flex flex-col items-center justify-center h-full ">
        <h2 className=" about text-center text-3xl font-bold">About Foody </h2>
        </div>
        
        <div className= "about m-8">
        <p className="text-center text-lg ">
        <b>Foody</b> is your go-to platform for discovering amazing food around you. Whether you're craving something familiar or in the mood to try something new, our app makes it effortless to <b>search, explore, and add</b> dishes to your cart. With a clean design and smooth navigation, Foody is built for food lovers who want to focus on what matters most—<b>great food and a delightful experience</b>.
        </p>
        </div>
    </div>
    )
}

export default About;