import styled from "styled-components";
import { darkColor3, darkText } from "../constants";
import Logo from "./Logo";
import NavButton from "./NavButton";
import profileIcon from "../assets/profile-icon.svg?react";
import cogIcon from "../assets/cog-icon.svg?react";
import { useContext } from "react";
import { PageContext } from "../App";

const NavContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row-reverse;
    place-items: center;
    width: 100vw;
    height: 5rem;
    top: 0;
    left: 0;
    background-color: ${darkColor3};
    box-shadow: 0 0.5rem 1rem ${darkColor3};
`

function NavBar() {
    const pageContext = useContext(PageContext);
    if (!pageContext) {
        throw new Error("404");
    }
    const { currentPage } = pageContext;

    return (
        <NavContainer>
            <NavButton
                id="profile"
                svg={profileIcon}
                color={darkText}
            />
            <NavButton
                id="settings"
                svg={cogIcon}
                color={darkText}
                animation={"rotate(90deg)"}
            />
            <NavButton
                id="content"
                text={currentPage === "content" ? "RETURN" : "CONTENT"}
                color={darkText}
            />
            <Logo />
        </NavContainer>
    )
}

export default NavBar;