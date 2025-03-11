import styled, { useTheme } from "styled-components"
import SVGComponent from "./SVGcomponent"

const CircleButton = styled.button`
    margin-left: 0.75rem;
    width: 20%;
    aspect-ratio: 1;
    border-radius: 50%;
    border: none;
    right: 0;
    background-color: ${({ theme }) => theme.color.third};
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.shadow.text[30]};
    }

    &:active {
        transform: translateY(3px);
    }
`
//  background-color: rgba(${hexToRGB("#ff0000")}, 0.3);


interface ContentObjectButtonProps {
    SVG?: React.FC<React.SVGProps<SVGSVGElement>>
    type: "delete" | "favourite"
    onClick: () => void
    liked?: boolean
}

const ContentObjectButton: React.FC<ContentObjectButtonProps> = ({ SVG, type, onClick, liked }: ContentObjectButtonProps) => {
    const theme = useTheme();

    return (
        <CircleButton
            onClick={onClick}
        >
            <SVGComponent
                SVG={SVG}
                color={liked ? "yellow" : theme.color.text}
                animation={type === "favourite" ? "translateY(5px) translateX(-2px) rotate(15deg)" : ""}
            />
        </CircleButton>
    )
}

export default ContentObjectButton