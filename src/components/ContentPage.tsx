import styled from "styled-components";
import ContentSections from "./ContentSections";
import { PageType } from "../constants";

const ContentContainer = styled.div`
    position: absolute; 
    width: 100%;
    top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
`

interface ContentProps {
    setCurrentPage: (currentPage: PageType) => void;
}

function ContentPage({ setCurrentPage }: ContentProps) {
    const showFavourites = false;

    return (
        <ContentContainer>
            {showFavourites && (
                <ContentSections
                    name="FAVOURITES"
                />
            )}
            <ContentSections
                name="MY CONTENT"
            />
            <ContentSections
                name="POPULAR CONTENT"
            />
        </ContentContainer>
    )
}

export default ContentPage;