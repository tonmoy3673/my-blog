import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {id,name,email,phone,username,website,address}=user;
    return (
        <div className="py-6 text-center text-lg">
            <p>ID : {id}</p>
            <h2 className="py-1">Name : {name}</h2>
            <h3>Email : {email}</h3>
            <p className="py-1">User Name : {username}</p>
            <h3>Phone : {phone}</h3>
            <h3 className="py-1">Address : {address.city}</h3>
            <h3>Website : {website}</h3>
            <div>
                
            </div>

        </div>
    );
};

export default UserDetails;