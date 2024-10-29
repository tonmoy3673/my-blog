import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);
    return (
        <div>
            
        </div>
    );
};

export default UserDetails;