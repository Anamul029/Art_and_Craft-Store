import { Outlet } from "react-router-dom";

// import Footer from "./Footer";
import Navbar from "./Navbar";


const Root = () => {
    return (
        <div>
            <div className="w-4/5 container mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            {/* <Footer></Footer> */}
        </div>

    );
};

export default Root;