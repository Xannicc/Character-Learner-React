import styled from "styled-components";
import ContentSections from "../components/ContentSections";
import { PageType, tempPopularContent, tempUserContent } from "../constants";
import React from "react";
import { parseCSV } from "../utils";
import { ContentType, useGlobalContext } from "../components/GlobalProvider";

const ContentContainer = styled.div`
    position: absolute; 
    width: 100%;
    top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    overflow-y: scroll;
`

const FileInputContainer = styled.div`
    position: absolute;
    display: flex;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.third};
    align-items: center;
    justify-content: center;
    right: 2rem;
    top: 2rem;
    transition: all 0.2s ease-in-out;
    font-size: 2rem;
    box-shadow: 0 0.5rem 1rem ${({ theme }) => theme.shadow.third[80]};

    &:hover {
        font-size: 2.5rem;
        background-color: ${({ theme }) => theme.shadow.text[15]};
    }

    &:active {
        box-shadow: 0 0rem 1rem ${({ theme }) => theme.shadow.third[80]};
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
    const {
        userContent,
        globalFunctions: { addContent }
    } = useGlobalContext();

    const handleAddFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files || files.length === 0) {
            return;
        }

        for (let file of files) {
            try {
                const parsed = await parseCSV(file);
                addContent({
                    name: file.name.slice(0, -4),
                    content: parsed,
                    selected: false,
                    liked: false
                });
            }
            catch (error) {
                console.error(error);
            }
        }
    };

    // toggle when favourites is not empty
    const showFavourites = false;

    return (
        <ContentContainer>
            <FileInputContainer>
                <label
                    htmlFor="file-upload"
                >
                    +
                </label>
                <HiddenFileInput
                    id="file-upload"
                    accept=".csv"
                    multiple
                    onChange={handleAddFile}
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
                sectionContent={userContent}
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