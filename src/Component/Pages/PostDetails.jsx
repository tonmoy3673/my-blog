import { Link, useLoaderData } from "react-router-dom";

const PostDetails =()=>{
    const post= useLoaderData();
    const {body,id,title,userId}=post;

    return (
        <div className="text-center mt-4 py-2">
            <h2 className="font-semibold text-blue-500">ID : {id}</h2>
            <h2>userID : {userId}</h2>
            <h2>Title : {title}</h2>
            <h3>Description : {body}</h3>
            <Link to='/posts'>
            <h2 className="text-xl underline">Back </h2>
            </Link>
        </div>
    )
};

export default PostDetails;