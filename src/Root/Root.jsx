import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const Root = () => {
    return (
        <div className="bg-primaryBg min-h-screen text-white ">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;