import styled from "styled-components";

const QuestionContainer = styled.div`
    display: flex;
    width: 70vw;
    height: 50vh;
    place-items: center;
    justify-content: center;
    padding: 5%;
    background-color: blue;

    .question-text {
        font-size: clamp(5rem, max(6vw, 4vh), 10rem);
        text-align: center;
        width: fit-content;
        max-width: 90%;
        max-height: 90%;
    }

`

function Question() {
    return (
        <QuestionContainer>
            <h1 className="question-text">QUESTION</h1>
        </QuestionContainer>
    )
}

export default Question;