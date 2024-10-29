import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


const Main = () => {
    return (
        <div className="px-16 py-8">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;