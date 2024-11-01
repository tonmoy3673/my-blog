import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Post from "./Post";


const Posts =()=>{
    const posts = useLoaderData();
    const [viewPosts,setViewPosts]= useState([]);
    const [postLength,setPostLength] = useState(4)
    console.log(posts);

    useEffect(()=>{
        setViewPosts(posts)
    },[posts])
 
   
    return (
        <div className="py-6 lg:py-10 mb-3">
            <h2 className="text-center text-xl md:text-2xl">Total Posts : {posts.length}</h2>
            <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center mt-2 lg:mt-4 text-center gap-8">
                {
                viewPosts && viewPosts.slice(0,postLength).map((post)=><Post post={post} key={post.id}/>)
                }
            </div>
            <div className="mt-2 lg:mt-3 text-center">
                <button  className="bg-blue-500 hover:bg-amber-400 p-2 text-sm rounded-md text-white hover:text-black">Show More</button>
            </div>
        </div>
    )
};

export default Posts;