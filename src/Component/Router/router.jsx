import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../Pages/About";
import Main from "../Shared/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            
        ]
    }
])