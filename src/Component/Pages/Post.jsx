import { Link } from "react-router-dom";


const Post = ({post,handleRemove}) => {
    const {body,id,title,userId}=post;
   
    return (
        <div className="">
            <h2 className="font-semibold text-blue-500">ID : {id}</h2>
            <h2>userID : {userId}</h2>
            <h2>Title : {title}</h2>

            <div className="pt-3 flex gap-3 items-center justify-center">
                <Link to={`/posts/${id}`}>
                <button  className="bg-blue-500 hover:bg-amber-400 p-2 text-sm rounded-md text-white hover:text-black">Details</button></Link>
                <button onClick={()=>handleRemove(id)} className="bg-red-500 hover:bg-amber-400 p-2 text-sm rounded-md text-white hover:text-black">Remove</button>
            </div>
        </div>
    );
};

export default Post;