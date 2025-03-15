import styled from "styled-components";
import ContentObject from "./ContentObject";
import { ContentType } from "./GlobalProvider";

const SectionContainer = styled.section`
    display: flex;
    margin-top: 6rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
    max-width: 100%;
`

const SectionTitle = styled.h1`
    position: absolute;
    margin-top: -2.75rem;
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
        transform: translateY(0.2em);
    }
`

const ContentBody = styled.div`
    display: flex;
    width: 100%; 
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-wrap: nowrap;
        overflow-x: scroll;
    }
`

interface ContentProps {
    name: string
    onClick?: () => void;
    sectionContent: ContentType[];
}

function ContentSections({ name, onClick, sectionContent }: ContentProps) {
    const contentObjects = sectionContent.map((object) => {
        return (
            <ContentObject
                key={object.name}
                section={name}
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