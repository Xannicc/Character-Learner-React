import styled from "styled-components"
import "../index.css"

const LogoButton = styled.button`
    position: absolute;
    border: none;
    background-color: rgba(0,0,0,0);
    left: clamp(1em, 2%, 2em);
    font-size: 170%;
    line-height: 0;
    font-family: "onsen-japan";
    padding-top: 0.35em;
    transition: all 0.2s ease-in-out;
    width: 4rem;
    aspect-ratio: 1;
    text-align: center;

    &:hover {
        opacity: 75%;
        cursor: pointer;
        transform: scale(1.2);
    }

    &:active {
        transform: translateY(0.2em) scale(1.2);
    }
`

function Logo() {
    return (
        <LogoButton>TK</LogoButton>
    )
}

export default Logo