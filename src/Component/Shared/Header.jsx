import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between pb-6 lg:pb-16">
            <div>
               <Link to='/home' className="text-2xl font-semibold hover:text-amber-400"> BlogPage</Link>
            </div>
            <ul>
                <Link to='/home' className="lg:me-8 me-3 text-base text-blue-500 font-semibold hover:text-amber-400">Home</Link>
                <Link to='/about' className="lg:me-8 me-3 text-base text-blue-500 font-semibold hover:text-amber-400">About</Link>
                <Link to='/users' className="lg:me-8 me-3 text-base text-blue-500 font-semibold hover:text-amber-400">Users</Link>
                <Link to='/posts' className="lg:me-8 me-3 text-base text-blue-500 font-semibold hover:text-amber-400">Posts</Link>
            </ul>
        </div>
    );
};

export default Header;