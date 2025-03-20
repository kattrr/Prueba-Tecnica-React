import { Outlet } from "react-router-dom";
import Nav from "../layouts/nav";

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