import { Outlet } from "react-router-dom";
import { LinkNav, Nav, HeaderSt } from "./Header.styled";
import { Suspense } from "react";


export const Header = () => {
    return (<>
        <HeaderSt>
        <Nav>
            <LinkNav to='/' end>Home</LinkNav>
            <LinkNav to='/movies'>Movies</LinkNav>
            </Nav>
        </HeaderSt>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
            </Suspense>
        </>
    )
}