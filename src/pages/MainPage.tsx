import styled from "styled-components"
import Question from "../components/Question"
import TextInput from "../components/TextInput"
import { ContentType, useGlobalContext } from "../components/GlobalProvider";
import { useState } from "react";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5%;

    @media (max-width: 768px) {
        margin-top: max(10%, 6rem);
    }
`

function MainPage() {
    const {
        userContent
    } = useGlobalContext();

    const [num, setNum] = useState<number | undefined>(undefined);
    const [inputValue, setInputValue] = useState<string | undefined>(undefined);

    let studySession: any[] = [];
    userContent.map(content => {
        if (content.selected === true) {
            for (let question of content.content) {
                studySession.push(question);
            }
        }
    });

    return (
        <MainContainer>
            {studySession.length > 0 && (
                <>
                    <Question
                        content={studySession}
                        num={num}
                        setNum={setNum}
                        inputValue={inputValue}
                    />
                    < TextInput
                        setInputValue={setInputValue}
                    />
                </>
            )}
        </MainContainer>
    )
}

export default MainPage;