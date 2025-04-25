import styled from "styled-components";
import { useEffect, useState } from "react";

const InputBox = styled.input`
    height: 4rem;
    max-width: calc(60vw - 0.6em);
    font-size: 3rem;
    border-radius: 0.5em;
    border: 0;
    color: ${({ theme }) => theme.color.text};
    background-color: ${({ theme }) => theme.color.third};
    box-shadow: 0 0 1.5rem ${({ theme }) => theme.shadow.third[80]};
    margin-bottom: 1em;
    transition: all 0.2s ease-in-out;
    padding: 0 0.3em;

    &:focus {
        box-shadow: 0 0 1.5rem ${({ theme }) => theme.shadow.text[20]};
    }
    
    @media (max-width: 768px) {
        margin-bottom: 1.5em;
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
        <InputBox
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            onBlur={handleBlur}
        />
    );
}

export default TextInput;