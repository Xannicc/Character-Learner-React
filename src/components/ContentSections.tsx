import styled from "styled-components";
import ContentObject from "./ContentObject";
import { ContentType } from "./GlobalProvider";
import React from "react";

const SectionContainer = styled.section`
    margin-bottom: 1rem;
`

const SectionTitle = styled.h1`
    font-size: 1.4rem;
    margin-left: 1rem;
    width: fit-content;
    border-radius: 1rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        font-size: 1.5rem;
        cursor: pointer;
    }

    &:active {
        transform: translateY(2px);
    }
`

const ContentBody = styled.div`
    display: flex;
    width: 100%;
`

interface ContentProps {
    name: string
    onClick?: () => void;
    sectionContent: ContentType[];
}

function ContentSections({ name, onClick, sectionContent }: ContentProps) {
    const contentObjects = sectionContent.map((object) => {
        console.log(object.name);
        return (
            <ContentObject
                key={object.name}
                name={object.name}
                content={object.content}
                selected={object.selected}
                liked={object.liked}
            />
        )
    });

    return (
        <SectionContainer>
            <SectionTitle
                onClick={onClick}
            >
                {name}
            </SectionTitle>
            <ContentBody>
                {contentObjects}
            </ContentBody>
        </SectionContainer>
    )
}

export default ContentSections;