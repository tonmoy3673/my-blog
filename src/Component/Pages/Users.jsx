import { useLoaderData } from "react-router-dom";
import User from "./User";


const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div className="py-8 md:py-10 pb-5">
            <h2 className="text-center text-2xl font-semibold">Users Section</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 py-4 mt-4">
                {
                    users && users.map((user)=><User user={user} key={user.id}></User>)
                }
            </div>
        </div>
    );
};

export default Users;