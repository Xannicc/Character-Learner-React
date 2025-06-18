import styled from "styled-components";
import SettingsToggle from "../components/SettingsToggle";
import { useGlobalContext } from "../components/GlobalProvider";
import SettingsSwapper from "../components/SettingsSwapper";

const SettingsContainer = styled.section`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 5em;
    right: min(5em, 10%);
    width: 18em;
    height: 23em;
    border-radius: 1em;
    color: ${({ theme }) => theme.color.text};
    background-color: ${({ theme }) => theme.color.first};
    box-shadow: 0 0.35rem 1rem ${({ theme }) => theme.shadow.third[80]};
    z-index: 3;
`

const ToggleSettingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10%;
`

const SwapperLabel = styled.div`
    display: flex;
    width: 100%;
    font-size: 1.1rem;
    justify-content: center;
    margin-top: 10%;
`

function SettingsPage() {
    const {
        userSettings: { darkMode, forceKanji, enableRomaji, displayMode, writeMode },
        globalFunctions: { toggleDarkMode, toggleForceKanji, toggleEnableRomaji, updateDisplayMode, updateWriteMode }
    } = useGlobalContext();

    return (
        <SettingsContainer>
            <ToggleSettingsContainer>
                <SettingsToggle
                    message={"dark mode"}
                    toggle={darkMode}
                    toggleFunc={toggleDarkMode}
                />

                <SettingsToggle
                    message={"force Kanji"}
                    toggle={forceKanji}
                    toggleFunc={toggleForceKanji}
                />

                <SettingsToggle
                    message={"enable typed Romaji"}
                    toggle={enableRomaji}
                    toggleFunc={toggleEnableRomaji}
                />
            </ToggleSettingsContainer>

            <SwapperLabel>Display Mode</SwapperLabel>

            <SettingsSwapper
                mode={displayMode}
                updateMode={updateDisplayMode}
            />

            <SwapperLabel>Writing Mode</SwapperLabel>

            <SettingsSwapper
                mode={writeMode}
                updateMode={updateWriteMode}
            />

        </SettingsContainer>
    )
}

export default SettingsPage;