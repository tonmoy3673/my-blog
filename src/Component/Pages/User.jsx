import { Link } from "react-router-dom";

const User = ({user,handleRemove}) => {
    const {id,name,email}=user;
    return (
        <div className="text-center">
            <p>ID : {id}</p>
            <h2 className="py-1 text-lg">Name : {name} </h2>
            <h2 className="text-base">Email : {email}</h2>
            <div className="py-2 mt-1 text-center flex items-center justify-center gap-2 lg:gap-6">
            <Link to={`/user/${id}`}>
            <button className="bg-blue-500 hover:bg-amber-400 p-2 text-sm rounded-md text-white hover:text-black">Details</button></Link>
            <button onClick={()=>handleRemove(id)} className="bg-red-500 hover:bg-amber-400 p-2 text-sm rounded-md text-white hover:text-black">
                Remove 
            </button>
            </div>
        </div>
    );
};

export default User;