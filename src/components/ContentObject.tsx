import styled from "styled-components";
import { ContentType } from "./GlobalProvider";
import ContentObjectButton from "./ContentObjectButton";
import binIcon from "../assets/bin-icon.svg?react";
import thumbIcon from "../assets/thumb-icon.svg?react";

const ObjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 18rem;
    height: 12rem;
    border-radius: 2rem;
    margin: 1.5rem;
    background-color: ${({ theme }) => theme.color.third};
    box-shadow: 0 0.5rem 1rem ${({ theme }) => theme.shadow.third[80]};
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

function ContentObject({ name, content, selected, liked }: ContentType) {
    return (
        <ObjectContainer>
            <Title>
                {name}
            </Title>
            <ObjectButtonContainer>
                <ContentObjectButton
                    SVG={binIcon}
                    type="delete"
                    onClick={() => true}
                />
                <ContentObjectButton
                    SVG={thumbIcon}
                    type="favourite"
                    onClick={() => true}
                />
            </ObjectButtonContainer>
        </ObjectContainer>
    )
}

export default ContentObject;