import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../Pages/About";
import Posts from "../Pages/Posts";
import UserDetails from "../Pages/UserDetails";
import Users from "../Pages/Users";
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
            {
                path:'/users',
                element:<Users/>,
                loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
            },
            {
                path:'user/:id',
                element:<UserDetails/>,
                loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            },
            {
                path:'/posts',
                element:<Posts/>,
                loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')
            }
            
        ]
    }
])