import { Outlet } from "react-router-dom";
import { HeaderContainer } from "../header/container";

export const Layout = () => {
    return (
        <>
            <HeaderContainer />
            <Outlet />
        </>
    );
}