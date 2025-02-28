/// <reference types="vite-plugin-svgr/client" />

import styled from "styled-components"
import Question from "./components/Question"
import TextInput from "./components/TextInput"
import NavBar from "./components/NavBar"
import { useEffect } from "react"
import { darkText, darkColor1, darkColor2, darkColor3, lightText, lightColor1, lightColor2, lightColor3 } from "./constants"

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

function App() {
    useEffect(() => {
        // colors
        document.documentElement.style.setProperty("--darkText-color", darkText);
        document.documentElement.style.setProperty("--dark1-color", darkColor1);
        document.documentElement.style.setProperty("--dark1-color", darkColor2);
        document.documentElement.style.setProperty("--dark1-color", darkColor3);

        document.documentElement.style.setProperty("--lightText-color", lightText);
        document.documentElement.style.setProperty("--light1-color", lightColor1);
        document.documentElement.style.setProperty("--light2-color", lightColor2);
        document.documentElement.style.setProperty("--light3-color", lightColor3);
    }, []);

    return (
        <>
            <NavBar />
            <section>
                <MainContainer>
                    <Question />
                    <TextInput />
                </MainContainer>
            </section>
        </>
    )
}

export default App
