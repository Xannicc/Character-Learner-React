import styled from "styled-components"
import "../index.css"

const LogoButton = styled.button`
    position: absolute;
    border: none;
    background-color: ${({ theme }) => theme.color.third};
    left: clamp(1em, 2%, 2em);
    font-size: 1.75rem;
    font-family: "onsen-japan";
    padding-top: 1.5em;
    transition: all 0.2s ease-in-out;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);

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