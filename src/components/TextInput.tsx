import styled from "styled-components";
import { darkColor3, darkText } from "../constants";
import { hexToRGB } from "../utils";

const InputBox = styled.input`
    height: 4rem;
    max-width: 70vw;
    font-size: 3rem;
    border-radius: 15px;
    border: 0;
    box-shadow: 0 0 1.5rem rgba(${hexToRGB(darkColor3)}, 0.8);
    margin-top: 8rem;
    transition: all 0.2s ease-in-out;
    padding: 0 1rem;

    &:focus {
        box-shadow: 0 0 1.5rem rgba(${hexToRGB(darkText)}, 0.2);
    }
    
    @media (max-width: 768px) {
        margin-top: 6rem;
    }
`

function TextInput() {
    return (
        <InputBox type="text" />
    )
}

export default TextInput;