import cogIcon from "../assets/cog-icon.svg"
import styled from "styled-components"

const SettingsButton = styled.button`
    margin-right: 0;
`

const CogImage = styled.img`
    &:hover {
        transform: rotate(90deg);
    }
`
function Settings() {
    return (
        <SettingsButton className="circle-button">
            <CogImage className="circle-button-image" src={cogIcon} />
        </SettingsButton>
    )
}

export default Settings