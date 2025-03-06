import React, { useContext } from "react"
import styled from "styled-components"
import { darkColor3, darkText } from "../constants";
import { hexToRGB } from "../utils";
import { PageContext } from "../App";
import "../index.css"

const CircleButton = styled.button <{ color?: string, animation?: string, text?: string }>`
    height: 70%;
    aspect-ratio: 1;
    border-radius: 50%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${darkColor3};
    color: ${({ color }) => color || { darkText }};
    margin: clamp(10px, 2%, 20px);
    margin-left: 0;
    transition: all 0.2s ease-in-out;
  
    &:hover {
        transform: ${({ animation }) => animation || ""};
        background-color: ${({ text }) => (text ? "transparent" : `rgba(${hexToRGB(darkText)}, 0.3)`)};
        cursor: pointer;
    }

    &:active {
        transform: translateY(3px);
    }

`;

const IconSVG = styled.svg`
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    will-change: transform;

    &:hover {
        transform: scale(1.4);
    }
`;

const ButtonText = styled.span<{ animation?: string }>`
    font-family: outfit;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    padding: 0 10% 0 10%;
    transition: all 0.2s ease-in-out;
    font-size: 110%;
    margin-right: 1rem;

    &:hover {
        font-size: 120%;
        transform: ${({ animation }) => animation || ""};
        background-color: rgba(${hexToRGB(darkText)}, 0.3);
        cursor: pointer;
    }
`

interface NavButtonProps {
    id: "profile" | "content" | "settings";
    svg?: React.FC<React.SVGProps<SVGSVGElement>>;
    text?: string;
    color?: string;
    animation?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ id, svg: SVGComponent, text, color, animation }: NavButtonProps) => {
    const pageContext = useContext(PageContext);
    if (!pageContext) {
        throw new Error("404");
    }

    const { currentPage, setCurrentPage } = pageContext;

    const handleNavButtonClick = () => {
        if (id === currentPage) {
            setCurrentPage("main");
        }
        else if (id === "profile") {

        }
        else {
            setCurrentPage(id);
        }
    }

    return (
        <CircleButton
            color={color}
            animation={animation}
            text={text}
            onClick={handleNavButtonClick}
        >
            {SVGComponent ? (
                <IconSVG
                    as={SVGComponent}
                    color={color}
                />
            ) : (
                <ButtonText
                    animation={animation}
                >
                    {text}
                </ButtonText>
            )}
        </CircleButton>
    )
}

export default NavButton