import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Shimmer from "./components/Shimmer.js";
import About from  "./components/About.js";
import Cart from "./components/cart.js"
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import Footer from "./components/Footer.js";
// import RestrauntMenu from "./components/RestrauntMenu.js";
import Menu from "./components/Menu.js";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";




const AppLayout = () => {
    return(
        <Provider store={appStore}>
        <div className="app">
            <Header/>
            <Outlet/>
            <Footer/>
            
        </div> 
        </Provider>
        );
};
const appRouter =createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path:"/contact",
                element: <Contact />,
            },
            {
                path:"/about",
                element: <About />,
            },
            {
                path: "/restraunts/:restId", 
                element: <Menu />,
                
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />,
    }
    
   
])

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);