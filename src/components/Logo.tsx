import styled from "styled-components"
import { darkColor3 } from "../constants"
import "../index.css"

const LogoButton = styled.button`
    position: absolute;
    border: none;
    background-color: ${darkColor3};
    left: clamp(10px, 2%, 20px);
    font-size: 170%;
    line-height: 0;
    font-family: "onsen-japan";
    padding-top: 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
        opacity: 75%;
        cursor: pointer;
    }

    &:active {
        transform: translateY(2px);
    }
`

function Logo() {
    return (
        <LogoButton>TK</LogoButton>
    )
}

export default Logo