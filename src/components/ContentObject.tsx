import styled from "styled-components";
import { ContentType, useGlobalContext } from "./GlobalProvider";
import ContentObjectButton from "./ContentObjectButton";
import binIcon from "../assets/bin-icon.svg?react";
import thumbIcon from "../assets/thumb-icon.svg?react";

const ObjectContainer = styled.div<{ selected: boolean }>`
    display: flex;
    flex-direction: column;
    min-width: 18rem;
    height: 12rem;
    border-radius: 2rem;
    margin: 1.5rem;
    background-color: ${({ theme, selected }) => selected ? theme.shadow.accent[70] : theme.color.third};
    box-shadow: 0 0.5rem 1rem ${({ theme }) => theme.shadow.third[80]};
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
        background-color: ${({ theme, selected }) => selected ? theme.color.accent : theme.shadow.text[10]};
    }

    &:active {
        transform: translateY(0.5em) scale(0.95);
    }
`

const ObjectButtonContainer = styled.div`
    margin-top: 3.5rem;
    bottom: 0;
    width: 100%;
`

const Title = styled.h1`
    margin: 0.8rem 1.5rem;
    font-size: clamp(1rem, 1.75rem, 2.25rem);
    word-wrap: break-word;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

interface ContentSectionProps extends ContentType {
    section: string
}

function ContentObject({ section, name, content, selected, liked }: ContentSectionProps) {
    //console.log("rendered Content Object", name);
    const {
        userContent,
        globalFunctions: {
            updateContent,
        }
    } = useGlobalContext();

    const handleDelete = () => {
    };

    const handleFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        updateContent({
            name: name,
            content: content,
            selected: selected,
            liked: !liked,
        });
    };

    const handleSelect = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        updateContent({
            name: name,
            content: content,
            selected: !selected,
            liked: liked,
        });
    };

    return (
        <ObjectContainer
            selected={selected}
            onClick={handleSelect}
        >
            <Title>
                {name}
            </Title>
            <ObjectButtonContainer>
                {section === "MY CONTENT" && (
                    <ContentObjectButton
                        SVG={binIcon}
                        type="delete"
                        onClick={handleDelete}
                    />
                )}
                <ContentObjectButton
                    SVG={thumbIcon}
                    type="favourite"
                    onClick={handleFavourite}
                    liked={liked}
                />
            </ObjectButtonContainer>
        </ObjectContainer>
    )
}

export default ContentObject;