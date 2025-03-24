import styled from "styled-components";
import { useGlobalContext } from "./GlobalProvider";
import { useEffect, useState } from "react";

const InputBox = styled.input`
    height: 4rem;
    max-width: 70vw;
    font-size: 3rem;
    border-radius: 0.5em;
    border: 0;
    color: ${({ theme }) => theme.color.text};
    background-color: ${({ theme }) => theme.color.third};
    box-shadow: 0 0 1.5rem ${({ theme }) => theme.shadow.third[80]};
    margin-top: 8rem;
    transition: all 0.2s ease-in-out;
    padding: 0 1rem;

    &:focus {
        box-shadow: 0 0 1.5rem ${({ theme }) => theme.shadow.text[20]};
    }
    
    @media (max-width: 768px) {
        margin-top: 6rem;
    }
`

interface TextInputProps {
    inputValue: string | undefined;
    setInputValue: (inputValue: string) => void;
}

function TextInput({ inputValue, setInputValue }: TextInputProps) {
    const [userInput, setUserInput] = useState("");

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            setInputValue(userInput);
        }
    };

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
        />
    );
}

export default TextInput;