import { Outlet, useLocation } from "react-router-dom";
import Nav from "../layouts/nav";
import Footer from "../layouts/footer";

const Layout = () => {
    const location = useLocation();
    const key = location.key;

    return (
        <>
            <Nav />
            <main>
                <Outlet />
            </main>
            <Footer key={key} />
        </>
    )
};

export default Layout;