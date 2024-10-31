import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import User from "./User";


const Users = () => {
    const users = useLoaderData();
    const [usersView,setUsersView]=useState([]);
    const [usersLength,setUserLength] = useState(4)

    useEffect(()=>{
        setUsersView(users)
    },[users])
    console.log(usersView);
    return (
        <div className="py-8 md:py-10 pb-5">
            <h2 className="text-center text-2xl font-semibold">Users Section</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 py-4 mt-4">
                {
                    usersView && usersView.slice(0,usersLength).map((user)=><User user={user} key={user.id}></User>)
                }
            </div>
            <div className="text-center mt-2 lg:mt-4">
                <button className="bg-blue-500 hover:bg-amber-400 p-2 text-sm rounded-md">Show More</button>
            </div>
        </div>
    );
};

export default Users;