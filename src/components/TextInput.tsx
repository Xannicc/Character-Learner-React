import styled from "styled-components";
import { useEffect, useState } from "react";

const TextInputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 0 2em 0;

    @media (max-width: 768px) {
        margin-bottom: 2em;
    }
`

const InputBox = styled.input`
    height: 1.5em;
    max-width: calc(60vw - 0.6em);
    font-size: 3rem;
    border-radius: 0.5em;
    border: 0;
    color: ${({ theme }) => theme.color.text};
    background-color: ${({ theme }) => theme.color.third};
    box-shadow: 0 0 1.5rem ${({ theme }) => theme.shadow.third[80]};
    margin: 0;
    transition: all 0.2s ease-in-out;
    padding: 0 0.3em;

    &:focus {
        box-shadow: 0 0 1.5rem ${({ theme }) => theme.shadow.text[20]};
    }

    @media (max-width: 768px) {
        height: 1em;
    }

`

interface TextInputProps {
    inputValue: string | undefined;
    setInputValue: (inputValue: string) => void;
    showAnswer: boolean;
    toggleShowAnswer: () => void;
}

function TextInput({ inputValue, setInputValue, showAnswer, toggleShowAnswer }: TextInputProps) {
    const [userInput, setUserInput] = useState("");

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            setInputValue(userInput);
        } else if (event.key === "Shift" && event.repeat) {
            return;
        } else if (event.key === "Shift") {
            toggleShowAnswer();
        }
    };

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Shift") {
            toggleShowAnswer();
        }
    };

    const handleBlur = () => {
        if (showAnswer) {
            toggleShowAnswer();
        }
    }

    useEffect(() => {
        if (inputValue === "") {
            setUserInput("");
        }
    }, [inputValue])

    return (
        <TextInputContainer>
            <InputBox
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
                onBlur={handleBlur}
            />
        </TextInputContainer>

    );
}

export default TextInput;