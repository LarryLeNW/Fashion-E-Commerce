import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

let Public = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Public;
