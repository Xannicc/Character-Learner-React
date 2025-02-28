import styled from "styled-components";
import { darkColor3, darkText } from "../constants";
import Logo from "./Logo";
import NavButton from "./NavButton";
import profileIcon from "../assets/profile-icon.svg?react";
import cogIcon from "../assets/cog-icon.svg?react";

const NavContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row-reverse;
    place-items: center;
    width: 100vw;
    height: 5rem;
    top: 0;
    left: 0;
    background-color: ${darkColor3}
`

function NavBar() {
    return (
        <NavContainer>
            <NavButton
                svg={profileIcon}
                color={darkText}
            />
            <NavButton
                svg={cogIcon}
                color={darkText}
                animation={"rotate(90deg)"}
            />
            <NavButton
                text="CONTENT"
                color={darkText}
            />
            <Logo />
        </NavContainer>
    )
}

export default NavBar;