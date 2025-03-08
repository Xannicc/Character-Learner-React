import styled from "styled-components";

const IconSVG = styled.svg`
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    will-change: transform;

    &:hover {
        transform: scale(1.4);
    }
`;

interface SVGComponentProps {
    SVG?: React.FC<React.SVGProps<SVGSVGElement>>;
    color?: string
}


const SVGComponent: React.FC<SVGComponentProps> = ({ SVG, color }: SVGComponentProps) => {
    return (
        <IconSVG
            as={SVG}
            color={color}
        />
    )
}

export default SVGComponent;