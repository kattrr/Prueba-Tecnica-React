import { Outlet } from "react-router-dom";
import Nav from "../components/nav";

const Layout = () => {
    return (
        <>
            <Nav />
            <main>
                <Outlet />
            </main>
        </>
    )
};

export default Layout;