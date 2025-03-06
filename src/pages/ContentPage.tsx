import styled from "styled-components";
import ContentSections from "../components/ContentSections";
import { darkColor3, darkText, PageType, tempPopularContent, tempUserContent } from "../constants";
import { hexToRGB } from "../utils";

const ContentContainer = styled.div`
    position: absolute; 
    width: 100%;
    top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
`

const FileInputContainer = styled.div`
    position: absolute;
    display: flex;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    background-color: ${darkColor3};
    align-items: center;
    justify-content: center;
    right: 2rem;
    top: 2rem;
    transition: all 0.2s ease-in-out;
    font-size: 2rem;
    box-shadow: 0 0.5rem 1rem rgba(${hexToRGB(darkColor3)}, 0.8);

    &:hover {
        font-size: 2.5rem;
        background-color: rgba(${hexToRGB(darkText)}, 0.15);
    }

    &:active {
        box-shadow: 0 0rem 1rem rgba(${hexToRGB(darkColor3)}, 0.8);
        transform: translateY(3px);
    }
`

const HiddenFileInput = styled.input.attrs({ type: "file" })`
    display: none;
`

interface ContentProps {
    setCurrentPage: (currentPage: PageType) => void;
}

function ContentPage({ setCurrentPage }: ContentProps) {
    const handleAddFile = () => {

    }

    // toggle when favourites is not empty
    const showFavourites = false;

    return (
        <ContentContainer>
            <FileInputContainer>
                <label
                    htmlFor="file-upload"
                    onClick={handleAddFile}
                >
                    +
                </label>
                <HiddenFileInput
                    id="file-upload"
                />
            </FileInputContainer>
            {showFavourites && (
                <ContentSections
                    name="FAVOURITES"
                    sectionContent={[]}
                />
            )}
            <ContentSections
                name="MY CONTENT"
                sectionContent={tempUserContent}
            />
            <ContentSections
                name="POPULAR CONTENT"
                onClick={() => setCurrentPage("popularContent")}
                sectionContent={tempPopularContent}
            />
        </ContentContainer>
    )
}

export default ContentPage;