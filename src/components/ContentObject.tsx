import styled from "styled-components";
import { darkColor3 } from "../constants";
import { hexToRGB } from "../utils";
import { ContentType } from "./GlobalProvider";

const ObjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 18rem;
    height: 12rem;
    border-radius: 2rem;
    margin: 1.5rem;
    background-color: ${darkColor3};
    box-shadow: 0 0.3rem 1rem rgba(${hexToRGB(darkColor3)}, 1);
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
        </ObjectContainer>
    )
}

export default ContentObject;