import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id,name,email}=user;
    return (
        <div className="text-center">
            <p>ID : {id}</p>
            <h2 className="py-1 text-lg">Name : {name} </h2>
            <h2 className="text-base">Email : {email}</h2>
            <div className="py-2 mt-1 text-center">
            <Link to={`/user/${id}`}>
            <button className="bg-blue-500 hover:bg-amber-400 p-2 text-sm rounded-md">Details</button></Link>
            </div>
        </div>
    );
};

export default User;