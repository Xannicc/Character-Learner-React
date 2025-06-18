import styled from "styled-components";
import Switch from '@mui/material/Switch';
import { SettingsType } from "./GlobalProvider";

const ToggleContainer = styled.div`
    display: flex;
    flex-direction: row;
    place-items: center;
    width: 100%;
    height: 2em;
    margin-bottom: 1%;
    margin-left: 5%;
`

const SwitchContainer = styled.div`
    margin: 0 2%;
`

const ToggleLabel = styled.label`
    margin-left: 2%;
`

interface ToggleProps {
    message: string
    toggle: boolean
    toggleFunc: (toggle: boolean) => void
}

function SettingsToggle({ message, toggle, toggleFunc }: ToggleProps) {
    return (
        <ToggleContainer>
            <SwitchContainer>
                <Switch
                    checked={toggle}
                    onClick={() => toggleFunc(toggle)}
                />
            </SwitchContainer>
            <ToggleLabel>{message}</ToggleLabel>
        </ToggleContainer>
    )
}

export default SettingsToggle;