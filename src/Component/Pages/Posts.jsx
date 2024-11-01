import { useLoaderData } from "react-router-dom";


const Posts =()=>{
    const posts = useLoaderData();
    console.log(posts);
 
    return (
        <div>
            <h2>This is Posts page</h2>
        </div>
    )
};

export default Posts;