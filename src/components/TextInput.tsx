import styled from "styled-components";

const InputBox = styled.input`
    height: 4rem;
    max-width: 70vw;
    font-size: 3rem;
    border-radius: 15px;
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

function TextInput() {
    return (
        <InputBox type="text" />
    )
}

export default TextInput;