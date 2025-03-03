import styled from "styled-components";
import { darkColor1 } from "../constants";

const ObjectContainer = styled.div`
    width: 18rem;
    height: 12rem;
    border-radius: 2rem;
    margin: 1.5rem;
    background-color: ${darkColor1};
`

function ContentObject() {
    return (
        <ObjectContainer>

        </ObjectContainer>
    )
}

export default ContentObject;