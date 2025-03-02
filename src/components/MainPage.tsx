import styled from "styled-components"
import Question from "./Question"
import TextInput from "./TextInput"

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
    return (
        <MainContainer>
            <Question />
            <TextInput />
        </MainContainer>
    )
}

export default MainPage;