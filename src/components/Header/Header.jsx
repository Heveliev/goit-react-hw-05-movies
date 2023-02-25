import { LinkNav, Nav, HeaderSt } from "./Header.styled";


export const Header = () => {
    return (<>
        <HeaderSt>
        <Nav>
            <LinkNav to='/' end>Home</LinkNav>
            <LinkNav to='/movies'>Movies</LinkNav>
            </Nav>
        </HeaderSt>
        </>
    )
}