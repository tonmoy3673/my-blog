import { useLoaderData } from "react-router-dom";
import User from "./User";


const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div className="py-8 md:py-16">
            <h2 className="text-center text-2xl font-semibold">Users Section</h2>
            <div className="">
                {
                    users && users.map((user)=><User user={user} key={user.id}></User>)
                }
            </div>
        </div>
    );
};

export default Users;