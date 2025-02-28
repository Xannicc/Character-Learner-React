import styled from "styled-components";
import { darkColor3, darkText } from "../constants";
import { hexToRGB, useToggleState } from "../utils";
import Arrow from "./Arrow";

const CardContainer = styled.section`
    display: flex;
    flex-direction: row;
    place-items: center;
    justify-content: center;
    width: 100vw;
`

const QuestionContainer = styled.div`
    position: absolute;
    display: flex;
    width: min(70vw, 75rem);
    height: 50vh;
    place-items: center;
    justify-content: center;
    background-color: ${darkColor3};
    border-radius: 20px;
    box-shadow: 0px 0px 15px rgba(${hexToRGB(darkText)}, 0.15);
    z-index: 1;
    
    .question-text {
        font-size: clamp(2rem, max(6vw, 4vh), 10rem);
        text-align: center;
        width: fit-content;
        max-width: 90%;
        max-height: 90%;
    }

`

function Question() {
    const [isCardVisible, toggleIsCardVisible] = useToggleState(false);

    const handleArrowClick = () => {
        toggleIsCardVisible();
        // animation
        // on animation end do this toggleIsCardVisible()
    };

    return (
        <CardContainer>
            <Arrow direction="left" onClick={handleArrowClick} />

            <QuestionContainer style={{ zIndex: 2 }}>
                <h1 className="question-text">QUESTION</h1>
            </QuestionContainer>

            {isCardVisible && (
                <QuestionContainer>
                    <h1 className="question-text">BEHIND</h1>
                </QuestionContainer>
            )}

            <Arrow direction="right" onClick={handleArrowClick} />
        </CardContainer >
    )
}

export default Question;