import styled from "styled-components"
//import { useState } from 'react'

import Answer from "./components/Answer"
import Question from "./components/Question"
import TextInput from "./components/TextInput"

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: yellow;
`

function App() {

    return (
        <section>
            <MainContainer>
                <Question />
                <Answer />
                <TextInput />
            </MainContainer>
        </section>
    )
}

export default App
