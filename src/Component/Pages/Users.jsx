import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import User from "./User";


const Users = () => {
    const users = useLoaderData();
    const [usersView,setUsersView]=useState([]);
    const [usersLength,setUserLength] = useState(4);

    const handleRemove =(id)=>{
        const removeUser = usersView.filter((user)=> user.id !== id);
        setUsersView(removeUser);
    }

    useEffect(()=>{
        setUsersView(users)
    },[users])
    console.log(usersView);
    return (
        <div className="py-8 md:py-10 pb-5">
            <h2 className="text-center text-2xl font-semibold">Users Section</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 py-4 mt-4">
                {
                    usersView && usersView.slice(0,usersLength).map((user)=><User handleRemove={handleRemove} user={user} key={user.id}></User>)
                }
            </div>
            <div className="text-center mt-2 lg:mt-4">
                
                   {
                       users && usersLength <= users.length ? (
                            <button onClick={()=>setUserLength(usersLength+4)} className="bg-blue-500 hover:bg-amber-400 p-2 text-sm rounded-md">Show More</button>
                        ) : (
                            <p>No Data Available</p>
                        )
                    }
                
            </div>
        </div>
    );
};

export default Users;