import styled from "styled-components";
import ContentObject from "./ContentObject";

const SectionContainer = styled.section`
    margin-bottom: 1rem;
`

const SectionHeader = styled.h1`
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
    background-color: blue;
`

interface ContentProps {
    name: string
}

function ContentSections({ name }: ContentProps) {
    return (
        <SectionContainer>
            <SectionHeader>{name}</SectionHeader>
            <ContentBody>
                <ContentObject></ContentObject>
                <ContentObject></ContentObject>
                <ContentObject></ContentObject>
            </ContentBody>
        </SectionContainer>
    )
}

export default ContentSections;