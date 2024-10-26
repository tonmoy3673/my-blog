import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
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
            }
        ]
    }
])